import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemList from '../views/ItemList.vue'
import ListForm from '../views/ListForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'List',
    component: ItemList
  },
  {
    path: '/form',
    name: 'Form',
    component: ListForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
