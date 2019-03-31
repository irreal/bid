<template>
  <div>
    <section>
      <v-parallax :src="require('../assets/darexbuilding.jpg')">
        <v-layout column align-center justify-center class="orange--text">
          <img src="../assets/logo.svg" height="200" class="elevation-24" />
          <h1 class="mb-2 display-1 text-xs-center">Darex BID</h1>
          <div class="subheading mb-3 text-xs-center">
            Business Insight Dashboard
          </div>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 v-if="isLoggedIn" class="headline">
              Ulogovani korisnik: {{ user.user_metadata.full_name }}
            </h2>
            <h2 v-else class="headline">Trenutno niste ulogovani</h2>
            <v-layout
              v-if="isLoggedIn"
              align-center
              justify-center
              column
              fill-height
            >
              <v-btn outline color="accent" @click="$router.push('home')"
                >Dashboard</v-btn
              >
              <span>ili</span>
              <v-btn outline color="accent" @click="emitGlobal('logout')"
                >Izloguj se</v-btn
              >
            </v-layout>
            <div v-else>
              <v-btn outline color="accent" @click="emitGlobal('login')"
                >Uloguj se</v-btn
              >
              <span>ili</span>
              <v-btn outline color="accent" @click="emitGlobal('signup')"
                >Kreiraj nalog</v-btn
              >
            </div>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-start>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large color="accent">assignment</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Izveštaji</div>
                  </v-card-title>
                  <v-card-text>
                    Detaljni izveštaji o poslovanju, analiza trendova, brzi
                    pregled stanja.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large color="accent">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Brzina</div>
                  </v-card-title>
                  <v-card-text>
                    Zahvaljujući najmodernijim web tehnologijama i globalno
                    raspoređenom hostingu, BID je veoma brza aplikacija koja vam
                    štedi vreme i omogućava da se fokusirate na ono što vas
                    zanima, umesto da čekate učitavanje ekrana.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large color="accent">security</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Bezbednost</div>
                  </v-card-title>
                  <v-card-text>
                    BID koristi autentifikacione metode koje su standard u
                    industriji, zajedno sa end-to-end enkripcijom podataka. Vaši
                    podaci su bezbedni.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-parallax :src="require('../assets/darexpartners.jpg')">
        <v-card color="primary">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="mb-2 display-1 text-xs-center">Potrebna je pomoć?</h1>
            <div class="subheading mb-3 text-xs-center">
              Obratite se emailom na:
              <a class="orange--text lighten-2" href="mailto:it@darex.rs"
                >it@darex.rs</a
              >
            </div>
          </v-layout>
        </v-card>
      </v-parallax>
    </section>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";
import { mapGetters } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapGetters({
      isLoggedIn: "getUserStatus",
      user: "getUser"
    })
  },
  methods: {
    emitGlobal(event) {
      EventBus.$emit(event);
    }
  }
};
</script>
