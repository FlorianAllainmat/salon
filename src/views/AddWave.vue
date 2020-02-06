<template>
  <div>
    <Tutorial :data="data"></Tutorial>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import Tutorial from '@/components/Tutorial.vue';
import RegisterWave from '@/components/RegisterWave.vue';
import AbstractPageComponent from '../components/AbstractPageComponent.vue';

@Component({
  components: {
    Tutorial,
    RegisterWave,
  },
})
export default class AddWave extends Vue {
  public data: Array<typeof AbstractPageComponent> = [RegisterWave];
}
</script>

<style scoped lang="scss"></style>
