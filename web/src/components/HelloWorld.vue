<template>
  <div class="hello">
      <p>{{employee.name}}</p>
      <p>{{employee.skills}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    employee: Object,
  },
};
</script>

<style lang="scss" scoped>
.hello {
  background-color: #CCCCCC;
  border-radius: 12px;
  margin: 8px;
}
</style>
