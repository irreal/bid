<template>
  <div>
    <h1>Aktivni planovi:</h1>
    <div class="plan-container d-flex flex-column">
      <plan-progress name="kvartalni plan prodaje" :progress="50" />
      <plan-progress name="godišnji plan prodaje" :progress="50" />
      <plan-progress name="specijalni plan prodaje" :progress="50" />
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  margin-left: 25px;
}
.plan-container {
  height: 500px;
}
</style>

<script>
import PlanProgress from "@/components/Plans/PlanProgress.vue";
export default {
  name: "PlanHomePage",
  components: { PlanProgress }
};
</script>
