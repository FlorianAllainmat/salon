<template>
  <div class="contain">
    <div class="container">
      <div class="container-page" ref="container">
        <component ref="activeComponent" :is="isSelect"></component>
      </div>
      <div class="container-button">
        <button v-if="hasPrevStep()" @click="onPrev">{{ $t('back') }}</button>
        <button v-if="isFirstStep()" @click="goBack">{{ $t('cancel') }}</button>
        <div class="space"></div>
        <div class="container-cercle" v-for="(p, i) in data.length" :key="i">
          <div :class="['cercle', stepIsActive(i)]"></div>
        </div>
        <div class="space"></div>
        <button v-if="hasNextStep()" @click="onNext">{{ $t('next') }}</button>
        <button v-if="isFinishStep()" @click="onFinish">{{ $t('validate') }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { IMessage } from '@/store/alert/types';
import { RootState } from '@/store/types';
import Alert from '@/components/Alert.vue';
import AbstractPageComponent from './AbstractPageComponent.vue';

@Component({
  components: {
    Alert,
  },
})
export default class Tutorial extends Vue {
  @Prop(Array) private data: Array<typeof AbstractPageComponent>;
  @Mutation('alert/SHOW') private alert: (alertMessage: IMessage) => void;

  public stepIndex: number = 0;

  get isSelect() {
    return this.data[this.stepIndex];
  }

  private hasPrevStep() {
    return this.stepIndex > 0;
  }
  private hasNextStep() {
    return this.stepIndex < this.data.length - 1;
  }
  private isFirstStep() {
    return this.stepIndex === 0;
  }

  private isFinishStep() {
    return this.stepIndex === this.data.length - 1;
  }

  public stepIsActive(index: any) {
    if (this.stepIndex === index) {
      return 'isActive';
    } else {
      return 'isNotActive';
    }
  }

  private goBack() {
    this.$router.go(-1);
  }

  private onPrev() {
    this.stepIndex--;
  }

  private onNext() {
    (this.$refs.activeComponent as AbstractPageComponent)
      .next()
      .then(() => {
        this.stepIndex++;
      })
      .catch(() => {
        this.alert({
          prefix: 'EVENT_',
          error: 'DIDAC',
        });
      });
  }

  private onFinish() {
    (this.$refs.activeComponent as AbstractPageComponent)
      .next()
      .then(() => {
        this.$router.push('/');
      })
      .catch(() => {
        this.alert({
          prefix: 'EVENT_',
          error: 'DIDAC',
        });
      });
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
.contain {
  display: flex;
  flex-direction: column;
  margin: 50px;

  .container {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    border: solid 1px white;
    margin: 0px 10px;
    background-color: white;
    border-radius: 3px;

    .container-button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 70px;
      margin-top: 20px;

      .space {
        width: 15%;
      }

      .container-cercle {
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        .cercle.isActive {
          height: 15px;
          width: 15px;
          border-radius: 15px;
          background-color: $color-blue-2;
        }
        .cercle.isNotActive {
          height: 15px;
          width: 15px;
          border-radius: 15px;
          background-color: $color-grey;
        }
      }

      button {
        padding: 15px 0;
        border-radius: 3px;
        height: 41px;
        width: 22%;
        text-transform: uppercase;
        background: $color-blue-1;
        font-size: 12px;
        color: $color-white-1;
        -webkit-transition: all 0.3s ease;
        border: none;
        box-shadow: $box-shadow;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover,
        &:active,
        &:focus {
          outline: none;
          background: $color-blue-1;
        }
      }
    }
  }
}
</style>
