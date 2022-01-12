
<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Buscar"
    />
    {{ filtro }}
    <ul v-if="controle" class="lista-fotos">
      <li
        v-for="foto in fotosComFiltro"
        :key="foto.titulo"
        class="lista-fotos-item"
      >
        <meu-painel :titulo="foto.titulo">
          <a name="imagem" :href="foto.url" target="_blank"
            ><imagem-responsiva :url="foto.url" :titulo="foto.titulo"
          /></a>
           <meu-botao
            tipo="button"
            rotulo="ADICIONAR"
            estilo="padrao"
            @botaoAtivado="adiciona(foto)"
          />
          <meu-botao
            tipo="button"
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
import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },
  name: "app",
  data() {
    return {
      titulo: "Alurapic",
      controle: true,
      parentMessage: "Pai",
      fotos: [],
      filtro: "",
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
      alert("Foto " + foto.titulo + " apagada!");
    },
    adiciona(foto){
      alert("A foto " + foto.titulo + " foi adicionada com sucesso!")
    }
  },

  created() {
    // let promise = await this.$http.get("http://localhost:3000/v1/fotos");
    // let fotos = await promise.json()
    // this.fotos = fotos
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(
        (fotos) => (this.fotos = fotos),
        (err) => console.log(err)
      );
  },
};
</script>

<style>
.centralizado {
  text-align: center;
}
.lista-fotos {
  list-style: none;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}
.filtro {
  display: block;
  width: 100%;
}
</style>
