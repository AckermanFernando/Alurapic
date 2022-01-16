<template>
    <nav>
      <ul class="menu-ul">
        <li v-for="rota in rotas" :key="rota.titulo">
          <router-link class="menu-li" :to="rota.path ? rota.path : '/'">
            {{ rota.titulo }}
          </router-link>
          
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.menu-ul{
  font-size: 2rem;  
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
li{
  margin: 0 1rem;
}
.menu-li{
  text-decoration: none;
  color: rgba(210, 153, 31, 255);
}
</style>