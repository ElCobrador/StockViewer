<template>
  <div class="container-fluid p-0 m-0 ">
    <div class="row">
      <div class="col-xxl-8 col-xl-9 col-md-12">
        <StockChart :symbol="selectedSymbol" />
      </div>
      <div class="col-xxl-4 col-xl-3 col-md-12 daily-stock-report-container overflow-auto">
        <StockList :daily-stock-reports="dailyStockReports"
                   @on-stock-symbol-changed="onSelectedStockSymbolChanged" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StockList from '@/components/Scenario/StockList.vue';
import StockChart from '@/components/StockChart.vue';

import MockedData from '@/Business/Models/MockedData';
import DailyStockReport from '@/Business/Models/DailyStockReport';

export default defineComponent({
  components: {
    StockList,
    StockChart,
  },
  setup () {
    return {};
  },
  data () {
    return {
      selectedSymbol: 'MTSI',
      dailyStockReports: [] as Array<DailyStockReport>,
    };
  },
  mounted () {
    this.dailyStockReports = MockedData.GetDailyStockReport();
  },
  methods: {
    onSelectedStockSymbolChanged (symbol: string) {
      this.selectedSymbol = symbol;
    },
    onDataChanged (dailyStockReports: Array<DailyStockReport>) {
      this.dailyStockReports = dailyStockReports;
    },
  },
});
</script>

<style scoped>
.daily-stock-report-container {
  max-height: 1000px;
}
</style>