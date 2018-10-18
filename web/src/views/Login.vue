<template>
  <div>
    <input v-model="message" type="text" />
    <h1>{{ message }}</h1>
    <br/>
    <input v-model="range" type="range" />
    <h1>{{ range }}</h1>
    <br/>
    <div v-for="employee in employees" :key="employee.id">
      <CoolThing :employee="employee"></CoolThing>
    </div>

<button @click="onButtonClick">AwesomeStuff</button>

    <div v-if="range > 50">
      <p>WOAH THATS A LOT</p>
    </div>
    <div v-else>
      <p>ITS SMALL</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    CoolThing: HelloWorld,
  },
  data() {
    return {
      message: 'Hello World',
      range: 50,
      employees: [
        { id: 0, name: 'jimmy', skills: 'good' },
        { id: 1, name: 'john', skills: 'good' },
        { id: 2, name: 'john', skills: 'good' },
        { id: 3, name: 'john', skills: 'good' },
        { id: 4, name: 'john', skills: 'good' },
      ],
    };
  },
  methods: {
    onButtonClick() {
      alert('HI!');
    },
  },
};
</script>

<style>
</style>
