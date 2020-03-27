<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h1 class="header-app">User List</h1>
        <v-data-table :headers="headers" :items="users">
          <template v-slot:item="row">
            <tr>
              <td>
                <input
                  type="text"
                  class="input"
                  v-bind:class="{ 'input-active': isEditMode }"
                  v-model="row.item.name"
                  disabled = !isEditMode
                >
              </td>
              <td>
                <input
                  type="text"
                  class="input"
                  v-bind:class="{ 'input-active': isEditMode }"
                  v-model="row.item.surname"
                  disabled = !isEditMode
                >
              </td>
              <td>
                <input
                  type="text"
                  class="input"
                  v-bind:class="{ 'input-active': isEditMode }"
                  v-model="row.item.phone"
                  disabled = !isEditMode
                >
              </td>
              <td>
                <input
                  type="text"
                  class="input"
                  v-bind:class="{ 'input-active': isEditMode }"
                  v-model="row.item.email"
                  disabled = !isEditMode
                >
              </td>
              <td>
                <v-btn
                  class="mx-2"
                  dark
                  small
                  color="orange"
                  @click="() => onEdit(row.item)"
                >
                  <v-icon dark>mdi-account-edit</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn
                  class="mx-2"
                  dark
                  small
                  color="red"
                  @click="() => onDelete(row.item)"
                >
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Surname',
          value: 'surname'
        },
        {
          text: 'Phone',
          value: 'phone',
          sortable: false
        },
        {
          text: 'Email',
          value: 'email',
          sortable: false
        },
        {
          text: 'Edit',
          value: 'edit',
          sortable: false
        },
        {
          text: 'Delete',
          value: 'delete',
          sortable: false
        }
      ],
      isEditMode: false
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    }
  },
  methods: {
    onEdit () {
      console.log(this.isEditMode)
      this.isEditMode = !this.isEditMode
    },
    onDelete (item) {
      const id = item.id
      this.$store.commit('userDelete', id)
    }
  },
  updated () {
    localStorage.setItem('users', this.$store.state.users)
  }
}
</script>

<style scoped>
  .input-active {
    background-color: #fff;
    box-sizing: border-box;
  }
  .input {
    padding: 3px;
  }
</style>

<style>
  .header-app {
    margin: 10px;
  }

  .v-data-table-header {
    background-color: #ccc;
  }

  .v-data-table-header .text-start {
    font-size: 16px;
  }
</style>>
