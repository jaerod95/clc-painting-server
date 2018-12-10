<template>
  <v-layout column>
    <v-flex xs12 sm6>
      <!-- <v-toolbar color="indigo" dark>
          <v-toolbar-title>ToolBar</v-toolbar-title>
      </v-toolbar>-->
      <v-layout row wrap pa-4>
        <v-flex xs2 pa-3 v-for="employee in employees.employees" :key="employee.name">
          <v-card class="employee-card" id="box">
            <v-flex py-4 class="bordered-bottom">
              <v-img :src="employee.src" class="employee-img"></v-img>
            </v-flex>
            <v-flex px-3 py-3>
              <p class="employee-name">{{employee.name}}</p>
            </v-flex>
          </v-card>
        </v-flex>
         <v-btn class="myButton"
        dark
        fab
        right
        color="pink"
        >
        <v-icon>add</v-icon>
      </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: mapState({
    employees: state => state.employees,
  }),
};
</script>

<style lang="scss" scoped>

.myButton {
  position: absolute;
  bottom: 10vh !important;
  right: 5vw;
}
.employee-card {
  height: 200px;
  margin: auto;
  border-radius: 10px;
}

.employee-img {
  height: 90px;
  width: 90px;
  margin: auto;
  border-radius: 100px;
}

.bordered-bottom {
  border-bottom: 1px solid #cccccc;
  margin-left: 2px;
  margin-right: 2px;
}

.employee-name {
  text-align: center;
  font-size: 15px;
}

#box::before,
#box::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-color: transparent;
  border-style: solid;
}

#box::after {
  border-radius: 0.4em;
  border-width: 2.2em;
  opacity: 0.8;
  border-right-color: #5cba3d;
  border-top-color: #5cba3d;
}
</style>
