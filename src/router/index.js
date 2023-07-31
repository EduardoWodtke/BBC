import { createRouter, createWebHistory } from 'vue-router'
import BBCView from '../views/BBCView.vue'
import LojaView from '../views/LojaView.vue'
import SobreView from '../views/SobreView.vue'
import ContatoView from '../views/ContatoView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bbc',
      component: BBCView
    },
    {
      path: '/loja',
      name: 'loja',
      component: LojaView
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContatoView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
  
})

export default router