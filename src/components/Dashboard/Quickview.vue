<template>
  <v-layout align-end justify-end py-0 class="headline">
    <v-card class="pa-3 elevation-0" color="transparent" dark height="150px">
      <v-card-title>
        {{ weather.location }}
      </v-card-title>
      <v-card-title>
        <span class="text-light">Lokacija</span>
      </v-card-title>
    </v-card>
    <v-card class="pa-3 elevation-0" color="transparent" dark height="150px">
      <v-card-title>
        <span>{{ weather.temperature }}</span>
      </v-card-title>
      <v-card-title>
        <span class="text-light">Temperatura</span>
      </v-card-title>
    </v-card>
    <v-card class="pa-3 elevation-0" color="transparent" dark height="150px">
      <v-card-title class="py-0 pt-1 mb-2">
        <img :src="weather.icon" />
      </v-card-title>
      <v-card-title>
        <span class="text-light">Vreme</span>
      </v-card-title>
    </v-card>
  </v-layout>
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
.fixed-height {
  height: 64px;
}
</style>
