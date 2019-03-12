
        <template>
  <div class="quickview">
          <div class="quickview__item">
            <div class="quickview__item-total">10</div>
            <div class="quickview__item-description">
              <i class="far fa-file-alt"></i>
              <span class="text-light">Izveštaja</span>
            </div>
          </div>
          <div class="quickview__item">
            <div class="quickview__item-total">0</div>
            <div class="quickview__item-description">
              <i class="far fa-comment"></i>
              <span class="text-light">Poruka</span>
            </div>
          </div>
          <div class="quickview__item">
            <div class="quickview__item-total">12&deg;</div>
            <div class="quickview__item-description">
              <i class="fas fa-map-marker-alt"></i>
              <span class="text-light">Beograd</span>
            </div>
          </div>
        </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import BrandHeader from '@/components/BrandHeader.vue';

@Component({
//   components: {BrandHeader},
})
export default class Quickview extends Vue {
}
</script>

<style scoped lang="scss">
</style>
