<template>
      <v-layout id='projects' row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg3
        pa-4
        v-if="sorted == true"
        v-for="project in projects"
        :key="project.id"
      >
        <v-card
          class='pa-0 card'
          ripple
          hover
        >
          <v-card
            class='project-color'
            :color="project.color || colors[project.id % colors.length]"
            flat
          ></v-card>
          <v-flex pa-4>
          <p id="title">{{project.title}}</p>
          <ul id="employee-list">
            <li v-for="employee in project.employees" :key="employee">
            {{ employee }}
            </li>
          </ul>
          
          <v-card-text class='desc text-truncate pa-1' v-for="employee in employees" :key="employee">
            {{employee.name}}
          </v-card-text>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      sorted: true,
    }
  },
  computed: mapState({
    employees: state => state.employees.employees,
    projects: state => state.projects.projects,
  })
}
</script>

<style lang="scss" scoped>
.myButton {
  position: absolute;
  bottom: 10vh !important;
  right: 5vw;
}
.card {
  height: auto !important;
  &:hover {
    cursor: pointer;
  }
  height: 250px;
  .dialog-card {
    background-color: white;
  }
  .project-color {
    height: 100px;
    border-radius: 0px;
  }
}

</style>
