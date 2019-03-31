<template>
  <v-card height="80" class="mt-4">
    <div class="title">
      <v-card
        ><v-icon>{{ icon }}</v-icon></v-card
      >
    </div>
    <v-card-text>Ovo je kartica</v-card-text>
  </v-card>
  <!-- <div class="overviewCard" @click="$emit('click')">
    <div class="overviewCard-icon overviewCard-icon--document">
      <i class="fas" :class="{ [icon]: icon }"></i>
    </div>
    <div class="overviewCard-description">
      <h3 class="overviewCard-title text-light">
        {{ text }}
        <strong>{{ textHighlight }}</strong>
      </h3>
      <p class="overviewCard-subtitle">{{ subtitle }}</p>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.title {
  width: 70px;
  height: 70px;
  position: relative;
  left: 25px;
  top: -10px;
}
</style>

<script>
export default {
  props: {
    icon: String,
    text: String,
    textHighlight: String,
    subtitle: String
  }
};
</script>
