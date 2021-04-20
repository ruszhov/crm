<template>
  <v-card class="elevation-12">
    <v-form
      ref="form"
      :model="controls"
      lazy-validation
      @submit.native.prevent="onSubmit"
    >
      <v-toolbar color="primary" dark flat>
        <img class="main-logo" src="../assets/Logo.svg" alt="main logo"/>
        <v-toolbar-title>{{ meta.formLabel }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          v-model.trim="controls.login"
          :rules="rules.loginRules"
          :label="meta.usernameLabel"
          name="login"
          prepend-icon="mdi-account"
          type="text"
          required
        />

        <v-text-field
          id="password"
          v-model.trim="controls.password"
          :rules="rules.passwordRules"
          :label="meta.passwordLabel"
          name="password"
          prepend-icon="mdi-lock"
          type="password"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          type="submit"
          color="primary"
          :loading="loading"
          :disabled="controls.password.length < 6"
        >
          {{ 'Увійти' }}
        </v-btn>
      </v-card-actions>
    </v-form>
    <snackbar :show="showMsg" :message="loginMessage" />
  </v-card>
</template>

<script>
import Snackbar from '../components/Snackbar';

export default {
  components: { Snackbar },
  layout: 'empty',
  data() {
    return {
      loading: false,
      valid: true,
      showMsg: false,
      loginMessage: '',
      meta: {
        formLabel: 'Увійдіть в систему',
        usernameLabel: 'Користувач',
        passwordLabel: 'Пароль',
      },
      controls: {
        login: '',
        password: '',
      },
      rules: {
        loginRules: [(v) => !!v || 'Введіть логін'],
        passwordRules: [(v) => !!v || 'Введіть пароль'],
      },
    };
  },
  head() {
    return {
      title: 'Homepage title',
      bodyAttrs: {
        class: 'hold-transition login-page',
      },
    };
  },
  mounted: function () {
    /**
     * Show messages according to query params
     */
    const { message } = this.$route.query;
    if (message) {
      this.showMsg = true;
      switch (message) {
        case 'login':
          this.loginMessage = 'Необхідно увійти в систему';
          break;
        case 'logout':
          this.loginMessage = 'Ви вийшли з системи';
          break;
      }
    }
  },
  methods: {
    async onSubmit() {
      const valid = this.$refs.form.validate();
      if (valid) {
        this.loading = true;

        try {
          const formData = {
            login: this.controls.login,
            password: this.controls.password,
          };

          await this.$store.dispatch('auth/login', formData);
          this.$router.push('/');
        } catch (e) {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.login-page {
  background: linear-gradient(#0c5c6f, #003145);
  .v-toolbar__content,
  button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.primary {
    background: #005c6e;
  }

  .elevation-12.v-card.v-sheet {
    margin-top: 5%;
    width: 100%;
    max-width: 400px;
    .main-logo {
      width: 2em;
      margin-right: 1em;
    }
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
