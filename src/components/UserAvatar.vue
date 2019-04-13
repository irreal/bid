<template>
  <span>{{ userInitials }}</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserAvatar",
  computed: {
    ...mapGetters({ user: "getUser" }),
    username() {
      return this.user ? this.user.user_metadata.full_name : "";
    },
    userInitials() {
      let initials = this.username.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();
      return initials ? initials : "N/A";
    }
  }
};
</script>
