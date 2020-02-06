<template>
  <div class="container-form">
    <form class="form-form">
      <Alert />
      <div>
        <Input
          class="first-input"
          :value="user.name"
          :name="$t('name')"
          type="text"
          v-model.trim="user.name"
        />
        <Input
          class="first-input"
          :value="user.email"
          :name="$t('email')"
          type="email"
          v-model.trim="user.email"
        />
        <Input
          :value="user.newPassword"
          :name="$t('newPassword')"
          type="password"
          v-model.trim="user.newPassword"
        />
        <Input
          :value="user.confirmPassword"
          :name="$t('confirmPassword')"
          type="password"
          v-model.trim="user.confirmPassword"
        />
        <Input
          :value="user.phoneNumber"
          :name="$t('phoneNumber')"
          type="string"
          v-model.trim="user.phoneNumber"
        />
      </div>
      <div class="container-button">
        <button class="connexion-button" @click="update">{{ $t('update') }}</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { UserState, User } from '@/store/user/types';
import { IMessage } from '@/store/alert/types';
import { RootState } from '@/store/types';
import Alert from '@/components/Alert.vue';
import Input from '@/components/Input.vue';

const namespace: string = 'user';

@Component({
  components: {
    Alert,
    Input,
  },
})
export default class Account extends Vue {
  @Mutation('alert/SHOW') private alert: (alertMessage: IMessage) => void;
  @Mutation('alert/HIDE') private alertOff: () => void;
  @State('user') private userState?: UserState;
  @Action('get', { namespace }) private get: (user: User) => void;
  @Action('put', { namespace }) private put: (user: User) => void;

  public user: any = {
    email: '',
    password: '',
    phoneNumber: '',
    name: '',
    newPassword: '',
    confirmPassword: '',
  };

  mounted() {
    this.alertOff();
    //this.get();
  }

  public validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  }

  public validatePhone(phoneNumber: string) {
    let phone = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/;
    return phone.test(phoneNumber);
  }

  private update() {
    alert(this.user.name);
  }
}
</script>

<style scoped lang="scss">
@import '../vars';
.container-form {
  margin-top: 20px;
  .form-form {
    position: relative;
    z-index: 1;
    background: transparent;
    background-color: #ffffff;
    margin: 50px;
    padding: 20px;
    text-align: start;
    border-radius: 3px;

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
        width: 22%;
        min-width: 80px;
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
