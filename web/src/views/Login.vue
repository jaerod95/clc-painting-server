<template>
<v-container pa-0 fluid class="main-background">
  <v-layout align-center fill-height row class="sub-background">
    <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
      <v-flex mb-4 text-xs-center>
        <h1 class="display-1">CLC Painting</h1>
      </v-flex>
      <v-card elevation-4 class="loginCard">
        <v-flex pa-4>
        <v-text-field placeholder="email" v-model="auth.email"></v-text-field>
        <v-text-field placeholder="password" v-model="auth.password"></v-text-field>
        <v-btn @click="login" color="primary">login</v-btn>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { AUTH_LOGIN, ON_AUTH_STATE_CHANGE } from '@/store/constants';

export default {
  data() {
    return {
      auth: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // Basic encoded header
      const Authorization = `Basic ${Buffer.from(`${this.auth.email}:${this.auth.password}`).toString('base64')}`;

      this.$store
        .dispatch(`auth/${AUTH_LOGIN}`, { Authorization })
        .then(() => {
          this.$root.$emit(ON_AUTH_STATE_CHANGE, true);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
.full-height-wrapper {
  height: 100vh;
}

.main-background {
  background-image: url('../assets/login_background.jpg');

  .sub-background {
    background: rgba(255, 255, 255, 0.75);
  }
}
</style>
