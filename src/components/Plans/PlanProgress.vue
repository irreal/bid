<template>
  <div class="plan">
    <span ref="plan" class="plan-name">{{ name }}</span>
    <span class="plan-progress">{{ progress }}%</span>
    <div class="plan-fill" />
  </div>
</template>

<style scoped lang="scss">
.plan {
  border: 1px solid black;
  border-radius: 33px;
  margin: 0 25px;
  height: 80px;
  width: 90%;
  position: relative;
}
.plan-fill {
  border-radius: 33px;
  background: #53cbf1; /* Old browsers */
  background: -moz-linear-gradient(
    left,
    #53cbf1 2%,
    #05abe0 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    #53cbf1 2%,
    #05abe0 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    #53cbf1 2%,
    #05abe0 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  width: var(--progress);
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: 1s;
}
.plan-name {
  top: 20%;
  left: 10px;
  position: absolute;
  font-size: 32px;
  color: white;
  text-shadow: 2px 2px black;
  z-index: 10;
}
.plan-progress {
  top: 20%;
  left: 92%;
  position: absolute;
  font-size: 32px;
  color: white;
  text-shadow: 2px 2px black;
  z-index: 10;
}
</style>

<script>
export default {
  name: "PlanProgress",
  props: {
    name: String,
    progress: Number,
    fromColor: String,
    toColor: String
  },
  watch: {
    progress() {
      debugger;
    }
  }
};
</script>
