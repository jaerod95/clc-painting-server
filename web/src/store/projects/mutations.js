import { PROJECTS_CREATE_PROJECT, PROJECTS_UPDATE_PROJECT, PROJECTS_DELETE_PROJECT } from './constants';

export default {
  [PROJECTS_CREATE_PROJECT]: (state, project) => {
    state.projects.push(project);
    // sort here
  },
  [PROJECTS_UPDATE_PROJECT]: (state, project) => {
    state.projects.forEach((val, ind) => {
      if (val.id === project.id) {
        // this could be buggy code
        state.projects[ind] = project;
      }
    });
  },
  [PROJECTS_DELETE_PROJECT]: (state, project) => {
    state.projects.filter(proj => proj.id !== project.id);
  },
};
