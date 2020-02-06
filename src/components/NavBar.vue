<template>
  <div class="nav-bar">
    <a v-on:click="logout()" class="btn_nav" href="#">
      <span class="icon logout" />
      <div class="nav-text">{{ $t('logout') }}</div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Mutation } from 'vuex-class';

const namespace: string = 'login';

@Component
export default class NavBar extends Vue {
  @Action('logout', { namespace }) private logout?: () => void;
}
</script>

<style scoped lang="scss">
@import '../vars';
.nav-bar {
  position: fixed;
  transition: 0.5s;
  right: 0;
  left: 200px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hamburger {
    display: none;
    cursor: pointer;
    position: absolute;
    left: 20px;
    div {
      width: 35px;
      height: 5px;
      background-color: $color-black-1;
      margin: 6px 0;
    }
  }
  .btn_nav {
    display: flex;
    justify-content: flex-end;
    padding: 12px 18px;
    margin: 10px 18px;
    border-radius: 2px;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    text-decoration: none;
    color: $color-grey;

    .icon {
      width: 15px;
      height: 15px;
      &.logout {
        background: asset('logout.png') center no-repeat;
        background-size: cover;
      }
    }

    .nav-text {
      font-size: 14px;
      margin-left: 10px;
    }
  }
  @media only screen and (max-width: 800px) {
    .btn_nav {
      margin: 10px 50px 10px 0px;
    }
  }
}
</style>
