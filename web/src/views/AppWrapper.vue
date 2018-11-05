<template>
  <v-container fluid pa-0>
    <v-layout fill-height>
        <v-navigation-drawer
        v-model="drawer"
        app>
          <v-list>
            <v-list-tile v-for="link in routes" :key="link.name">
              <v-list-tile class="title" :to="link.path">
                {{link.name}}
              </v-list-tile>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      <v-flex xs12>
        <router-view @menu-toggle="drawer = !drawer"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { routes } from '../router';

export default {
  data() {
    return {
      drawer: true,
      routes: routes.find(val => val.name === 'AppWrapper').children,
    };
  },
};
</script>

<style>
</style>
