<template>
  <v-container fluid>
    <v-layout align-center fill-height row>
      <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
        <v-flex mb-4 text-xs-center>
          <h1 class='display-1'>Create Employee</h1>
        </v-flex>
        <v-card elevation-4 class='employee'>
          <v-flex pa-4>
          <v-text-field placeholder='Name' v-model='employeeObject.name'></v-text-field>
          <v-time-picker v-model="picker" placeholder='Schedule'>
          </v-time-picker>
          <v-container align-baseline='true'>
          </v-container>
              <v-layout row justify-space-between>
      <v-flex class='text-xs-left' xs>
          <v-btn @click='onButtonDelete' color='red'>Delete</v-btn>
        </v-flex>
        <v-flex class='text-xs-right' xs>
          <v-btn @click='onButtonCancel' color='secondary'>Cancel</v-btn>
          <v-btn @click='onButtonDone' color='primary'>Done</v-btn>
      </v-flex>
    </v-layout>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      employeeObject: {
        name: '',
        schedule: '',
      },
    };
  },
  methods: {
    onButtonDelete() {
      alert('deleted');
    },
    onButtonCancel() {
      alert('canceled');
    },
    onButtonDone() {
      alert('done');
    },
  },
};
</script>

<style>
</style>
