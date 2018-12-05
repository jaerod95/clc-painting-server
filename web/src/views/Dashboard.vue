<template>
  <v-layout column>
    <v-layout id='sort'>
      <v-btn @click="sorted = true">Sort</v-btn>
    </v-layout>
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
          class='card'
          ripple
          hover
          @click.native="project.dialog = !project.dialog"
          :to="`/app/projects/${project.id}`"
        >
          <v-card
            class='project-color'
            :color="project.color || colors[project.id % colors.length]"
            flat
          ></v-card>
          <p id="title">{{project.title}}</p>
          <ul id="employee-list">
            <li v-for="employee in project.employees" :key="employee">
            {{ employee }}
            </li>
          </ul>
          <!-- <v-card-text class='desc text-truncate' v-for="employee in project.employees" :key="employee">
            <>{{employee}}</p>
          </v-card-text> -->
          <v-dialog v-model="project.dialog">
            <v-card class='dialog-card'>
              <router-view/>
            </v-card>
          </v-dialog>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Dashboard',
      sorted: false,
      colors: ['#008744', '#0057e7', '#d62d20', '#ffa700'],
      projects: [
        {
          id: 1,
          title: 'Cool Project 1',
          address: '1234 Cool Lane',
          description:
            'Just your typical paint job. You got some walls, some ceilings, and some outside stuff. Should take about 5 people',
          isFinished: false,
          priority: 55,
          dialog: false,
          employees: [
            'John', 'David', 'Bob', 'Mark',
          ],
        },
        {
          id: 2,
          title: 'Cool Project 2',
          address: '1234 Iknowwhereyoulive lane',
          description:
            'Just your typical paint job. You got some walls, some ceilings, and some outside stuff. Should take about 5 people',
          isFinished: false,
          priority: 55,
          dialog: false,
          employees: [
            'Seth', 'Jason', 'Britton', 'Steph',
          ],
        },
        {
          id: 3,
          title: 'Cool Project 3',
          address: '2nd best Cool Lane 3000',
          description:
            'Just your typical paint job. You got some walls, some ceilings, and some outside stuff. Should take about 5 people',
          isFinished: false,
          priority: 55,
          dialog: false,
          employees: [
            'Joe', 'Jack', 'Tom', 'Ben',
          ],
        },
        {
          id: 4,
          title: 'Cool Project 4',
          address: '4 ways to go, UT Cool Lane',
          description:
            'Just your typical paint job. You got some walls, some ceilings, and some outside stuff. Should take about 5 people',
          isFinished: false,
          priority: 55,
          dialog: false,
          employees: [
            'Parker', 'Luke', 'Lucy', 'Trevon',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.card {
  height: 250px;
  .dialog-card {
    background-color: white;
  }
  .project-color {
    height: 100px;
    border-radius: 0px;
  }
}

#title {
  margin-left:10px;
  margin-top:10px;
}
#employee-list {
  margin-left: 10px;
}
</style>
