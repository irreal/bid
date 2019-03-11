<template>
  <div class="bleh" @click="$store.commit('removePlans')">
    <h1>ovo je vreme paklenih: {{ $store.getters.plans[0] || 'ničega' }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MojaComp extends Vue {
  @Prop() private msg!: string;

  private doSomething() {
    alert(this.msg);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
