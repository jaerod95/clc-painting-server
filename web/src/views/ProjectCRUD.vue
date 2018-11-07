<template>
  <v-layout align-center fill-height row>
    <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
      <v-card elevation-4 class='project'>
        <v-flex pa-4>
            <v-text-field label='Project Name' v-model='projectObject.name'/>
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
              <v-subheader>Min/Max Employees</v-subheader>
      <v-layout row>
      <v-flex
        shrink
        style="width: 60px">
        <v-text-field
          v-model="projectObject.employeeCnt[0]"
          class="mt-0"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>
      <v-flex class="px-3">
        <v-range-slider
          v-model="projectObject.employeeCnt"
          :max="25"
          :min="min"
        ></v-range-slider>
      </v-flex>
      <v-flex
        shrink
        style="width: 60px">
        <v-text-field
          v-model="projectObject.employeeCnt[1]"
          class="mt-0"
          hide-details
          single-line
          type="number"
        ></v-text-field>
      </v-flex>
    </v-layout>
      <v-textarea
        default-style
        name="input-7-4"
        label="Details"
        value=""
        v-model='projectObject.details'
      ></v-textarea>
      <v-flex>
  <v-stepper non-linear v-model="projectObject.indOutBoth">
    <v-stepper-header>
      <v-stepper-step
        editable
        step="I"
      >Indoor
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        editable
        step="O"
      >Outdoor
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        step="B"
        editable
      >Both
      </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
      </v-flex>
      <br/>
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
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

export default {
  components: {
    'vue-ctk-date-time-picker': VueCtkDateTimePicker,
  },
  data() {
    return {
      projectObject: {
        name: '',
        employeeCnt: [0, 25],
        details: '',
        datePick: {
          startDate: '2018-04-05',
          endDate: '2018-04-20',
        },
        indOutBoth: '',
      },
    };
  },
};
</script>

<style>
</style>
