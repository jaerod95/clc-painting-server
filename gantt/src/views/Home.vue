<template>
  <svg id="gantt">
  </svg>
</template>

<script>
import Gantt from 'frappe-gantt';

export default {
  name: 'home',
  mounted() {
    var tasks = [
      {
        id: 'Task 1',
        name: 'Redesign website',
        start: '2016-12-28',
        end: '2016-12-31',
        progress: 20,
        dependencies: 'Task 2, Task 3',
        aaaa: 'Jason',
      },
    ];
    var gantt = new Gantt(document.getElementById('gantt'), tasks, {
      custom_popup_html: task => {
        console.log(task);
        return `
        <div class="details-container">
          <p>${task.aaaa} is in charge</p>
        </div>
      `;
      },
    });
  },
};
</script>

<style lang="scss" scoped>
#gantt {
}
</style>

