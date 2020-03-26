<template>
  <v-app>
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  mounted () {
    if (localStorage.getItem('users')) {
      try {
        this.$store.state.users = JSON.parse(localStorage.getItem('users'))
      } catch (e) {
        localStorage.removeItem('users')
      }
    }
  },

  components: {
    Navbar
  }
}
</script>
