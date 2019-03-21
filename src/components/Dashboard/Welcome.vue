<template>
  <div class="main-header__welcome">
    <div class="main-header__welcome-title text-light">
      Zdravo,
      <strong>{{ username }}</strong>
    </div>
    <div class="main-header__welcome-subtitle text-light"></div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Welcome",
  computed: {
    ...mapGetters({ user: "getUser" }),
    username() {
      return this.user ? this.user.username : "neulogovani korisnik";
    }
  }
};
</script>
<style scoped lang="scss"></style>
