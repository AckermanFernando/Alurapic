<template>
  <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo" >
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
      tipo: {
          required: true,
          type: String
      },
      rotulo: {
          required: true,
          type: String
      },
      confirmacao: Boolean,
      estilo: String
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }   
        return
      }
      this.$emit("botaoAtivado")
    },
  },
  computed:{
      estiloDoBotao(){
          if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao'
          if(this.estilo == 'perigo') return 'botao-perigo'
      }
  }
};
</script>

<style scoped>
.botao {
  /* display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em; */
    border: none;
    border-radius: 12px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2em;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}
.botao-padrao:hover {
    background-color: #2a8a2d; /* Green */
    color: white;
}
.botao-perigo:hover {
    background-color: #c21a0e; /* Green */
    color: white;
}

.botao-perigo {
  background: #f44336;
  color: white;
}

.botao-padrao {
  background: #4CAF50;
  color: white;
}
</style>