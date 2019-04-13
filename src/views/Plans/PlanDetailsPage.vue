<template>
  <div class="fill-height plan-page">
    <plan-header :plan="plan"></plan-header>
  </div>
</template>
<style scoped lang="scss"></style>

<script>
import PlanHeader from "@/components/Plans/PlanHeader";
export default {
  name: "PlanDetailsPage",
  components: { PlanHeader },
  computed: {
    plan() {
      return this.$store.getters["plans/find"](this.$route.params.planId) || {};
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("plans/load");
  },
  methods: {}
};
</script>
