<template>
  <div>
    <div>
      <v-parallax
        height="180"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1609106/lake-shadow-water.jpg"
      >
        <v-layout>
          <Welcome />
          <Quickview />
        </v-layout>
      </v-parallax>
    </div>
    <div class="main-overview">
      <v-layout justify-space-around>
        <OverviewCard color="accent" full-width="true">
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
        </OverviewCard>
        <OverviewCard
          full-width
          color="accent"
          @click="$router.push('plans')"
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
        </OverviewCard>
        <OverviewCard
          full-width
          color="accent"
          @click="$router.push('plans')"
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
        </OverviewCard>
      </v-layout>
    </div>
    <!-- /.main__overview -->
    <div class="main__cards">
      <div class="card">
        <div class="card__header">
          <div class="card__header-title text-light">
            Poslednji
            <strong>Izveštaji&nbsp;</strong>
            <a href="#" class="card__header-link text-bold">Pregledaj sve</a>
          </div>
          <div class="settings">
            <div class="settings__block">
              <i class="fas fa-edit"></i>
            </div>
            <div class="settings__block">
              <i class="fas fa-cog"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="documents">
            <div class="document">
              <div class="document__img"></div>
              <div class="document__title">realizacija</div>
              <div class="document__date">03.03.2019</div>
            </div>
            <div class="document">
              <div class="document__img"></div>
              <div class="document__title">budžet</div>
              <div class="document__date">24.02.2019</div>
            </div>
            <div class="document">
              <div class="document__img"></div>
              <div class="document__title">zalihe</div>
              <div class="document__date">10.02.2019</div>
            </div>
            <div class="document">
              <div class="document__img"></div>
              <div class="document__title">dospela potraživanja</div>
              <div class="document__date">03.02.2019</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card--finance">
        <div class="card__header">
          <div class="card__header-title text-light">
            Plan
            <strong>prodaje&nbsp;</strong>
            <a
              href
              @click.prevent="$router.push('plans')"
              class="card__header-link text-bold"
              >Pregledaj sve</a
            >
          </div>
          <div class="settings">
            <div class="settings__block">
              <i class="fas fa-edit"></i>
            </div>
            <div class="settings__block">
              <i class="fas fa-cog"></i>
            </div>
          </div>
        </div>
        <div id="chartdiv"></div>
      </div>
    </div>
    <!-- /.main-cards -->
  </div>
</template>
<style lang="scss"></style>

<script>
import Quickview from "@/components/Dashboard/Quickview.vue";
import Welcome from "@/components/Dashboard/Welcome.vue";
import OverviewCard from "@/components/Dashboard/OverviewCard.vue";
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
