<template>
  <div class="the-header">
    <header>
      <nav class="menu">
        <router-link to="/AboutMe">Sobre Mí</router-link>
        <a href="https://github.com/laucha54321" target="_blank">GitHub</a>
        <a href="" target="_blank">Pagina 3</a>
      </nav>
    </header>
  </div>
</template>
<script>

export default {
  data(){
    return{
      menu:false
    }
  },
  methods:{
    clickHamburguer(){
      this.menu = !this.menu
      console.log(this.menu)
    }
  }
}
</script>
<style scoped>
header{
  background-image: url('../assets/accent_darkest.svg');
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: var(--light);
  min-height: 70px;
  max-height: 110px;
  z-index: 99;
}
nav{
  padding: 3%;
  margin-left: 50%;
  display: flex;
  height: 100%;
  justify-content: space-around;
}
a{
  text-align: center;
  color: var(--light);
  padding-right: 10px;
  padding-left: 10px;
  font-size: x-large;
  font-weight: normal;
}

a:hover{
  text-decoration: underline;
}

.hamburger{
  display: none;
}
.mobile-nav{
  display:none;
}
@media (max-width:768px){
  a{
    font-size: larger;
  }
}
</style>
