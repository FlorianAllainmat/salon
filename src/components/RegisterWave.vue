<template>
  <div class="container-wave">
    <div class="form-wave">
      <Alert />
      <div>
        <Input
          class="first-input"
          :value="wave.code"
          :name="$t('code')"
          type="text"
          v-model.trim="wave.code"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { IMessage } from '@/store/alert/types';
import { RootState } from '@/store/types';
import Alert from '@/components/Alert.vue';
import Input from '@/components/Input.vue';
import AbstractPageComponent from '@/components/AbstractPageComponent.vue';

@Component({
  components: {
    Alert,
    Input,
  },
})
export default class RegisterWave extends AbstractPageComponent {
  @Mutation('alert/SHOW') private alert: (alertMessage: IMessage) => void;
  @Mutation('alert/HIDE') private alertOff: () => void;
  @Action('post', { namespace: 'wave' }) private post: (wave: any) => void;

  public wave: any = { code: '' };

  mounted() {
    this.alertOff();
  }

  next(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.wave.code !== '') {
        this.post(this.wave.code);
        resolve();
      } else {
        this.alert({
          prefix: 'INPUT_',
          error: 'NOT_EMAIL',
        });
        reject();
      }
    });
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
.container-wave {
  margin-top: 20px;
  .form-wave {
    position: relative;
    z-index: 1;
    background: transparent;
    background-color: #ffffff;
    text-align: start;
    border-radius: 3px;
  }
}

@media only screen and (max-width: 450px) {
  .form-wave {
    margin: 10px;
    .container-title {
      .wavegateway {
        display: none;
      }
    }
  }
}
</style>
