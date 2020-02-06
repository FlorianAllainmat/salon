<template>
  <div
    v-if="!(!alertState.visible && !fixed)"
    class="alert"
    v-bind:class="[{ fixed: fixed }, { visible: alertState.visible }]"
  >
    <div v-if="errorMessage" class="message error">{{ $t(errorMessage) }}</div>
    <div v-if="successMessage" class="message success">
      {{ $t(successMessage) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import { AlertState } from '@/store/alert/types';
import { RootState } from '@/store/types';
import store from '@/store/store';

const namespace: string = 'alert';

@Component
export default class Alert extends Vue {
  @State('alert') private alertState: AlertState;
  @Prop(Boolean) private fixed: boolean;
  @Getter('successMessage', { namespace }) private successMessage?: string;
  @Getter('errorMessage', { namespace }) private errorMessage?: string;

  public updated() {
    if (this.alertState.visible && this.fixed) {
      clearInterval(this.alertState.timeout);
      this.alertState.timeout = setTimeout(() => {
        store.commit('alert/HIDE');
      }, 5000);
    }
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
.alert {
  opacity: 0;
  &.visible {
    opacity: 1;
  }
  &.fixed {
    position: fixed;
    top: 10px;
    right: 10px;
    -webkit-transition: all 1s ease;
    transition: all 1s ease;

    .message {
      border-radius: 10px;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
      &.success {
        border: solid 1px $color-green-3;
      }
      &.error {
        border: solid 1px $color-red-1;
      }
    }
  }
  .message {
    font-size: 14px;
    width: 100%;
    border: 0;
    padding: 15px;
    outline: 0;
    margin: 0 0 15px;
    box-sizing: border-box;
    color: $color-white-1;

    &.success {
      background: $color-green-3;
    }
    &.error {
      background: $color-red-1;
    }
  }
}
</style>
