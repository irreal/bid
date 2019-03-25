<template>
  <div class="user-avatar">
    <span>{{ userInitials }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BrandHeader",
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu", false);
    }
  },
  computed: {
    ...mapGetters({ user: "getUser" }),
    username() {
      return this.user ? this.user.user_metadata.full_name : "";
    },
    userInitials() {
      var initials = this.username.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();
      return initials ? initials : "N/A";
    }
  }
};
</script>

<style scoped lang="scss">
.user-avatar {
  background-color: orange;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 32px;
    color: white;
  }
}
</style>
