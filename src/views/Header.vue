<template>
  <header class="header">
    <i @click="openMenu()" class="fas fa-bars header__menu"></i>
    <div class="header__search">
      <input class="header__input" placeholder="Pretraga..." />
    </div>
    <div class="header__avatar" @click="dropdownActive = !dropdownActive">
      <user-avatar class="user-avatar" />
      <div class="dropdown" :class="{ 'dropdown--active': dropdownActive }">
        <ul class="dropdown__list">
          <li class="dropdown__list-item">
            <span class="dropdown__icon"><i class="far fa-user"></i></span>
            <span class="dropdown__title">my profile</span>
          </li>
          <li class="dropdown__list-item">
            <span class="dropdown__icon"
              ><i class="fas fa-clipboard-list"></i
            ></span>
            <span class="dropdown__title">my account</span>
          </li>
          <li class="dropdown__list-item" @click="$emit('logout')">
            <span class="dropdown__icon"
              ><i class="fas fa-sign-out-alt"></i
            ></span>
            <span class="dropdown__title">log out</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import UserAvatar from "@/components/UserAvatar.vue";
export default {
  components: { UserAvatar },
  name: "Footer",
  data() {
    return {
      dropdownActive: false
    };
  },
  methods: {
    openMenu() {
      this.$store.commit("toggleMenu", true);
    }
  }
};
</script>

<style lang="scss">
.user-avatar {
  width: 40px;
  height: 40px;
  span {
    font-size: 18px !important;
  }
}
</style>
