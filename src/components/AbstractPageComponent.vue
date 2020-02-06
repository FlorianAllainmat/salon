<template>
  <div class="container">Must be implemented !</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';

export default abstract class AbstractPageComponent extends Vue {
  abstract next(): Promise<any>;
}
</script>

<style scoped lang="scss">
@import '../vars';
</style>
