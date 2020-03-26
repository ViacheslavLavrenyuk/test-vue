<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
          <h1 class="header-app">Update user list</h1>
          <v-card
            class="overflow-hidden"
            color="gray lighten-1"
            dark
          >
            <v-toolbar
              flat
              color="blue"
            >
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
              Add user
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-3"
              fab
              small
              @click="isEditing = !isEditing"
            >
              <v-icon v-if="isEditing">mdi-close</v-icon>
              <v-icon v-else>mdi-pencil</v-icon>
            </v-btn>
            </v-toolbar>
            <v-card-text>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Name"
              v-model="name"
            >
            </v-text-field>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Surname"
              v-model="surname"
            ></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Phone"
              v-model="phone"
            ></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Email"
              v-model="email"
            ></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!isEditing"
                color="success"
                class="add-button"
                @click="save"
              >
                Add new user
              </v-btn>
            </v-card-actions>
            <v-snackbar
              v-model="hasSaved"
              :timeout="2000"
              absolute
              bottom
              left
            >
              User has been added
            </v-snackbar>
          </v-card>
          <h2 class="header-h2-app">Import JSON</h2>
          <v-col cols="12" sm="6" md="3" class="input-json">
            <v-text-field
              v-model="usersJSON"
              label="Insert JSON"
            ></v-text-field>
          </v-col>
          <v-btn
            color="primary"
            @click="loadFromJSON"
          >
            <v-icon left>
              mdi-file-upload
            </v-icon>
            Load users
          </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['user'],

  data () {
    return {
      hasSaved: false,
      isEditing: true,
      name: '',
      surname: '',
      phone: '',
      email: '',
      usersJSON: ''
    }
  },

  methods: {
    save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
      if (
        this.name.trim().length ||
        this.surname.trim().length ||
        this.phone.trim().length ||
        this.email.trim().length
      ) {
        const newUser = {
          id: this.uid,
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          email: this.email
        }
        this.$store.state.users.push(newUser)
        this.clearForm()
        localStorage.setItem('users', JSON.stringify(this.$store.state.users))
      } else {
        this.hasSaved = false
        window.alert('Please fill in at least one field')
      }
    },
    clearForm () {
      this.name = ''
      this.surname = ''
      this.phone = ''
      this.email = ''
    },
    loadFromJSON () {
      const usersFromJSON = JSON.parse(this.usersJSON).map(user => ({
        ...user,
        name: user.name.split(' ')[0],
        surname: user.name.split(' ')[1]
      }))
      usersFromJSON.map(item => this.$store.state.users.push(item))
      this.usersJSON = ''
      localStorage.setItem('users', JSON.stringify(this.$store.state.users))
    }
  }
}
</script>

<style scoped>
  .header-h2-app {
    margin: 30px 10px 10px;
  }
  .add-button {
    margin: 5px;
  }
  .input-json {
    display: inline-block;
  }
</style>
