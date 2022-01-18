<template class="conteudo">
  <div class="corpo">
    <div >
      <h1 class="centralizado">Cadastro</h1>
      <h2 class="centralizado">{{ foto.titulo }}</h2>

      <form @submit.prevent="gravar()">
        <div class="controle">
          <label for="titulo">TÍTULO</label>
          <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo" />
        </div>

        <div class="controle">
          <label for="url">URL</label>
          <input id="url" autocomplete="off" v-model.lazy="foto.url" />
          <imagem-responsiva
            v-show="foto.url"
            :url="foto.url"
            :titulo="foto.titulo"
          />
        </div>

        <div class="controle">
          <label for="descricao">DESCRIÇÃO</label>
          <textarea
            id="descricao"
            autocomplete="off"
            v-model="foto.descricao"
          ></textarea>
          <!--v-model é igual a @input="foto.descricao = $event.target.value" :value="foto.descricao">   -->
        </div>

        <div class="centralizado">
          <meu-botao rotulo="GRAVAR" tipo="submit" />
          <router-link :to="{name: 'home'}"
            ><meu-botao rotulo="VOLTAR" tipo="button"
          /></router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import Foto from "../../domain/foto/Foto";
import FotoService from '../../domain/foto/FotoService';

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      foto: new Foto(),
    };
  },

  methods: {
    gravar() {
      this.service.cadastra(this.foto).then(
        () => this.foto = new Foto(),
        err => console.log(err)
      );
    },
  },
  created(){
    this.service = new FotoService(this.$resource)
  }
};
</script>
<style scoped>
.conteudo{
  display: flex;
  justify-content: center;
}
.corpo {
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  width: 65%;
}
form {
  padding: 2rem 3rem;
}
h1.centralizado {
  color: #0e0f33;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>