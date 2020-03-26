<template>
  <div>
    <v-app-bar app>
      <v-btn
        color="primary"
        class="v-primary-button"
        to="/"
      >
        <v-icon left>
          mdi-account-multiple-outline
        </v-icon>
        User list
      </v-btn>
      <v-btn
        color="primary"
        class="v-primary-button"
        to="/user"
      >
        <v-icon left>
          mdi-account-multiple-plus-outline
        </v-icon>
        Add user
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
export default {

}
</script>>

<style scoped>
  .v-primary-button {
    margin: 10px;
  }
</style>
