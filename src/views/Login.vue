<template>
  <div class="login">
    <login-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import LoginForm from '@/components/LoginForm.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Vue {
  @Mutation('modal/SHOW') private modal: (view: any) => void;
}
</script>

<style scoped lang="scss">
.login {
  margin-top: 100px;
  h1 {
    text-align: center;
  }
}
</style>
