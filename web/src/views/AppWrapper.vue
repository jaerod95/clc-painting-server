<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" app fixed>
      <v-list>
        <v-list-tile v-for="link in routes" :key="link.name">
          <v-list-tile class="title" :to="link.path">
            {{link.name}}
          </v-list-tile>
        </v-list-tile>
      </v-list>
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
import { routes } from '../router';

export default {
  data() {
    return {
      drawer: false,
      routes: routes.find(val => val.name === 'AppWrapper').children,
    };
  },
  methods: {
    toggleMenu() {
      console.log(this);
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style>
</style>
