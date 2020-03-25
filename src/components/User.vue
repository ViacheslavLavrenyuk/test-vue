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
              User Profile
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
            ></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Surname"
            ></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Phone"
            ></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Email"
            ></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!isEditing"
                color="success"
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
            <v-snackbar
              v-model="hasSaved"
              :timeout="2000"
              absolute
              bottom
              left
            >
              Profile has been updated
            </v-snackbar>
          </v-card>
          <h2 class="header-h2-app">Load JSON with users</h2>
          <v-file-input
            show-size
            counter
            multiple
            label="File input"
          ></v-file-input>
          <v-btn color="primary">
            <v-icon left>
                mdi-file-upload
            </v-icon>
            Load file
          </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      hasSaved: false,
      isEditing: true,
      model: null
    }
  },

  methods: {
    customFilter (item, queryText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
    },
    save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
    }
  }
}
</script>

<style scoped>
  .header-h2-app {
    margin: 30px 10px 10px;
  }
</style>
