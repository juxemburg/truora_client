<template>
  <div>
    <h3 class="mb-5">Iniciar sesión</h3>
    <div v-if="logginErrorStatus" class="alert alert-danger">
      {{ logginErrorStatus }}
    </div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          required
          placeholder="Email"
          v-model="login"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          required
          placeholder="Contraseña"
          v-model="password"
        ></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-center p-2 bd-highlight">
        <b-button
          @click="submitForm()"
          type="button"
          variant="primary"
          :disabled="!formValid"
        >
          ¡Inciar Sesión!
          <font-awesome-icon icon="check-circle" />
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import { LoginModel } from '../models/login.models';

export default Vue.extend({
  name: 'LoginForm',
  data() {
    return {
      login: '',
      loginInputErrMsg: '',
      password: '',
      passwordInputErrMsg: '',
    };
  },
  methods: {
    ...mapActions(['updateLoginStatusAction']),
    async submitForm(): Promise<any> {
      if (!this.formValid) {
        return;
      }
      await this.updateLoginStatusAction({
        login: this.login,
        password: this.password,
      });
      this.$router.push({ name: 'about' });
    },
  },
  computed: {
    ...mapState(['logginErrorStatus']),
    formValid(): boolean {
      return this.login && this.password ? true : false;
    },
  },
});
</script>

<style scoped></style>
