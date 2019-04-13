<template>
  <v-layout my-4 justify-center>
    <v-card class="plan-card">
      <v-card-text>
        <v-layout align-center pr-5>
          <div>
            <span class="headline">{{ plan.title }}</span>
            <p>Autor plana: {{ plan.created_by }}</p>
            <p>ispunjenost plana: {{ plan.percent_complete }}%</p>
          </div>
          <v-progress-circular
            class="ml-auto"
            :rotate="-90"
            :size="100"
            :width="15"
            :value="plan.percent_complete"
            color="accent"
          >
            {{ plan.percent_complete }}%
          </v-progress-circular>
          <div class="plan-tools">
            <a href class="icon-link" @click.prevent><v-icon>edit</v-icon></a>
            <a href class="icon-link" @click.prevent><v-icon>delete</v-icon></a>
          </div>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<style scoped lang="scss">
.plan-card {
  width: 90%;
}
.plan-tools {
  position: absolute;
  right: 0px;
  top: 0px;
}
.icon-link {
  text-decoration: none;
}
</style>
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
