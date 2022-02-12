<template>
  <div class="conteudo" >
    <img class="imagem" src="static/erro404.jpg" alt="erro" />
    <a class="autoria" href="https://br.freepik.com/fotos-vetores-gratis/negocio"
      >Negócio vetor criado por pikisuperstar - br.freepik.com</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.conteudo{
    display: flex;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    align-items: center;
    /* align-content: space-between; */
    /* flex-wrap: wrap; */

}
.imagem{    
    width: 50%;
    height: 100%;
}
.autoria{
    margin-top: 20px;
    align-items: flex-end;
    font-size: 9px;
}
</style>