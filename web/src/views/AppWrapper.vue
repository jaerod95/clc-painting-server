<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" app fixed>
      <v-container pa-0 fluid fill-height>
        <v-layout column justify-space-between>
          <v-flex shrink>
            <v-list>
              <v-list-tile v-for="link in routes" :key="link.name">
                <v-list-tile class="title" :to="link.path">
                  {{link.name}}
                </v-list-tile>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex shrink class="logout">
            <hr/>
            <v-list-tile @click="logout">
              Logout
            </v-list-tile>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" app fixed>
      <v-toolbar-side-icon @click="toggleMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">{{this.$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-layout>
</template>

<script>
import { AUTH_LOGOUT, ON_AUTH_STATE_CHANGE } from '@/store/constants';
import { routes } from '../router';

export default {
  data() {
    return {
      drawer: true,
      routes: routes.find(val => val.name === 'AppWrapper').children,
    };
  },
  methods: {
    toggleMenu() {
      this.drawer = !this.drawer;
    },
    logout() {
      this.$store.dispatch(`auth/${AUTH_LOGOUT}`).then(() => {
        this.$root.$emit(ON_AUTH_STATE_CHANGE, false);
      });
    },
  },
};
</script>

<style lang="scss">
.logout {
  &:hover {
    color: #999;
  }
}
</style>
