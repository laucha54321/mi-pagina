<template>
  <div class="home">
    <the-header></the-header>
    <div class="container" v-motion-slide-bottom>
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
      <year-certification 
      v-for="el in certificacionP" 
      :key="el.title" 
      :links="el.links" 
      v-motion-slide-visible-once-bottom>
        <template v-slot:title>{{el.title}}</template>
        <template v-slot:year>{{ el.year }}</template>
        <template v-slot:institution>{{ el.institution }}</template>
      </year-certification>
      <h3>INGLES</h3>
      <year-certification 
      v-for="el in certificacionI" 
      :key="el.title" 
      :links="el.links" 
      v-motion-slide-visible-once-bottom>
        <template v-slot:title>{{el.title}}</template>
        <template v-slot:year>{{ el.year }}</template>
        <template v-slot:institution>{{ el.institution }}</template>
      </year-certification>
    </div>
    <div class="container">
      <h2>Experiencia Laboral</h2>
      <title-sub-item  
      v-for="el in experiencia" 
      :key="el.title" 
      :listItems="el.listItems" 
      v-motion-slide-visible-once-bottom>
        <template v-slot:title>{{ el.title }}</template>
        <template v-slot:subtitle>{{ el.subtitle }}</template>
        <template v-slot:year>{{ el.year }}</template>
      </title-sub-item>
    </div>
    <div class="container">
      <h2>Otras Habilidades</h2>
      <list-items :listItems="lista"></list-items>
    </div>
    <div class="container">
      <h2>Hobbies y pasatiempos</h2>
      <list-items :list-Items="lista2"></list-items>
    </div>
  </div>
</template>
<script>
import listItems from '../components/listItems.vue'
import titleSubItem from '@/components/titleSubItem.vue'
import TheHeader from '../components/TheHeader.vue'
import titleYearPlace from '../components/titleYearPlace.vue'
import yearCertification from '../components/yearTitle.vue'
export default{
  components:{
    TheHeader,
    titleYearPlace,
    yearCertification,
    titleSubItem,
    listItems
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
          links:'https://drive.google.com/file/d/17sxpSLsklXX5iDnEAujHyta7vhIWB9sp/view?usp=share_link'
        },
        {
          title:'First Certificate in English (FCE)',
          year:'2018',
          institution:'Cambridge English',
          links:'https://drive.google.com/file/d/1uP0Vllg9LM8zbeKM_ghnLoLI44dztHjl/view?usp=share_link'

        },
        {
          title:'Preliminary English Test (PET)',
          year:'2015',
          institution:'Cambridge English',
          links:'https://drive.google.com/file/d/1JhKDkrs2k0XSasJJYn87nSlu1xwxU9c6/view?usp=share_link'

        },
      ],
      experiencia:[
        {
          title:"Pasantía de Desarrollo Web",
          subtitle:"Ayude a Ivonne Nirich una consultora que trabaja con productos de MicroFocus",
          year:"Nov. 2020 - Dic. 2020",
          listItems:[
            "Implemente un Script-Server, una herramienta que te permite ejecutar scripts en servidores a través de un portal web.",
            "Administración de Máquinas Virtuales.",
            "Instalación de Sistemas Operativos Linux (CentOs y RedHat)."
          ]
        },
        {
          title:"Desarollador de Software",
          subtitle:"Responsabilidad de cordinar equipos para el desarollo de ML",
          year:"Nov. 2023 - Dic. 2024",
          listItems:[
            "Administrar equipos",
            "Hacer Máquinas Virtuales.",
            "Instalación de Sistemas Operativos Linux (CentOs y RedHat)."
          ]
        }
      ],
      lista:[
        "Entiendo el paradigma de Programación Estructurada y Programación Orientada a objetos.",
        "Alto nivel de comprensión lectora y escucha en inglés.",
        "Entendimiento de comandos de terminal de los sistemas operativos de Linux y Windows.",
        "Redacción de Documentos usando LATEX.",
        "Desarollo de front end con Vue.js",
        "Entendimiento de algoritmos simples y estructuras de datos."
      ],
      lista2:[
        "Disfruto de jugar al ajedrez en la universidad.",
        "Con mis amigos, por diversión intentamos hacer juegos con Unity y C#.",
        "Además personalice una distribución de Linux con ayuda de la comunidad RICE (Race Inspired Cosmetic Enhancements)",
        "Me gusta jugar videojuegos con amigos.",
        "Me gusta leer en inglés. Pero igualmente mi autor preferido es Yukio Mishima que es Japones."
      ]
    }
  }
  
}
</script>
<style scoped>
p{
  font-weight: light;
  padding-top: 6vh;
  padding-bottom: 6vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
.break{
  padding-top: 20vh;
}
.container{
  padding-top: 6vh;
  padding-bottom: 6vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
</style>
