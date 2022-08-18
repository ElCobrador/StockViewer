<template>
  <div class="form-group overflow-auto">
    <CollapseableCard v-for="dailyStockReport in dailyStockReports" :key="dailyStockReports.indexOf(dailyStockReport)">
      <template #header>
        {{ dailyStockReport.Date.toLocaleDateString("en-CA") }}
      </template>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              Symbol
            </th>
            <!-- <th scope="col">
              Sector
            </th>
            <th scope="col">
              Volume
            </th> -->
            <th scope="col">
              Relative Strength Trend
            </th>
            <th scope="col">
              Beta
            </th>
            <!-- <th scope="col">
              Country
            </th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock in dailyStockReport.Stocks" :key="dailyStockReport.Stocks.indexOf(stock)">
            <td>
              <button class="btn" @click="SelectedStockChanged(stock.StockSymbol)">
                {{ stock.StockSymbol }}
              </button>
            </td>
            <!-- <td>{{ stock.Sector }}</td>
            <td>{{ stock.Volume }}</td> -->
            <td>{{ stock.RelativeStrengthTrend }}</td>
            <td>{{ stock.Beta }}</td>
            <!-- <td>{{ stock.Country }}</td> -->
          </tr>
        </tbody>
      </table>
    </CollapseableCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import DailyStockReport from '../../Business/Models/DailyStockReport';
import CollapseableCard from '../Common/CollapseableCard.vue';

export default defineComponent({
  components: {
    CollapseableCard,
  },
  props: {
    dailyStockReports: {
      type: Array as PropType<Array<DailyStockReport>>,
      default: () => [],
    },
  },
  emits: ['onStockSymbolChanged'],
  setup () {
    return {};
  },
  data () {
    return {
      selectedSymbol: 'MTSI',
    };
  },
  methods: {
    SelectedStockChanged (symbol : string) {
      this.selectedSymbol = symbol;
      this.$emit('onStockSymbolChanged', symbol);
    },
  },
});
</script>

<style scoped>
</style>