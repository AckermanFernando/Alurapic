{<template class="conteudo">
  <div class="corpo">
    <div>
      <!-- <h1 class="centralizado">Cadastro</h1> -->
      <h1 class="centralizado" v-if="this.id">Atualizar</h1>
      <h1 class="centralizado" v-else>Cadastro</h1>

      <h2 class="centralizado">{{ foto.titulo }}</h2>

      <!-- <h2 class="centralizado" v-if="this.id">Alterando</h2>
      <h2 class="centralizado" v-if="!this.id">Cadastrando</h2> -->

      <form @submit.prevent="gravar()">
        <div class="controle">
          <label for="titulo">TÍTULO</label>
          <input
            name="titulo"
            data-vv-as="título"
            v-validate
            data-vv-rules="required|min:3|max:30"
            id="titulo"
            autocomplete="off"
            v-model="foto.titulo"
          />
          <span class="erro" v-show="errors.has('titulo')">{{
            errors.first("titulo")
          }}</span>
        </div>

        <div class="controle">
          <label for="url">URL</label>
          <input
            name="url"
            v-validate
            data-vv-rules="required"
            id="url"
            autocomplete="off"
            v-model="foto.url"
          />
          <span class="erro" v-show="errors.has('url')"
            >{{ errors.first("url") }}</span
          >
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
          <router-link :to="{ name: 'home' }"
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
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
    };
  },

  methods: {
    // alterar(id) {
    //   let novaFoto = this.service
    //     .listaId(this.id)
    //     .then(console.log("funfou"), (err) => console.log(err));
    //   // alert(novaFoto);
    // },
    gravar() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.service.cadastra(this.foto).then(
            () => {
              if (this.id) {
                this.$router.push({ name: "home" });
              }
              this.foto = new Foto();
            },
            (err) => console.log(err)
          );
        }
      });
    },
  },
  created() {
    this.service = new FotoService(this.$resource);
    if (this.id) {
      this.service.busca(this.id).then((foto) => (this.foto = foto));
    }
  },
};
</script>
<style scoped>
.conteudo {
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
.erro {
  color: red;
}
</style>
