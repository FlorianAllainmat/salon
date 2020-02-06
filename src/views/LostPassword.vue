<template>
  <div class="account">
    <form>
      <Alert />
      <div class="container">
        <Input value="user.email" :name="$t('email')" type="text" v-model="user.email" />
      </div>
      <div class="container-button">
        <button @click="goBack" class="back">{{$t('back')}}</button>
        <button @click="onChangePassword(user.password, user.newPassword)">{{$t('send')}}</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { IMessage } from '@/store/alert/types';
import { LoginState, User } from '@/store/login/types';
import Alert from '@/components/Alert.vue';
import Input from '@/components/Input.vue';

const namespace: string = 'login';

@Component({
  components: {
    Alert,
    Input,
  },
})
export default class LostPassword extends Vue {
  @Action('lostPassword', { namespace }) private lostPassword: (
    user: User,
  ) => Promise<undefined>;
  @Mutation('alert/SHOW') private alert: (alertMessage: IMessage) => void;
  @State('login') private loginState?: LoginState;
  private user: any = { email: '' };

  public validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }

  public goBack() {
    this.$router.go(-1);
  }

  private onChangePassword(oldPassword: string, newPassword: string) {
    if (this.user.email!.trim() !== '') {
      if (this.validateEmail(String(this.user.email))) {
        alert('Ton truc marche');
      } else {
        this.alert({
          prefix: 'INPUT_',
          error: 'NOT_EMAIL',
        });
      }
    } else {
      this.alert({
        prefix: 'INPUT_',
        error: 'EMPTY',
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
.account {
  margin-top: 150px;

  form {
    @extend %form;
    max-width: 364px;

    .error {
      background: $color-red-2;
      color: $color-white-1;
    }
    .container-button {
      display: flex;
      justify-content: space-between;

      .back {
        width: 100px;
      }

      button {
        padding: 15px 0;
        border-radius: 3px;
        height: 41px;
        width: 42%;
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
  @media only screen and (max-width: 450px) {
    form {
      margin: 10px;
    }
  }
}
</style>
