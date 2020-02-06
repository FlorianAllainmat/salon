<template>
  <div>
    <form>
      <Alert />
      <div class="container">
        <Input
          class="first-input"
          :value="user.login"
          :name="$t('email')"
          type="email"
          v-model.trim="user.login"
        />
        <Input
          :value="user.password"
          :name="$t('password')"
          type="password"
          v-model.trim="user.password"
        />
      </div>
      <div class="container-button">
        <button @click="onLogin()" class="connexion-button">{{ $t('connexion') }}</button>
        <router-link class="forget-button" to="/lost-password">
          {{
          $t('lost-password')
          }}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { LoginState, User } from '@/store/login/types';
import { IMessage } from '@/store/alert/types';
import { RootState } from '@/store/types';
import Alert from '@/components/Alert.vue';
import Input from '@/components/Input.vue';

const namespace: string = 'login';

@Component({
  components: {
    Alert,
    Input,
  },
})
export default class LoginForm extends Vue {
  @Action('login', { namespace }) private login: (user: any) => void;
  @Mutation('alert/SHOW') private alert: (alertMessage: IMessage) => void;
  @State('login') private loginState?: LoginState;
  private user: any = { login: '', password: '' };

  public validateEmail(login: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(String(login).toLowerCase());
  }

  private onExplain() {
    window.open(
      'https://webroot.wavegateway.io/0.3.0/Guide_installation_TRASS+.pdf',
      '_blank',
    );
  }

  private onLogin() {
    if (this.validateEmail(this.user.login!)) {
      this.login(this.user);
    } else {
      this.alert({
        prefix: 'INPUT_',
        error: 'NOT_EMAIL',
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
form {
  @extend %form;

  .container-title {
    display: flex;
    flex-direction: row;
    .wavegateway {
      background: asset('wave.png') no-repeat center;
      height: 150px;
      width: 300px;
      background-size: cover;
    }
    .explain-text {
      cursor: default;
      text-align: center;
    }
    .explain-wave {
      margin: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .explain-button {
        cursor: pointer;
        margin-top: 20px;
        border-radius: 3px;
        height: 21px;
        width: 42%;
        background: $color-blue-1;
        font-size: 12px;
        color: $color-white-1;
        -webkit-transition: all 0.3s ease;
        border: none;
        box-shadow: $box-shadow;
        transition: all 0.3s ease;
      }
    }
  }

  .error {
    background: $color-red-2;
    color: $color-white-1;
  }
  .container-button {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .forget-button {
      text-decoration: none;
      margin-top: 10px;
      font-size: 12px;
      color: red;
    }

    .connexion-button {
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
    .container-title {
      .wavegateway {
        display: none;
      }
    }
  }
}
</style>
