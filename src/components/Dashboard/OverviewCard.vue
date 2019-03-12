<template>
  <div class="overviewCard" @click="$emit('click')">
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
  </div>
</template>

<style scoped lang="scss">
@import "./src/styles/colors.scss";

.overviewCard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: $color-white;
  transform: translateY(0);
  transition: all 0.3s;

  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    font-size: 21px;
    color: #fff;

    &--document {
      background-color: $color-zest;
    }

    &--calendar {
      background-color: $color-jungle-green;
    }

    &--mail {
      background-color: $color-cinnabar;
    }

    &--photo {
      background-color: $color-amethyst;
    }
  }

  &-description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-title {
    font-size: 18px;
    color: $color-java;
    margin: 0;
  }

  &-subtitle {
    margin: 2px;
    color: $color-abbey;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>

<script>
export default {
  name: "Welcome",
  props: {
    icon: String,
    text: String,
    textHighlight: String,
    subtitle: String
  }
};
</script>
