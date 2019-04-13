<template>
  <v-app id="inspire">
    <v-navigation-drawer
      dark
      v-if="isLoggedIn"
      v-model="drawer"
      class="blue-grey darken-2"
      fixed
      app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar color="accent">
              <user-avatar class="white--text"></user-avatar>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ username }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile @click="$router.push({ name: 'home' })">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          data-test="menu-button-sale-plans"
          class="menu-item-plans"
          @click="$router.push({ name: 'plans' })"
        >
          <v-list-tile-action>
            <v-icon>calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Planovi Prodaje</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          class="menu-item-logout"
          @click="triggerNetlifyIdentityAction('logout')"
        >
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Izloguj se</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" class="accent--text" fixed app dark>
      <v-toolbar-side-icon
        data-test="menu-toggle"
        v-if="isLoggedIn"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Darex BID</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
    <v-footer v-if="isLoggedIn" color="primary" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<style scoped lang="scss"></style>
<script>
import { mapGetters, mapActions } from "vuex";
import netlifyIdentity from "netlify-identity-widget";
import { EventBus } from "./event-bus.js";
import UserAvatar from "@/components/UserAvatar.vue";

netlifyIdentity.init({
  APIUrl: "https://www.darex.ml/.netlify/identity",
  logo: true
});

export default {
  name: "App",
  components: {
    UserAvatar
  },
  props: {
    source: String
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "getUserStatus",
      user: "getUser"
    }),
    username() {
      return this.user
        ? this.user.user_metadata.full_name
        : "neulogovani korisnik";
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
  beforeDestroy() {
    EventBus.$off();
  },
  methods: {
    ...mapActions({
      updateUser: "updateUser"
    }),
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
