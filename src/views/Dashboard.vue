<template>
  <div>
    <div>
      <v-parallax height="180" :src="require('../assets/darexcover.jpg')">
        <v-layout wrap>
          <Welcome />
          <Quickview class="hidden-sm-and-down" />
        </v-layout>
      </v-parallax>
    </div>
    <div class="main-overview">
      <v-layout justify-space-around wrap>
        <overview-card color="accent" full-width>
          <template v-slot:header>
            <apexchart
              class="plan-chart"
              type="radialBar"
              :options="options"
              :series="series"
            ></apexchart>
          </template>
          <h4 class="title font-weight-light">Pregled realizacije</h4>
          <p class="category d-inline-flex font-weight-light">
            Realizacija periodičnih planova prodaje
          </p>
        </overview-card>
        <overview-card
          full-width
          color="accent"
          @click="$router.push({ name: 'plans' })"
          icon="fa-chart-line"
        >
          <template v-slot:header>
            <apexchart
              class="plan-chart"
              type="radialBar"
              :options="options"
              :series="series"
            ></apexchart>
          </template>
          <h4 class="title font-weight-light">Pregled realizacije</h4>
          <p class="category d-inline-flex font-weight-light">
            Realizacija periodičnih planova prodaje
          </p>
        </overview-card>
        <overview-card
          full-width
          color="accent"
          @click="$router.push({ name: 'plans' })"
          icon="fa-chart-line"
        >
          <template v-slot:header>
            <apexchart
              class="plan-chart"
              type="radialBar"
              :options="options"
              :series="series"
            ></apexchart>
          </template>
          <h4 class="title font-weight-light">Pregled realizacije</h4>
          <p class="category d-inline-flex font-weight-light">
            Realizacija periodičnih planova prodaje
          </p>
        </overview-card>
      </v-layout>
    </div>
  </div>
</template>
<style lang="scss"></style>

<script>
import Quickview from "@/components/Dashboard/Quickview.vue";
import Welcome from "@/components/Dashboard/Welcome.vue";
import OverviewCard from "@/components/OverviewCard.vue";
export default {
  name: "Dashboard",
  components: { Quickview, Welcome, OverviewCard },
  data() {
    return {
      options: {
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: "Ukupno:",
                formatter: () => {
                  return `${Math.round(
                    this.series.reduce((tot, cur) => tot + cur, 0) /
                      this.series.length
                  )}%`;
                }
              }
            }
          }
        },
        chart: {
          id: "vuechart-example"
        },
        labels: ["Godina", "Kvartal", "Mesec"]
      },
      series: [25, 70, 90]
    };
  }
};
</script>
