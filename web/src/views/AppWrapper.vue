<template>
  <v-container fluid pa-0 app>
    <v-layout fill-height>
        <v-navigation-drawer
        v-model="drawer"
        app
        permanent>
          <v-list>
            <v-list-tile v-for="link in routes" :key="link.title">
              <v-list-tile class="title" :to="link.link">
                {{link.title}}
              </v-list-tile>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      <v-flex xs12>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      routes: [
        {
          title: 'Home',
          link: '/app/dashboard',
        },
        {
          title: 'Projects',
          link: '/app/projects',
        },
        {
          title: 'Employees',
          link: '/app/employees',
        },
        {
          title: 'CreateProject',
          link: '/app/create-project',
        },
      ],
    };
  },
};
</script>

<style>
</style>
