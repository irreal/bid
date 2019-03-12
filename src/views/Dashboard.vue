<template>
  <div>
    <div class="main-header">
      <div class="main-header__intro-wrapper">
        <div class="main-header__welcome">
          <div class="main-header__welcome-title text-light">Zdravo,
            <strong>Žarko</strong>
          </div>
          <div class="main-header__welcome-subtitle text-light"></div>
        </div>
        <div class="quickview">
          <div class="quickview__item">
            <div class="quickview__item-total">10</div>
            <div class="quickview__item-description">
              <i class="far fa-file-alt"></i>
              <span class="text-light">Izveštaja</span>
            </div>
          </div>
          <div class="quickview__item">
            <div class="quickview__item-total">0</div>
            <div class="quickview__item-description">
              <i class="far fa-comment"></i>
              <span class="text-light">Poruka</span>
            </div>
          </div>
          <div class="quickview__item">
            <div class="quickview__item-total">12&deg;</div>
            <div class="quickview__item-description">
              <i class="fas fa-map-marker-alt"></i>
              <span class="text-light">Beograd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-overview">
      <div class="overviewCard">
        <div class="overviewCard-icon overviewCard-icon--document">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="overviewCard-description">
          <h3 class="overviewCard-title text-light">Novi
            <strong>Plan</strong>
          </h3>
          <p class="overviewCard-subtitle">plan prodaje u periodu</p>
        </div>
      </div>
      <div class="overviewCard">
        <div class="overviewCard-icon overviewCard-icon--calendar">
          <i class="far fa-calendar-check"></i>
        </div>
        <div class="overviewCard-description">
          <h3 class="overviewCard-title text-light">Sledeći
            <strong>Sastanci</strong>
          </h3>
          <p class="overviewCard-subtitle">kalendar timskih sastanaka</p>
        </div>
      </div>
      <!-- <div class="overviewCard">
        <div class="overviewCard-icon overviewCard-icon--mail">
          <i class="far fa-envelope"></i>
        </div>
        <div class="overviewCard-description">
          <h3 class="overviewCard-title text-light">Recent
            <strong>Emails</strong>
          </h3>
          <p class="overviewCard-subtitle">+10</p>
        </div>
      </div>
      <div class="overviewCard">
        <div class="overviewCard-icon overviewCard-icon--photo">
          <i class="far fa-file-image"></i>
        </div>
        <div class="overviewCard-description">
          <h3 class="overviewCard-title text-light">New
            <strong>Album</strong>
          </h3>
          <p class="overviewCard-subtitle">House Concert</p>
        </div>
      </div> -->
    </div>
    <!-- /.main__overview -->
    <div class="main__cards">
      <!-- <div class="card">
        <div class="card__header">
          <div class="card__header-title text-light">
            Your
            <strong>Events</strong>
            <a href="#" class="card__header-link text-bold">View All</a>
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
        <div class="card__main">
          <div class="card__row">
            <div class="card__icon">
              <i class="fas fa-gift"></i>
            </div>
            <div class="card__time">
              <div>today</div>
            </div>
            <div class="card__detail">
              <div class="card__source text-bold">Jonathan G</div>
              <div class="card__description">Going away party at 8:30pm. Bring a friend!</div>
              <div class="card__note">1404 Gibson St</div>
            </div>
          </div>
          <div class="card__row">
            <div class="card__icon">
              <i class="fas fa-plane"></i>
            </div>
            <div class="card__time">
              <div>Tuesday</div>
            </div>
            <div class="card__detail">
              <div class="card__source text-bold">Matthew H</div>
              <div class="card__description">Flying to Bora Bora at 4:30pm</div>
              <div class="card__note">Delta, Gate 27B</div>
            </div>
          </div>
          <div class="card__row">
            <div class="card__icon">
              <i class="fas fa-book"></i>
            </div>
            <div class="card__time">
              <div>Thursday</div>
            </div>
            <div class="card__detail">
              <div class="card__source text-bold">National Institute of Science</div>
              <div
                class="card__description"
              >Join the institute for an in-depth look at Stephen Hawking</div>
              <div class="card__note">7:30pm, Carnegie Center for Science</div>
            </div>
          </div>
          <div class="card__row">
            <div class="card__icon">
              <i class="fas fa-heart"></i>
            </div>
            <div class="card__time">
              <div>Friday</div>
            </div>
            <div class="card__detail">
              <div class="card__source text-bold">24th Annual Heart Ball</div>
              <div class="card__description">Join us and contribute to your favorite local charity.</div>
              <div class="card__note">6:45pm, Austin Convention Ctr</div>
            </div>
          </div>
          <div class="card__row">
            <div class="card__icon">
              <i class="fas fa-heart"></i>
            </div>
            <div class="card__time">
              <div>Saturday</div>
            </div>
            <div class="card__detail">
              <div class="card__source text-bold">Little Rock Air Show</div>
              <div class="card__description">See the Blue Angels fly with roaring thunder</div>
              <div class="card__note">11:00pm, Jacksonville Airforce Base</div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="card">
        <div class="card__header">
          <div class="card__header-title text-light">
            Poslednji
            <strong>Izveštaji </strong>
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
            <strong>prodaje </strong>
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
        <div id="chartdiv">
              <apexchart width="350" type="radialBar" :options="options" :series="series"></apexchart>
        </div>
      </div>
    </div>
    <!-- /.main-cards -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import BrandHeader from '@/components/BrandHeader.vue';
import { ApexOptions } from 'apexcharts';
@Component({
  //   components: {BrandHeader},
})
export default class Dashboard extends Vue {
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
    labels: ['Godina', 'Kvartal', 'Mesec'],
  };

  private series: ApexNonAxisChartSeries = [25, 70, 90];
}
</script>

<style scoped lang="scss">
</style>
