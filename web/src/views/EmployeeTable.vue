<template>
  <div id="app">
    <v-toolbar flat color="white">
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2"
        @click.native="true" :to="`/app/create/employee`">New Employee</v-btn>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      v-model="selected"
      :headers="columns"
      :items="employees"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            Present?
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.native="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
            align="center"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td align="center">{{ props.item.name }}</td>
          <td align="center">{{ props.item.skill }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
              edit
            </v-icon>
            <v-icon
              small
              @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import router from '../router';
import { mapState } from 'vuex';

export default {
  data: () => ({
    dialog: false,
    pagination: {
      sortBy: 'name',
    },
    selected: [],
    columns: [
      {
        text: 'Name',
        align: 'right',
        value: 'name',
      },
      { text: 'Skill', align: 'center', value: 'skill' },
      { text: 'Actions', align: 'center', value: 'actions' },
    ],
  }),
  computed: mapState({
    employees: state => state.employees.employees,
  }),
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.employees.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    editItem(item) {
      router.push({ name: 'EmployeeCRUD' });
      this.editedIndex = this.employees.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.employees.indexOf(item);
      // eslint-disable-next-line
      confirm('Are you sure you want to delete this item?') &&
        this.employees.splice(index, 1);
    },
  },
};
</script>
