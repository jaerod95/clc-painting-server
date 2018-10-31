<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid fill_height fill-width>
        <v-layout column>
          <v-flex xs12 sm6>
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>ToolBar</v-toolbar-title>
            </v-toolbar>
            <v-container fluid grid-list-md>
              <v-layout row wrap>
                <v-flex
                  v-for="employee in employees"
                  v-bind="{ [`xs${employee.flex}`]: true }"
                  :key="employee.name"
                  >
                  <v-card>
                      <v-flex >
                        <v-img :src="employee.src" height="30" width="30"></v-img>
                      </v-flex>
                    <v-flex>
                      <p>{{employee.name}}</p>
                    </v-flex>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        { name: 'Bob', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 2 },
        { name: 'Tom', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 2 },
        { name: 'David', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 2 },
      ],
    };
  },
};
</script>

<style lang="scss">
.full-height-wrapper {
  height: 100vh;
}
</style>
