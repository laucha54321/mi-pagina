<template>
  <div class="home">
    <the-header></the-header>
    <div class="container">
      <h2>Sobre Mí</h2>
        <p> Nací el 25 de Julio de 2001. Viví en Venado Tuerto hasta los 18, cuando decidí que iba a continuar estudiando ingeniería en Sistemas de la información en la Universidad Tecnológica Nacional en Rosario.</p>
        <p>Estoy buscando enfrentarme a nuevos desafíos y aprender nuevas tecnologías. Puedo resolver problemas complejos en una manera autónoma, aprovechando mi nivel de Ingles y mi habilidad para usar Google. </p>
    </div>
    <div class="container">
      <h2>Educación</h2>
      <title-year-place></title-year-place>
      <title-year-place></title-year-place>
      <title-year-place></title-year-place>
    </div>
    <div class="container">
      <h2>Certificaciones</h2>
      <h3>Programacion</h3>
      <year-certification></year-certification>
      <year-certification></year-certification>
      <year-certification></year-certification>
      <year-certification></year-certification>
    </div>
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import titleYearPlace from '../components/titleYearPlace.vue'
import yearCertification from '../components/yearTitle.vue'
export default{
  components:{
    TheHeader,
    titleYearPlace,
    yearCertification
  }
}
</script>
<style scoped>
p{
  font-weight: light;
}
title-year{
  padding-top: 80px;
}
</style>
