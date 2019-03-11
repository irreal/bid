<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="doSomething()">
    <MojaComp msg="test msg"/>
    <apexchart width="500" type="radialBar" :options="options" :series="series"></apexchart>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import MojaComp from '@/components/MojaComp.vue';
import { ApexOptions } from 'apexcharts';
import Plan from '@/models/Plan';

@Component({
  components: {
    HelloWorld,
    MojaComp,
  },
})
export default class Home extends Vue {
  private options: ApexOptions = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Ukupno:',
            formatter: () => {
              return `${Math.round(
                this.series.reduce((tot, cur) => tot + cur, 0) /
                  this.series.length,
              )}%`;
            },
          },
        },
      },
    },
    chart: {
      id: 'vuechart-example',
    },
    labels: ['dnevno', 'mesečno', 'godišnje'],
  };

  private series: ApexNonAxisChartSeries = [55, 24, 80];
  private doSomething() {
    alert(JSON.stringify(this.plans[0]));
  }

  get plans(): Plan[] {
    return this.$store.getters.plans;
  }
}
</script>
