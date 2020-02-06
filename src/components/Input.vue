<template>
  <div class="input">
    <div v-bind:class="['container', isActive ? 'focusOn' : 'focusOff']">{{name}}</div>
    <input @focus="onFocus" @blur="onBlur" :type="type" :value="value" @input="input" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop(String) private name: String;
  @Prop(String) private value: String;
  @Prop(String) private type: String;

  private hasFocus: boolean = false;

  @Emit()
  input(e: any) {
    return e.target.value;
  }

  get isActive(): boolean {
    return (
      this.value !== '' ||
      (this.hasFocus && (this.value === '' || this.value === undefined))
    );
  }

  private onFocus() {
    this.hasFocus = true;
  }

  private onBlur() {
    this.hasFocus = false;
  }
}
</script>

<style scoped lang="scss">
@import '@/vars';
.input {
  position: relative;

  .container {
    position: absolute;
    z-index: 1;
    transition: 0.5s;
    color: $color-grey-light;
    &.focusOn {
      font-size: 14px;
      top: -5px;
    }
    &.focusOff {
      font-size: 16px;
      top: 25px;
    }
  }

  input:focus {
    border-bottom: 2px solid $color-blue;
  }
  input,
  .error,
  button {
    font-size: 16px;
    width: 100%;
    border: 0;
    padding: 10px 0px;
    outline: 0;
  }
  input,
  .error {
    position: relative;
    z-index: 2;
    background: transparent;
    margin: 15px 0 15px;
    border-bottom: 2px solid $color-grey-light;
  }
}
</style>