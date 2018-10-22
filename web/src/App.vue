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
        this.$router.replace('/app');

        this.$store
          .dispatch(REQUEST_INIT_APPLICATION)
          .then(() => {
            console.log('THEN');
            this.$store.commit(`auth/${STOP_LOADING}`);
          })
          .catch(() => {
            console.log('CATCH');
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

    // ///////////////////
    // GET SAVED COOKIE //
    // ///////////////////
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
