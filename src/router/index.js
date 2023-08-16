import { createRouter, createWebHistory } from 'vue-router'
import AddPeople from '@/views/AddPeople.vue'
import AddFoods from '@/views/AddFoods.vue'
import Results from '@/views/Results.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'people',
      component: AddPeople
    },
    {
      path: '/foods',
      name: 'foods',
      component: AddFoods
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
  ]
})

export default router
