import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import ContactList from '../views/ContactList.vue'
import NewBackup from '../views/NewBackup.vue'
import EditBackup from '../views/EditBackup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/contactlist',
      name: 'ContactList',    
      component: () => import('../views/ContactList.vue')
    },
    {
      path: '/newbackup',
      name: 'NewBackup',    
      component: () => import('../views/NewBackup.vue')
    },
     {
      path: '/editbackup/:id',
      name: 'EditBackup',    
      component: () => import('../views/EditBackup.vue')
    }

  ]
})

export default router
