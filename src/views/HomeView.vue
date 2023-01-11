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
      <title-year-place v-for="el in educacion">
        <template v-slot:title>{{el.title}}</template>
        <template v-slot:year>{{ el.year }}</template>
        <template v-slot:institution>{{ el.institution }}</template>
        <template v-slot:place>{{ el.place }}</template>
      </title-year-place>
    </div>
    <div class="container">
      <h2>Certificaciones</h2>
      <h3>PROGRAMACIÓN</h3>
      <year-certification v-for="el in certificacionP">
        <template v-slot:title>{{el.title}}</template>
        <template v-slot:year>{{ el.year }}</template>
        <template v-slot:institution>{{ el.institution }}</template>
      </year-certification>
      <h3>INGLES</h3>
      <year-certification v-for="el in certificacionI">
        <template v-slot:title>{{el.title}}</template>
        <template v-slot:year>{{ el.year }}</template>
        <template v-slot:institution>{{ el.institution }}</template>
      </year-certification>
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
  },
  data(){
    return{
      educacion:[
        {
          title:'Estudiante de Ingeniería en Sistemas de la Información',
          year:'Mar. 2020 - Actualmente',
          institution:'Universidad Tecnológica Nacional',
          place:'Rosario, Santa Fe'
        },
        {
          title:'Curso de inglés intensivo',
          year:'Sep. 2018',
          institution:'LSI Education',
          place:'Cambridge, Inglaterra'
        },
        {
          title:'Bachiller en Ciencias Sociales',
          year:'Mar. 2015 - Dic. 2019',
          institution:'Escuela de los Padres Nº 3082',
          place:'Venado Tuerto, Santa Fe'
        }
      ],
      certificacionP:[
        {
          title:'Vue - The Complete Guide',
          year:'2023',
          institution:'Udemy - Maximilian Schwarzmüller'
        },
        {
          title:'JavaScript Algorithms and Data Structures',
          year:'2022',
          institution:'FreeCodeCamp'
        },
        {
          title:'#Sé Programar',
          year:'2022',
          institution:'Cámara de la Industria Argentina del Software'
        },
        {
          title:'Programación de Video Juegos con Unity. Nivel Inicial',
          year:'2017',
          institution:'UTN Buenos Aires'
        },

      ],
      certificacionI:[
        {
          title:'Certificate in Advance English (CAE)',
          year:'2019',
          institution:'Cambridge English'
        },
        {
          title:'First Certificate in English (FCE)',
          year:'2018',
          institution:'Cambridge English'
        },
        {
          title:'Preliminary English Test (PET)',
          year:'2015',
          institution:'Cambridge English'
        },
      ]
    }
  }
  
}
</script>
<style scoped>
h2{
  font-size: xx-large;
}
h3{
  padding-top: 15px;
}
p{
  font-weight: light;
}
title-year{
  padding-top: 80px;
}
</style>
