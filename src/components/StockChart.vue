<template>
  <div class="trading-view-widget-container">
    <div :id="container" style="height: 100%;" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

declare global {
  interface Window {
    TradingView: any;
  }
}

export default defineComponent({
  props: {
    symbol: {
      type: String,
      default: 'AAPL',
    },
  },
  setup () {
    return {};
  },
  data () {
    return {
      container: ref('tradingview-chart'),
      scriptID: ref('tradingview-chart-script'),
      defaultOptions: {
        autosize: true,
        symbol: 'AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: 'tradingview-chart',
        hide_side_toolbar: false,
        studies: [
          {
            id: 'MASimple@tv-basicstudies',
            inputs: {
              length: 30,

            },
          },
        ],
      },
    };
  },
  watch: {
    symbol () {
      this.ResetChartWithNewSymbol();
    },
  },
  mounted () {
    this.AddTradingViewScriptToHead();
  },
  methods: {
    ResetChartWithNewSymbol () {
      const element = document.getElementById(this.scriptID);
      element?.remove();
      this.AddTradingViewScriptToHead();
    },
    canUseDOM () {
      return typeof window !== 'undefined' && window.document && window.document.createElement;
    },

    scriptExists () {
      return this.getScriptElement() !== null;
    },

    getScriptElement () {
      return document.getElementById(this.scriptID);
    },

    AddTradingViewScriptToHead () {
      if (!this.canUseDOM()) return;
      if (this.scriptExists()) return;

      const script = document.createElement('script');
      script.id = this.scriptID;
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/tv.js';
      script.onload = this.OnScriptLoaded;
      document.getElementsByTagName('head')[0].appendChild(script);
    },

    OnScriptLoaded () {
      if (typeof window.TradingView === 'undefined') return;

      //   if (this.chartOptions.container_id !== this.container) {
      //     console.error('container_id in Chart component must be "tradingview-chart"');
      //     return;
      //   }

      const options = { ...this.defaultOptions, ...{ symbol: this.symbol } };

      /* eslint-disable no-new */
      // eslint-disable-next-line new-cap
      new window.TradingView.widget(options);
    },
  },
});
</script>

<style scoped>
.trading-view-widget-container {
    height: 600px;
}
</style>