<template>
   <v-layout column>
      <v-flex xs12 sm6>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>ToolBar</v-toolbar-title>
        </v-toolbar>
          <v-layout row wrap pa-4>
              <v-flex xs3 pa-3 v-for="employee in employees" :key="employee.name">
                <v-card class="employee-card" id="box">
                  <v-flex py-4 class="bordered-bottom">
                    <v-img
                    :src="employee.src"
                    class="employee-img">
                    </v-img>
                  </v-flex>
                  <v-flex px-3 py-3>
                    <p class="employee-name">{{employee.name}}</p>
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
        { name: 'Bowb', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
        { name: 'Twom', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
        { name: 'Dwavid', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
        { name: 'Beob', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
        { name: 'Teom', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
        { name: 'Deavid', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
        { name: 'Bob', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
        { name: 'Tom', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
        { name: 'David', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
      ],
    };
  },
};
</script>

<style lang="scss">
  .employee-card {
    height: 250px;
    margin:auto;
    border-radius:10px;
  }

  .employee-img {
    height: 130px;
    width: 130px;
    margin: auto;
    border-radius:100px;
  }

  .bordered-bottom {
    border-bottom: 1px solid #CCCCCC;
    margin-left: 2px;
    margin-right: 2px;
  }

  .employee-name {
    text-align: center;
    font-size:18px;
  }

#box::before,
#box::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-color: transparent;
    border-style: solid;
}

// #box::before {
//     border-width: 1.5em;
//     border-right-color: #ccc;
//     border-top-color: #ccc;
// }

#box::after {
    border-radius: 0.4em;
    border-width: 2.2em;
    opacity: 0.8;
    border-right-color: #5CBA3D;
    border-top-color: #5CBA3D;
}


</style>
