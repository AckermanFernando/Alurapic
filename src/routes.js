import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/Home.vue'
import Erro from './components/erro404/Erro.vue'
 
export const routes = [
    {path: '', name: 'home', component: Home, titulo: 'Início', menu : true},
    {path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu : true},
    {path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false},
    {path: '*', component: Erro, menu : false}
    // {path: '/minhalista', component: Lista, titulo: 'Minha Lista'}
]