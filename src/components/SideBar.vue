<template>
  <div class="side-bar">
    <div class="hamburger" v-on:click="toggleMenu">
      <div class="burger"></div>
      <div class="burger"></div>
      <div class="burger"></div>
    </div>
    <div class="container-title">
      <div class="name_company">WaveGateWay</div>
    </div>
    <div>
      <button @click="onOpen" class="btn_nav">
        <span class="icon wavegateway" />
        <div class="nav-text">WaveGateWay</div>
      </button>
      <div class="container-wave" v-if="isOpen">
        <router-link
          v-for="(wave, i) in waveArray"
          :key="i"
          class="btn_wave"
          :to="`/wave/${wave.name}`"
        >
          <span v-if="CurrentPage === `/wave/${wave.name}`" class="marker"></span>
          <span v-else class="not-marker"></span>

          <div class="nav-text">{{ wave.name }}</div>
        </router-link>
      </div>
      <div class="btn_add">
        <span class="icon add" />
        <router-link to="/add-wave" class="nav-text">
          {{ $t('add') }}
          <br />WaveGateWay
        </router-link>
      </div>
    </div>
    <div>
      <router-link class="btn_nav" to="/account">
        <span class="icon user" />
        <div class="nav-text">{{ $t('account') }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { RootState } from '@/store/types';
import Store from '@/store/store';

const namespace: string = 'login';

@Component
export default class SideBar extends Vue {
  @Action('logout', { namespace }) private logout?: () => void;
  @State('menuVisible') private menuVisible: boolean;
  @Mutation('toggleMenu') private toggleMenu: () => void;

  public isOpen: Boolean = false;
  public waveArray: Array<any> = [
    {
      name: 'Adetec',
    },
    {
      name: 'Siemens',
    },
    {
      name: 'Airbus',
    },
    {
      name: 'Dassault',
    },
    {
      name: 'Securitas',
    },
  ];

  public onOpen() {
    this.isOpen = !this.isOpen;
  }

  get CurrentPage() {
    return this.$route.path;
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
.side-bar {
  height: 100%;
  width: 260px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: $color-grey-dark;

  .hamburger {
    display: none;
    cursor: pointer;
    position: fixed;
    right: 20px;
    top: 10px;
    .burger {
      width: 35px;
      height: 5px;
      background-color: $color-grey;
      margin: 6px 0;
    }
  }
  .container-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px 18px;
    background-color: $color-grey-light;

    .name_company {
      font-size: 18px;
      margin-left: 10px;
      text-transform: uppercase;
      color: $color-grey;
    }
  }

  div {
    text-align: left;
    list-style: none;
    padding: 0;

    .btn_nav {
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
      color: $color-white-1;
      cursor: pointer;
      .icon {
        width: 30px;
        height: 30px;
        &.user {
          background: asset('account.png') center no-repeat;
          background-size: cover;
        }
        &.wavegateway {
          background: asset('wavegateway.png') center no-repeat;
          background-size: cover;
        }
      }
      .nav-text {
        font-size: 14px;
        margin-left: 18px;
      }
      &:hover,
      &:active,
      &:focus {
        outline: none;
      }
    }
    .btn_wave {
      padding: 5px 10px;
      margin: 5px 0px;
      border-radius: 2px;
      border: none;
      background: transparent;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      text-decoration: none;
      color: $color-white-1;
      &:hover {
        outline: 0;
      }
      &.router-link-exact-active {
        outline: 0;
        color: $color-blue-2;
      }
      .marker {
        margin-left: -11px;
        width: 5px;
        height: 20px;
        margin-right: 65px;
        background: $color-blue-2;
      }

      .not-marker {
        margin-right: 60px;
      }

      .nav-text {
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .btn_add {
      padding: 5px 10px;
      margin: 5px 50px;
      border-radius: 2px;
      border: none;
      background: transparent;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      color: $color-white-1;
      cursor: pointer;
      .icon {
        width: 15px;
        height: 15px;
        &.add {
          background: asset('add.png') center no-repeat;
          background-size: cover;
        }
      }
      .nav-text {
        text-decoration: none;
        color: $color-white-1;
        font-size: 12px;
        margin-left: 10px;
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  .side-bar {
    .hamburger {
      display: block;
    }
  }
}
</style>
