<template>
  <div class="fill-height plan-page">
    <div class="plan-container d-flex flex-column">
      <apexchart
        data-test="plans-chart"
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
.plan-page {
  background-color: #eee;
}
</style>

<script>
import chartOptions from "./PlanChartOptions";
import gql from "graphql-tag";

export default {
  name: "PlanHomePage",
  computed: {
    chartData() {
      return [
        {
          name: "Realizacija",
          data:
            this.plans && this.plans.length
              ? this.plans.map(p => p.percent_complete)
              : []
        }
      ];
    },
    chartOptions() {
      const options = { ...chartOptions };
      options.chart = {
        ...chartOptions.chart,
        events: { dataPointSelection: this.clickedItem }
      };
      options.xaxis.categories =
        this.plans && this.plans.length ? this.plans.map(p => p.title) : [];
      return options;
    }
  },
  apollo: {
    plans: gql`
      {
        plans {
          title
          percent_complete
          created_by
        }
      }
    `
  },
  data() {
    return {
      plans: []
    };
  },
  methods: {
    clickedItem(_, __, { selectedDataPoints }) {
      if (selectedDataPoints[0][0] !== undefined) {
        const plan = this.plans[selectedDataPoints[0][0]];
        if (plan) {
          this.$router.push({
            name: "plan-detail",
            params: { planId: plan._id }
          });
        }
      }
    }
  }
};
</script>
