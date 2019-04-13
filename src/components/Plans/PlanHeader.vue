<template>
  <v-layout align-end py-3>
    <span class="headline">{{ plan.title }}</span>
    <span>Ispunjenost plana: {{ Math.round(plan.percent_complete) }}%</span>
    <span>Autor plana: {{ plan.created_by }}</span>
  </v-layout>
</template>
<script>
export default {
  name: "PlanHeader",
  props: {
    plan: {
      required: true,
      type: Object
    }
  },
  computed: {}
};
</script>
<style scoped lang="scss"></style>
