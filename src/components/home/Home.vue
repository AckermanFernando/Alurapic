
<template>
  <div>
    <h1 class="centralizado">
      <span class="texto-azul">{{ titulo1 }}</span
      >{{ titulo2 }} <span class="texto-azul">{{ titulo3 }}</span>
    </h1>
    <transition name="message-delete"
      ><p v-if="controleMessage " class="centralizado">
        {{ message }} 
      </p>
    </transition>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Buscar"
    />
    <!-- <input
      type="search"
      class="filtro"
      @input="valorRotacao = $event.target.value"
      placeholder="Valor para rotação"
    /> -->
    {{ filtro }}
    <ul v-if="controle" class="lista-fotos">
      <li
        v-for="foto in fotosComFiltro"
        :key="foto.titulo"
        class="lista-fotos-item"
      >
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:scale.animate=""
            :url="foto.url"
            :titulo="foto.titulo"
          />
          <meu-botao
            tipo="button"
            rotulo="ADICIONAR"
            estilo="padrao"
            @botaoAtivado="adiciona(foto)"
          />
          <meu-botao
            tipo="submit"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import transform from "../../directives/Transform";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  directives: {
    "meu-transform": transform,
  },
  name: "app",
  data() {
    return {
      controle: true,
      fotos: [],
      filtro: "",
      message: "",
      controleMessage: false,
      titulo1: "Navegue por",
      titulo2: " milhares ",
      titulo3: "de imagens",
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },

  methods: {
    remove(foto) {
      this.service.apaga(foto._id).then(
        () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.message = "Foto removida com sucesso!!!";
          this.controleMessage = true
          setTimeout(() => {
            this.controleMessage = false;
          }, 2000);
          // el.style.transition = 'transition opacity 0.8s 0.5s linear'
        },
        (err) => {
          alert("Foto " + foto.titulo + " apagada!");
          console.log(err);
        }
      );
    },
    adiciona(foto) {
      alert("A foto " + foto.titulo + " foi adicionada com sucesso!");
      this.message = "Foto adicionada com sucesso!!!";
      setTimeout(() => {
        this.message = "";
      }, 2000);
    },
  },

  created() {
    this.service = new FotoService(this.$resource);
    this.service.lista().then(
      (fotos) => (this.fotos = fotos),
      (err) => console.log(err)
    );
  },
};
</script>

<style>
ul {
  padding: 0px;
}
.centralizado {
  text-align: center;
  color: #d2991f;
}
.texto-azul {
  color: #0e0f33;
}
.lista-fotos {
  list-style: none;
  margin: auto 10%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}
.lista-fotos-item{
  margin-bottom: 20px;
}
.filtro {
  margin-bottom: 5em;
  display: block;
  width: 100%;
  height: 2rem;
  /* box-shadow: 4px 3px 8px 0px ; */
}

.message-delete-enter-active, .message-delete-leave-active {
  transition: opacity .5s;
}
.message-delete-enter, .message-delete-leave-to {
  opacity: 0;
}

</style>
