<template>
  <div class="loading" v-if="loadingState.loading > 0">
    <div class="spinner">$t('loading')</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import { LoadingState } from '@/store/loading/types';
import { RootState } from '@/store/types';

const namespace: string = 'loading';

@Component
export default class Loading extends Vue {
  @State('loading') private loadingState?: LoadingState;

  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  background: rgba(0, 0, 0, 0.7);
}
.spinner,
.spinner:before,
.spinner:after {
  background: $color-green-1;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.spinner {
  color: $color-green-1;
  text-indent: -9999em;
  margin: 88px auto;
  top: calc(50% - 88px);
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.spinner:before,
.spinner:after {
  position: absolute;
  top: 0;
  content: '';
}
.spinner:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.spinner:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
