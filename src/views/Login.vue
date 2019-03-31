<template>
  <div class="d-flex w-100 h-100 justify-content-center align-items-center">
    <div class="d-flex flex-column justify-content-between h-25 w-25">
      <button class="btn-primary" href @click.prevent="emitGlobal('login')">
        Uloguj se
      </button>
      <button class="btn-success" href @click.prevent="emitGlobal('signup')">
        Registruj se
      </button>
      <button class="btn-danger" href @click.prevent="emitGlobal('logout')">
        Izloguj se
      </button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";
export default {
  name: "home",
  methods: {
    emitGlobal(event) {
      EventBus.$emit(event);
    }
  }
};
</script>
<style scoped></style>
