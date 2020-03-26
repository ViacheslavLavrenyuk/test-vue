import Vue from 'vue'
import Router from 'vue-router'
import UserList from '../components/UserList'
import User from '../components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: UserList
    },
    {
      path: '/user',
      props: true,
      name: 'user',
      component: User
    }
  ],
  mode: 'history'
})
