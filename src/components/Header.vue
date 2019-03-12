<template>
 <header class="header">
    <i class="fas fa-bars header__menu"></i>
    <div class="header__search">
      <input class="header__input" placeholder="Pretraga..." />
    </div>
    <div class="header__avatar">
      <div class="dropdown">
        <ul class="dropdown__list">
          <li class="dropdown__list-item">
            <span class="dropdown__icon"><i class="far fa-user"></i></span>
            <span class="dropdown__title">my profile</span>
          </li>
          <li class="dropdown__list-item">
            <span class="dropdown__icon"><i class="fas fa-clipboard-list"></i></span>
            <span class="dropdown__title">my account</span>
          </li>
          <li class="dropdown__list-item">
            <span class="dropdown__icon"><i class="fas fa-sign-out-alt"></i></span>
            <span class="dropdown__title">log out</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import BrandHeader from '@/components/BrandHeader.vue';

@Component({
//   components: {BrandHeader},
})
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
</style>
