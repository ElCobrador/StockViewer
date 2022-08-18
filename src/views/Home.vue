<template>
  <div class="main-container">
    <DailyStockReportView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DailyStockReportView from '@/components/Scenario/DailyStockReportView.vue';

export default defineComponent({
  name: 'Home',
  components: {
    DailyStockReportView,
  },
});
</script>

<style scoped>
.main-container {
  margin-left: 1%;
  margin-right: 1%;
}
</style>