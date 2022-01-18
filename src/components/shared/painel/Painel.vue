
<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],
  data() {
    return {
      visivel: true,
    };
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;
  /* border: solid 2px grey; */
    background: #97979B;
  display: inline-block;
  margin: 5px;
  box-shadow: 0 4px 12px -2px;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
  font-size: medium;
}

.painel .painel-titulo {
  text-align: center;
  /* border: solid 2px; */
  background: #4d5b6b;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}
.painel-conteudo {
  overflow: hidden;
}
.painel-fade-enter-active {
  transition: all 0.3s ease;
}
.painel-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.painel-fade-enter, .painel-fade-leave-to
/* .painel-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/* .painel-fade-enter, .painel-fade-leave-active{
  opacity: 0;
}
.painel-fade-enter-active, .painel-fade-leave-active{
  
  transition: opacity .3s;
}
.painel-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */
</style>

// painel-fade-enter // antes do elemento ser incluido ou removido. O estado atual.
// painel-fade-enter-active // quando o elemento está sendo incluido
// painel-fade-leave-active // quando o elemento está sendo removido