<template>
    <div class="sidenav__brand">
      <img src="../assets/logo.svg" class="sidenav__brand-icon" />
      <a class="sidenav__brand-link" href="#">darex<span class="text-light">BID</span></a>
      <i class="fas fa-times sidenav__brand-close"></i>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BrandHeader extends Vue {
}
</script>

<style scoped lang="scss">
</style>
