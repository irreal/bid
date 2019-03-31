<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="noop()">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="noop()">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Darex BID</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
        <!-- <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/rJdVMq"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>-->
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import netlifyIdentity from "netlify-identity-widget";
import { EventBus } from "./event-bus.js";

netlifyIdentity.init({
  APIUrl: "https://www.darex.ml/.netlify/identity",
  logo: true
});

export default {
  name: "App",
  props: {
    source: String
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "getUserStatus",
      user: "getUser"
    }),
    username() {
      return this.user ? this.user.username : ", there!";
    }
  },
  data: () => {
    return {
      nwid: netlifyIdentity,
      drawer: null
    };
  },
  mounted() {
    EventBus.$on("login", () => {
      this.triggerNetlifyIdentityAction("login");
    });
    EventBus.$on("logout", () => {
      this.triggerNetlifyIdentityAction("logout");
    });
    EventBus.$on("signup", () => {
      this.triggerNetlifyIdentityAction("signup");
    });
  },
  methods: {
    ...mapActions({
      updateUser: "updateUser"
    }),
    noop() {
      alert("no op");
    },
    triggerNetlifyIdentityAction(action) {
      if (action == "login" || action == "signup") {
        netlifyIdentity.open(action);
        netlifyIdentity.on(action, user => {
          netlifyIdentity.close();
          this.updateUser({
            currentUser: user
          });
          if (user) {
            this.$router.push({ name: "home" });
          }
        });
      } else if (action == "logout") {
        this.updateUser({
          currentUser: null
        });
        netlifyIdentity.logout();
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>
