import { createRouter, createWebHistory } from 'vue-router'
import BBCView from '../views/BBCView.vue'
import LojaView from '../views/LojaView.vue'
import SobreView from '../views/SobreView.vue'
import ContatoView from '../views/ContatoView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import AlugarView from '../views/AlugarView.vue'
import PagamentoView from '../views/PagamentoView.vue'

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
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/alugar/:id',
      name: 'alugar',
      component: AlugarView,
      props: true
    },
    {
      path: '/pagamento/:id',
      name: 'pagamento',
      component: PagamentoView,
      props: true
    }
  ]
  
})

export default router