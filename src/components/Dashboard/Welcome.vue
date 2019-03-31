<template>
  <v-layout align-end py-3>
    <span class="headline"
      >Zdravo, <strong>{{ username }}</strong></span
    >
  </v-layout>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Welcome",
  computed: {
    ...mapGetters({ user: "getUser" }),
    username() {
      return this.user
        ? this.user.user_metadata.full_name
        : "neulogovani korisnik";
    }
  }
};
</script>
<style scoped lang="scss"></style>
