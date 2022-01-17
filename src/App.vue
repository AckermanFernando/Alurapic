<template>
  <div id="app" class="corpo">
    <div class="topo">
      <div><img class="logo" src="https://github.com/AckermanFernando/Alurapic/blob/master/src/img/logo.png?raw=true" alt="logo alurapic"></div>
      <!-- <h1 class="titulo">{{ titulo }}</h1> -->
      <!-- <div class="space"></div> -->
      <meu-menu class="menu" :rotas="routes" />
    </div>
    <div class="listra-amarela"></div>
    <div class="conteudo">
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    "meu-menu": Menu,
  },

  data() {
    return {
      routes,
      titulo: "Alurapic",
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
* {
  color: #07060b;
}
body,
ul,
.topo,
#app {
  margin: 0;
  font-size: x-large;
  
}
.listra-amarela{
  height: 5px;
  background: #d2991f;
}
.logo{
  margin-left: 1rem;
  width: 125px;
  height: 125px;
}
.titulo {
  color: #d2991f;
  
}
.space {
  width: 20%;
}
.menu {
  display: flex;
  justify-content: center;
}
.corpo {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  width: 100%;
}
.topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  background: #0e0f33;
}
.conteudo {
  margin: 5%;
  display: flex;
  justify-content: center;
}
.pagina-enter-active {
  transition: all 0.3s ease;
}
.pagina-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.pagina-enter, .pagina-leave-to
/* .pagina-leave-active below version 2.1.8 */ {

  opacity: 0;
}
</style>
