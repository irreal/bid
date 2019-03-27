<template>
  <div class="quickview">
    <div class="quickview__item">
      <div class="quickview__item-total">{{ weather.location }}</div>
      <div class="quickview__item-description">
        <i class="fas fa-map-marker-alt"></i>
        <span class="text-light">Lokacija</span>
      </div>
    </div>
    <div class="quickview__item">
      <div class="quickview__item-total">{{ weather.temperature }}</div>
      <div class="quickview__item-description">
        <i class="fas fa-thermometer-three-quarters"></i>
        <span class="text-light">Temperatura</span>
      </div>
    </div>
    <div class="quickview__item">
      <div class="quickview__item-total">
        <div v-if="weather.icon" class="weather-icon">
          <img :src="weather.icon" />
        </div>
        <i v-else class="far fa-question-circle"></i>
      </div>
      <div class="quickview__item-description height-fix">
        <i class="fas fa-cloud"></i>
        <span class="text-light">Vreme</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "QuickView",
  data() {
    return {
      weather: {
        temperature: "--°",
        location: "nepoznato",
        icon: ""
      }
    };
  },
  mounted() {
    axios
      .get("/.netlify/functions/weather")
      .then(resp => {
        this.weather.temperature = Math.round(resp.data.main.temp) + "°";
        this.weather.location = resp.data.name;
        this.weather.icon = `https://openweathermap.org/img/w/${
          resp.data.weather[0].icon
        }.png`;
      })
      .catch(err => {
        console.error("Error getting weather details", err);
      });
  }
};
</script>
<style scoped lang="scss">
.weather-icon img {
  height: 48px;
}
.height-fix {
  position: relative;
  top: -5px;
}
</style>
