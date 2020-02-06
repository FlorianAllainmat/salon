<template>
  <div class="connected-layout">
    <nav-bar v-bind:class="{ active: menuVisible }" />
    <side-bar v-bind:class="{ active: menuVisible }" />
    <div class="container" v-on:click="closeMenu">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar.vue';
import NavBar from '@/components/NavBar.vue';
import { State, Mutation, Getter } from 'vuex-class';

@Component({
  components: {
    SideBar,
    NavBar,
  },
})
export default class ConnectedLayout extends Vue {
  @State('menuVisible') private menuVisible: boolean;
  @Mutation('closeMenu') private closeMenu: () => void;
}
</script>

<style scoped lang="scss">
@import '../vars';
.container {
  //height: calc(100% - 140px);
  position: fixed;
  right: 0;
  bottom: 0;
  top: 60px;
  left: 260px;
  margin: 0px;
  overflow-y: scroll;
}
@media only screen and (max-width: 800px) {
  .container,
  .footer-bar,
  .nav-bar {
    left: 0px;
  }
  .side-bar {
    left: -260px;
    box-shadow: none;
  }
  .side-bar.active {
    left: 0px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .nav-bar {
    background-color: $color-gray-1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
}
</style>
