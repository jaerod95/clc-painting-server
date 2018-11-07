<template>
    <v-layout column>
      <v-flex xs12 sm6>
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon @click="$emit('menu-toggle')"></v-toolbar-side-icon>
          <v-toolbar-title>ToolBar</v-toolbar-title>
        </v-toolbar>
        <v-layout row wrap>
          <v-flex xs4 pa-4 v-for="employee in employees" :key="employee.name">
            <v-card class="card">
              <v-flex>
                <v-img :src="employee.src" height="30" width="30"></v-img>
              </v-flex>
              <v-flex>
                <p>{{employee.name}}</p>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          name: 'Boab',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 2,
        },
        {
          name: 'Tosm',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 2,
        },
        {
          name: 'Davidd',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 2,
        },
        {
          name: 'Bob',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 2,
        },
        {
          name: 'Tom',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 2,
        },
        {
          name: 'David',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.full-height-wrapper {
  height: 100vh;
}

.card {
  height: 200px;
}
</style>
