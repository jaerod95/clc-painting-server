import { EMPLOYEES_CREATE_EMPLOYEE, EMPLOYEES_UPDATE_EMPLOYEE, EMPLOYEES_DELETE_EMPLOYEE } from './constants';

export default {
  [EMPLOYEES_CREATE_EMPLOYEE]: (state, employee) => {
    state.employees.push(employee);
    // sort here
  },
  [EMPLOYEES_UPDATE_EMPLOYEE]: (state, employee) => {
    state.employees.forEach((val, ind) => {
      if (val.id === employee.id) {
        // this could be buggy code
        state.employees[ind] = employee;
      }
    });
  },
  [EMPLOYEES_DELETE_EMPLOYEE]: (state, employee) => {
    state.employees.filter(proj => proj.id !== employee.id);
  },
};
