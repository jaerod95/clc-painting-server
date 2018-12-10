<template>
  <v-layout align-center fill-height row>
    <v-flex xs12 sm8 offset-sm2 md8 offset-md2>
      <v-card elevation-4 class="project">
        <v-flex pa-4>
          <v-text-field label="Project Title" v-model="projectObject.title"/>
          <vue-ctk-date-time-picker
            v-model="projectObject.datePick"
            range-mode
            overlay-background
            without-range-shortcut
            color="primary"
            enable-button-validate
            format="YYYY-MM-DD"
            formatted="ddd D MMM YYYY"
            label="Select Project Start and End Dates"
          />
          <v-picker/>
          <v-subheader>Max Employees: {{projectObject.numberOfEmployees}}</v-subheader>
          <v-layout row>
            <v-flex shrink style="width: 60px">
              <p class="text-md-center">{{minEmployees}}</p>
            </v-flex>
            <v-flex class="px-3">
              <v-slider
                v-model="projectObject.numberOfEmployees"
                :max="maxEmployees"
                :min="minEmployees"
              ></v-slider>
            </v-flex>
            <v-flex shrink style="width: 60px">
              <p class="text-md-center">{{maxEmployees}}</p>
            </v-flex>
          </v-layout>
          <v-textarea
            default-style
            name="input-7-4"
            label="Details"
            value
            v-model="projectObject.description"
          ></v-textarea>
          <v-flex>
          <v-flex xs12 sm6 class="py-2">
            <p>Project Type</p>
            <v-btn-toggle class="mygroup" v-model="projectObject.indOutBoth">
              <v-btn flat value="indoor">
                Indoor
              </v-btn>
              <v-btn flat value="outdoor">
                Outdoor
              </v-btn>
              <v-btn flat value="both">
                Both
              </v-btn>
            </v-btn-toggle>
          </v-flex>
          <v-flex xs12 sm6 class="py-2">
            <p>Project Color</p>
            <v-card>
            <input class="colorpicker" type="color" v-model="projectObject.color"/>
            </v-card>
          </v-flex>
          </v-flex>
          <br>
          <v-layout row justify-space-between>
            <v-flex class="text-xs-left" xs>
              <v-btn v-if="this.$route.name != 'ProjectCRUD' && this.$route.params.id != 'NULL'" @click="onDelete" color="red">Delete</v-btn>
            </v-flex>
            <v-flex class="text-xs-right" xs>
              <v-btn v-if="this.$route.name != 'ProjectCRUD' && this.$route.params.id != 'NULL'" @click="onSave" color="primary">Update</v-btn>
              <v-btn v-else @click="onCreate" color="primary">Create</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export default {
  components: {
    'vue-ctk-date-time-picker': VueCtkDateTimePicker,
  },
  mounted() {
    // eslint-disable-next-line
    if (this.$route.params.id && this.$route.params.id != 'NULL') {
      console.log('this ran');
      // eslint-disable-next-line
      this.projectObject = this.$store.state.projects.projects.filter(val => val.id == this.$route.params.id)[0];
    }
  },
  data() {
    return {
      minEmployees: 1,
      maxEmployees: 25,
      projectObject: {
        id: guid(),
        title: '',
        numberOfEmployees: 1,
        description: '',
        datePick: {
          startDate: '2018-04-05',
          endDate: '2018-04-20',
        },
        indOutBoth: 'indoor',
        color: '#ff0000',
        dialog: false,
      },
    };
  },
  methods: {
    onCreate() {
      console.log(this.$store);
      this.$store.state.projects.projects.push(this.projectObject);
    },
    onSave() {
      this.$store.state.projects.projects.forEach((val, ind) => {
        // eslint-disable-next-line
        if (val.id == this.projectObject.id) {
          this.$store.state.projects.projects[ind] = this.projectObject;
        }
      });
    },
    onDelete() {
      console.log(this.$route.params.id);
      // eslint-disable-next-line
      this.$store.state.projects.projects = this.$store.state.projects.projects.filter(val => val.id != this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.colorpicker {
 width: 100%;
 height: 30px;
 &:hover {
   cursor: pointer;
 }

}
.mygroup {
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>
