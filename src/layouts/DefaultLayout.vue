<template>
  <div class="default-layout">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DefaultLayout extends Vue {}
</script>
