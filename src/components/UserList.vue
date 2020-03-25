<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h1 class="header-app">User List</h1>
        <v-data-table :headers="headers" :items="users">
          <template v-slot:item="row">
            <tr>
              <td>{{row.item.name}}</td>
              <td>{{row.item.surname}}</td>
              <td>{{row.item.phone}}</td>
              <td>{{row.item.email}}</td>
              <td>
                <v-btn
                  class="mx-2"
                  dark
                  small
                  color="orange"
                  @click="onButtonClick(row.item)"
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
                  @click="onButtonClick(row.item)"
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
      users: [
        {
          name: 'Frozen',
          surname: 'Yogurt',
          phone: '222-22-22',
          email: 'test@test.ua',
          edit: 4.0,
          delete: 'delete'
        },
        {
          name: 'Frozen11',
          surname: 'Yogurt11',
          phone: '222-22-11',
          email: 'test@test.ua',
          edit: 4.0,
          delete: '1%'
        }
      ]
    }
  },

  methods: {
    onButtonClick (item) {
      console.log('click on ' + item.name)
    }
  }
}
</script>

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
