<template>
<v-layout>
  <v-layout v-if="generated"> 
    <v-layout id='projects' :class="[generated ? '' : 'hidden']" row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg3
        pa-4
        v-if="sorted == true"
        v-for="project in projects"
        :key="project.id"
      >
        <v-card
          class='card'
          ripple
          hover
          @click.native="project.dialog = !project.dialog"
          :to="`/app/projects/${project.id}`"
        >
          <v-card
            class='project-color'
            :color="project.color || colors[project.id % colors.length]"
            flat
          ></v-card>
          <p id="title">{{project.title}}</p>
          <ul id="employee-list">
            <li v-for="employee in project.employees" :key="employee">
            {{ employee }}
            </li>
          </ul>
          <v-card-text class='desc text-truncate' v-for="employee in project.employees" :key="employee">
            <p>{{employee}}</p>
          </v-card-text>
          <v-dialog v-model="project.dialog">
            <v-card class='dialog-card'>
              <router-view/>
            </v-card>
          </v-dialog>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
  <v-layout v-else column>
    <v-flex row>
       <main class="customMain main-content col-sm-12 p-0 ">
          <!-- / .main-navbar -->
          <div class=" main-content-container container-fluid px-4">
            <!-- Page Header -->
            <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span class="text-uppercase page-subtitle">Dashboard</span>
                <h3 class="page-title">CLC Painting Overview</h3>
              </div>
            </div>
            <!-- End Page Header -->
            <!-- Small Stats Blocks -->
            <div class="row">
              <div class="col-lg col-md-6 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Monthly Revenue</span>
                        <h6 class="stats-small__value count my-3">$201,390</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-6 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Weekly Revenue</span>
                        <h6 class="stats-small__value count my-3">$54,123</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Total Man Hours</span>
                        <h6 class="stats-small__value count my-3">8,147</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-3"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-6 mb-4">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Active Clients</span>
                        <h6 class="stats-small__value count my-3">53</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-4"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-lg col-md-4 col-sm-12 mb-4">
                <div class="stats-small stats-small--1 card card-small">
                  <div class="card-body p-0 d-flex">
                    <div class="d-flex flex-column m-auto">
                      <div class="stats-small__data text-center">
                        <span class="stats-small__label text-uppercase">Late Projects</span>
                        <h6 class="stats-small__value count my-3">3</h6>
                      </div>
                      <div class="stats-small__data">
                        <span class="stats-small__percentage stats-small__percentage--decrease">2.4%</span>
                      </div>
                    </div>
                    <canvas height="120" class="blog-overview-stats-small-5"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
     </v-flex>
        <v-flex row>
          <employeeTableView class="tableView"/>
          <v-btn mt-5 color="primary" class="sortButton" @click="sort">Generate Ideal Schedule</v-btn>
        </v-flex>
  </v-layout>
</v-layout>
</template>

<script>
import { mapState } from 'vuex';
import employeeTableView from './EmployeeTable.vue';
import {
  ON_AUTH_STATE_CHANGE,
  REQUEST_INIT_APPLICATION,
  AUTH_LOGOUT,
  START_LOADING,
  STOP_LOADING,
  COOKIE_GET_USER_TOKEN,
  AUTH_VERIFY_USER_TOKEN,
} from '@/store/constants';

export default {
  components: {
    employeeTableView: employeeTableView,
  },
  mounted() {
    // var scriptTag = document.createElement("script");
    //   scriptTag.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    //   scriptTag.id = "my-datatable";
    //   document.getElementsByTagName('head')[0].appendChild(scriptTag);
    
    // var scripts = ['https://code.jquery.com/jquery-3.3.1.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
    // 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js',
    // 'https://unpkg.com/shards-ui@latest/dist/js/shards.min.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js',
    // ];
    // scripts.forEach(val => {
    // var scriptTag = document.createElement("script");
    //   scriptTag.src = "https://cdn.datatables.net/v/dt/dt-1.10.16/sl-1.2.5/datatables.min.js";
    //   scriptTag.id = "my-datatable";
    //   document.getElementsByTagName('head')[0].appendChild(scriptTag);
    // });
  },
  data() {
    return {
      title: 'Dashboard',
      sorted: false,
      generated: false,
    };
  },
  computed: mapState({
    projects: state => state.projects.projects,
  }),
  methods: {
    sort() {
      this.$store.commit(`auth/${START_LOADING}`);
      this.generated = true;
      this.$router.push({route: '/app/dashboard/results'})
      setTimeout(() => {this.$store.commit(`auth/${STOP_LOADING}`);}, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://use.fontawesome.com/releases/v5.0.6/css/all.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('../assets/shards-dashboards.css');

.tableView {
  width: 100%;
}
.customMain {
  height: 400px !important;
}
.sortButton {
  width: 250px;
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}
.hidden {
  display: none !important;
}
.card {
  height: 250px;
  .dialog-card {
    background-color: white;
  }
  .project-color {
    height: 100px;
    border-radius: 0px;
  }
}

#title {
  margin-left:10px;
  margin-top:10px;
}
#employee-list {
  margin-left: 10px;
}
</style>
