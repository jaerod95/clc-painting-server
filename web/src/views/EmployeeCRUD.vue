<template>
  <v-layout align-center fill-height row>
    <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
      <v-card elevation-4 class='employee'>
        <v-flex pa-4>
        <v-text-field label='Employee Name' v-model='employeeObject.name'></v-text-field>
      <v-subheader>Schedule</v-subheader>
      <v-flex xs>
        <v-select
          :items="days"
          label="Day"
          solo
         ></v-select>
      </v-flex>
      <v-layout row justify-space-around>
            <v-flex
        shrink
        style="width: 100px">
        <vue-ctk-date-time-picker
          v-model="employeeObject.datePick.startTime"
          color="primary"
          enable-button-validate
            formatted="h:mm a"
            format="HH:mm"
            time-format="h:mm a"
            label="Start"
            :minute-interval="15"
            disable-date
            />
      </v-flex>
                  <v-flex
        shrink
        style="width: 100px">
        <vue-ctk-date-time-picker
          v-model="employeeObject.datePick.endTime"
          color="primary"
          enable-button-validate
            formatted="h:mm a"
            format="HH:mm"
            time-format="h:mm a"
            label="End"
            :minute-interval="15"
            disable-date
            />
            <br/>
      </v-flex>
              <v-btn @click='onButtonSave' color='primary' small>Add</v-btn>
      </v-layout>
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
      employeeObject: {
        name: '',
        schedule: [
        ],
        datePick: {
          startTime: '14:00',
          endTime: '14:30',
        },
      },
      scheduleTime: {
        day: 'Monday',
        startTime: '14:00',
        endTime: '14:30',
      },
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
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
