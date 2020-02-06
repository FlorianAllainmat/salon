<template>
  <div id="app">
    <loading />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Loading.vue';

@Component({
  components: {
    Loading,
  },
  computed: {
    layout(): string {
      return this.$route.meta.layout || 'default-layout';
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './src/vars.scss';
body {
  background-color: $color-grey-background;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
