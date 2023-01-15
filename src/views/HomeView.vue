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
      <title-year-place v-for="el in educacion" v-motion-pop>
        <template v-slot:title>{{el.title}}</template>
        <template v-slot:year>{{ el.year }}</template>
        <template v-slot:institution>{{ el.institution }}</template>
        <template v-slot:place>{{ el.place }}</template>
      </title-year-place>
    </div>
    <div class="container">
      <h2>Certificaciones</h2>
      <h3>PROGRAMACIÓN</h3>
      <year-certification v-for="el in certificacionP" :key="el.title" :links="el.links" v-motion-slide-visible-once-bottom>
        <template v-slot:title>{{el.title}}</template>
        <template v-slot:year>{{ el.year }}</template>
        <template v-slot:institution>{{ el.institution }}</template>
      </year-certification>
      <h3>INGLES</h3>
      <year-certification v-for="el in certificacionI" v-motion-slide-visible-once-bottom>
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
          institution:'Udemy - Maximilian Schwarzmüller',
          links:'https://drive.google.com/file/d/19pi8n_MnKNsQMWS5JT3ylJrfd5pJE0nu/view?usp=share_link'
        },
        {
          title:'JavaScript Algorithms and Data Structures',
          year:'2022',
          institution:'FreeCodeCamp',
          links:'https://www.freecodecamp.org/certification/laucha54321/javascript-algorithms-and-data-structures'
        },
        {
          title:'#Sé Programar',
          year:'2022',
          institution:'Cámara de la Industria Argentina del Software',
          links:'https://seprogramar.inti.gob.ar/inti/certificates/verify/NCjcNl5ACW7_vL1c'
        },
        {
          title:'Programación de Video Juegos con Unity. Nivel Inicial',
          year:'2017',
          institution:'UTN Buenos Aires',
          links:'https://drive.google.com/file/d/1wjLkieeETYMmUbquk4vt2-YStg2ER_VW/view?usp=share_link'
        },

      ],
      certificacionI:[
        {
          title:'Certificate in Advance English (CAE)',
          year:'2019',
          institution:'Cambridge English',

        },
        {
          title:'First Certificate in English (FCE)',
          year:'2018',
          institution:'Cambridge English',

        },
        {
          title:'Preliminary English Test (PET)',
          year:'2015',
          institution:'Cambridge English',

        },
      ]
    }
  }
  
}
</script>
<style scoped>
p{
  font-weight: light;
}
.break{
  padding-top: 20vh;
}
.container{
  padding-bottom: 30vh;
}
</style>
