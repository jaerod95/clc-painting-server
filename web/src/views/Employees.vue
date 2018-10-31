<template>
 <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card elevation-4>
                <v-flex pa-4>
                    <v-card-img>
                        <img src="@/assets/logo.png" alt="logo">
                    </v-card-img>
                    <v-card-text>
                        <p id="employee_name">{{employee.name}}</p>
                    </v-card-text>
                </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        name: 'John Doe',
      },
      employees: [
        { employee: 'Foo' },
        { employee: 'Bar' },
        { employee: 'Bob' },
      ],
    };
  },
};
</script>

<style lang="scss">
.full-height-wrapper {
  height: 100vh;
}
</style>
