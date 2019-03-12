<template>
  <div class="sidenav__brand">
    <img src="../assets/logo.svg" class="sidenav__brand-icon" />
    <a class="sidenav__brand-link" href="#">
      darex<span class="text-light">BID</span></a
    >
    <i @click="toggleMenu()" class="fas fa-times sidenav__brand-close"></i>
  </div>
</template>

<script>
export default {
  name: "BrandHeader",
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu", false);
    }
  }
};
</script>

<style scoped lang="scss"></style>
