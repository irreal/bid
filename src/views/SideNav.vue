<template>
  <aside class="sidenav" :class="{ 'sidenav--active': menuOpen }">
    <BrandHeader />
    <div class="sidenav__profile">
      <!-- <div class="sidenav__profile-avatar"></div> -->
      <user-avatar class="user-avatar ml-2 mr-2" />
      <div class="sidenav__profile-title text-light" v-if="isLoggedIn">
        {{ user.user_metadata.full_name }}
      </div>
    </div>
    <div class="row row--align-v-center row--align-h-center">
      <ul class="navList">
        <li class="navList__heading">
          Izveštaji<i class="far fa-file-alt"></i>
        </li>
        <li>
          <div
            @click="$router.push('plans')"
            class="navList__subheading row row--align-v-center"
          >
            <span class="navList__subheading-icon"
              ><i class="fas fa-chart-line"></i
            ></span>
            <span class="navList__subheading-title">Planiranje</span>
          </div>
          <ul class="subList subList--hidden">
            <li class="subList__item">medical</li>
            <li class="subList__item">vision</li>
            <li class="subList__item">dental</li>
          </ul>
        </li>
        <li>
          <div class="navList__subheading row row--align-v-center">
            <span class="navList__subheading-icon"
              ><i class="fas fa-dollar-sign"></i
            ></span>
            <span class="navList__subheading-title">Realizacija</span>
          </div>
          <ul class="subList subList--hidden">
            <li class="subList__item">domestic</li>
            <li class="subList__item">foreign</li>
            <li class="subList__item">misc</li>
          </ul>
        </li>
        <li>
          <div class="navList__subheading row row--align-v-center">
            <span class="navList__subheading-icon"
              ><i class="fas fa-funnel-dollar"></i
            ></span>
            <span class="navList__subheading-title">Naplata</span>
          </div>
          <ul class="subList subList--hidden">
            <li class="subList__item">current</li>
            <li class="subList__item">archives</li>
          </ul>
        </li>

        <li class="navList__heading">Podešavanja<i class="fas fa-cog"></i></li>
        <li>
          <div class="navList__subheading row row--align-v-center">
            <span class="navList__subheading-icon"
              ><i class="fas fa-users"></i
            ></span>
            <span class="navList__subheading-title">Korisnici</span>
          </div>
          <ul class="subList subList--hidden">
            <li class="subList__item">mortgage</li>
            <li class="subList__item">investments</li>
            <li class="subList__item">spend log</li>
            <li class="subList__item">owed</li>
          </ul>
        </li>
        <li>
          <div class="navList__subheading row row--align-v-center">
            <span class="navList__subheading-icon"
              ><i class="fas fa-lock"></i
            ></span>
            <span class="navList__subheading-title">Prava pristupa</span>
          </div>
          <ul class="subList subList--hidden">
            <li class="subList__item">last month</li>
            <li class="subList__item">bi-weekly</li>
            <li class="subList__item">yesterday</li>
            <li class="subList__item">today</li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import BrandHeader from "@/components/BrandHeader.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import { mapGetters } from "vuex";

export default {
  name: "SideNav",
  components: { BrandHeader, UserAvatar },
  computed: {
    menuOpen() {
      return this.$store.getters.menuOpen;
    },
    ...mapGetters({
      isLoggedIn: "getUserStatus",
      user: "getUser"
    }),
    username() {
      return this.user ? this.user.username : ", there!";
    }
  }
};
</script>
<style scoped lang="scss">
.user-avatar {
  width: 60px;
  height: 60px;
}
</style>
