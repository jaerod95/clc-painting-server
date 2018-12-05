<template>
  <v-app id="app">
    <lottie :options="defaultOptions" v-if="isLoading" />
    <router-view v-else/>
  </v-app>
</template>

<script>
import {
  ON_AUTH_STATE_CHANGE,
  REQUEST_INIT_APPLICATION,
  AUTH_LOGOUT,
  START_LOADING,
  STOP_LOADING,
  COOKIE_GET_USER_TOKEN,
  AUTH_VERIFY_USER_TOKEN,
} from '@/store/constants';

import { mapState } from 'vuex';
import lottie from '@/components/Lottie.vue';
import animationData from '@/assets/tractor_animation.json';

export default {
  components: {
    lottie,
  },
  data() {
    return {
      defaultOptions: { animationData },
    };
  },
  computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
    }),
  },
  // Global Handlers Here
  mounted() {
    // ////////////////
    // AUTH HANDLER //
    // ////////////////

    this.$root.$on(ON_AUTH_STATE_CHANGE, auth => {
      // if authenticated
      if (auth) {
        this.$store.commit(`auth/${START_LOADING}`);
        if (!this.$route.path.includes('app')) {
          this.$router.replace('/app');
        }

        console.log('dispatching...');

        this.$store
          .dispatch(REQUEST_INIT_APPLICATION)
          .then(() => {
            console.log('STOPPING GOOD LOAD');
            this.$store.commit(`auth/${STOP_LOADING}`);
          })
          .catch(() => {
            console.log('STOPPING LOAD');
            this.$store
              .dispatch(`auth/${AUTH_LOGOUT}`)
              .then(() => {
                this.$root.$emit(ON_AUTH_STATE_CHANGE, false);
              })
              .catch(() => {
                this.$root.$emit(ON_AUTH_STATE_CHANGE, false);
              });
          });
      } else {
        this.$router.replace('/login');
        this.$store.commit(`auth/${STOP_LOADING}`);
      }
    });

    // /////////////////////////
    // Check Logged In Status //
    // /////////////////////////
    this.$store.dispatch(`cookie/${COOKIE_GET_USER_TOKEN}`).then(() => {
      if (this.$store.state.auth.token) {
        console.log('logged in');
        /* eslint-disable */
        this.axios.defaults.headers.common[
          'Authorization'
        ] = this.$store.state.auth.token;
        /* eslint-enable */
        this.$store
          .dispatch(`auth/${AUTH_VERIFY_USER_TOKEN}`)
          .then(() => {
            this.$root.$emit(ON_AUTH_STATE_CHANGE, true);
          })
          .catch(() => {
            this.$root.$emit(ON_AUTH_STATE_CHANGE, false);
          });
      } else {
        console.log('logged out');
        this.$store.commit(`auth/${STOP_LOADING}`);
        this.$router.replace('/login');
      }
    });
  },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400');

* {
  font-family: 'Montserrat', sans-serif;
}
body {
  margin: 0;
}
</style>
