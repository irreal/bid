<template>
  <div>
    <h1>Aktivni planovi:</h1>
    <plan-progress name="kvartalni plan prodaje" :progress="50" />
  </div>
</template>
<style scoped lang="scss">
h1 {
  margin-left: 25px;
}
</style>

<script>
import PlanProgress from "@/components/Plans/PlanProgress.vue";
export default {
  name: "PlanHomePage",
  components: { PlanProgress }
};
</script>
