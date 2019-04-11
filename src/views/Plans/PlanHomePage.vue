<template>
  <div>
    <div class="plan-container d-flex flex-column">
      <apexchart
        type="bar"
        height="100%"
        :options="chartOptions"
        :series="chartData"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  margin-left: 25px;
}
.plan-container {
  height: 85vh;
}
</style>

<script>
import chartOptions from "./PlanChartOptions";

export default {
  name: "PlanHomePage",
  computed: {
    chartData() {
      return [{ name: "Realizacija", data: [50, 100] }];
    },
    chartOptions() {
      const options = { ...chartOptions };
      options.xaxis.categories = ["Plan 1", "Plan 2"];
      return options;
    }
  },
  data() {
    return {};
  }
};
</script>
