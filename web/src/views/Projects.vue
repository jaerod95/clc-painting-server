<template>
  <v-layout row wrap>
    <v-flex s12 sm6 md4 lg3 pa-4 v-for="project in projects.projects" :key="project.id">
      <v-card class="card" ripple hover @click.native="project.dialog = !project.dialog" :to="`/app/projects/${project.id}`">
        <v-card class="project-color" :color="project.color || colors[project.id % colors.length]" flat>
        </v-card>
        <v-card-title primary-title class="py-2 headline">
          {{project.title}}
        </v-card-title>
        <v-card-text class="py-0">{{project.address}}</v-card-text>
        <v-card-text class="py-1 desc" wrap>
        <span>{{project.description}}</span>
        </v-card-text>
        <v-dialog class="dialog-wrapper" v-model="project.dialog">
          <v-card sm8 class="dialog-card">
            <router-view  sm8/>
          </v-card>
        </v-dialog>
      </v-card>
    </v-flex>
      <v-btn
      class="myButton"
      @click.native="dialog = !dialog" :to="`/app/projects/NULL`"
        dark
        fab
        right
        color="pink"
        >
        <v-icon>add</v-icon>
      </v-btn>
      <v-dialog class="dialog-wrapper" v-model="dialog">
          <v-card sm8 class="dialog-card">
            <router-view sm8/>
          </v-card>
        </v-dialog>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      colors: ['#008744', '#0057e7', '#d62d20', '#ffa700'],
    };
  },
  computed: mapState({
    projects: state => state.projects,
  }),
  methods: {
    openCRUD() {
      this.dialog = true;
    },
    jrclose(dia) {
      console.log('jrclose');
      console.log(dia);
      dia = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.myButton {
  position: absolute;
  bottom: 10vh !important;
  right: 5vw;
}
.card {
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
