<template>
  <the-main-header></the-main-header>
  <div class="main">
    <section class="darkest">
      <div class="container hi-text" v-motion-slide-bottom>
        <h3>Hola,</h3>
        <h1>Soy <b>Laureano Iván Oliva</b></h1>
        <h2>Estudiante de Ingeniería en Sistemas de Información.</h2>
      </div>
    </section>
    <div class="spacer darkest-light"></div>
    <section class="light">
      <div class="container hi-text" v-motion-slide-visible-once-bottom>
        <h3>Hola,</h3>
        <h1>Soy Laureano Oliva</h1>
        <h2>Estudiante de Ingeniería en Sistemas de Información.</h2>
      </div>
    </section>
    <div class="spacer light-dark"></div>
    <section class="dark">
      <div class="container hi-text" v-motion-slide-visible-once-bottom>
        <h3>Hola,</h3>
        <h1>Soy Laureano Oliva</h1>
        <h2>Estudiante de Ingeniería en Sistemas de Información.</h2>
      </div>
    </section>
    <div class="spacer dark-darkest"></div>
    <div class="darkest bottom-section">
      <ul>
        <li><a href="">Gmail</a></li>
        <li><a href="">Github</a></li>
        <li><a href="">Linkedin</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
import TheMainHeader from '../components/TheMainHeader.vue'
export default{
  components:{
    TheHeader,
    TheMainHeader
  },
}
</script>
<style scoped>
.hi-text{
  padding: 10%;
}
h3{
  font-size: large;
}
h1{
  font-size: xx-large;
}
h2{
  font-size: x-large;
}
b{
  color: var(--accent);
}
section{
  height: 70vh;
  width: 100%;
}
.bottom-section{
  height: 30vh;
  width: 100%;
}
ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15%;
  margin-right: 15%;

}
li{
  list-style: none;
  
  padding-left: 5vw;
  padding-right: 5vw;

}
a{
  color: var(--light);
  font-size: larger;
}
a:hover{
  text-decoration: underline;
}

.dark{
  background: var(--dark);
  color: var(--light);
}
.light{
  background: var(--light);
  color:var(--dark);
}
.darkest{
  background: var(--darkest);
  color: var(--light);
}
.spacer{
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.dark-light{
  background-image: url('../assets/dark_light.svg');
}
.light-darkest{
  background-image: url('../assets/light_darkest.svg');
}
.darkest-light{
  background-image: url('../assets/darkest_light.svg');
}
.light-dark{
  background-image: url('../assets/light_dark.svg');
}
.dark-darkest{
  background-image: url('../assets/dark_darkest.svg');
}



</style>
