<template>
  <div class="d-flex w-100 h-100 justify-content-center align-items-center">
    <div class="d-flex flex-column justify-content-between h-25 w-25">
      <button class="btn-primary" href @click.prevent="$emit('login')">
        Uloguj se
      </button>
      <button class="btn-success" href @click.prevent="$emit('signup')">
        Registruj se
      </button>
      <button class="btn-danger" href @click.prevent="$emit('logout')">
        Izloguj se
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style scoped></style>
