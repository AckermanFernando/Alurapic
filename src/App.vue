
<template>
  <div id="app" class="corpo">
    <meu-menu :rotas="routes" />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
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
    };
  },
};
</script>

<style>
.corpo {
  margin: 0 auto;
  font-family: Helvetica, sans-serif;
  width: 96%;
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
