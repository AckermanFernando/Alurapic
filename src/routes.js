// import Cadastro from './components/cadastro/Cadastro.vue'
// const Cadastro = () => System.import('./components/cadastro/Cadastro.vue').default
import Home from './components/home/Home.vue'
import Erro from './components/erro404/Erro.vue'
 
export const routes = [
    {path: '', name: 'home', component: Home, titulo: 'Início', menu : true},
    {path: '/cadastro', name: 'cadastro', component: () => import('./components/cadastro/Cadastro.vue'), titulo: 'Cadastro', menu : true},
    {path: '/cadastro/:id', name: 'altera', component: () => import('./components/cadastro/Cadastro.vue'), titulo: 'Cadastro', menu: false},
    {path: '*', component: Erro, menu : false}
    // {path: '/minhalista', component: Lista, titulo: 'Minha Lista'}
]