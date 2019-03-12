
        <template>
         <div class="main-header__welcome">
          <div class="main-header__welcome-title text-light">
            Zdravo,
            <strong>Žarko</strong>
          </div>
          <div class="main-header__welcome-subtitle text-light"></div>
        </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import BrandHeader from '@/components/BrandHeader.vue';

@Component({
//   components: {BrandHeader},
})
export default class Welcome extends Vue {
}
</script>

<style scoped lang="scss">
</style>
