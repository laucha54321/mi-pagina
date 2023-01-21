<template>
  <div class="the-header">
    <header>
      <h1>Laureano Iván Oliva</h1>
      <nav class="menu">
        <router-link to="/AboutMe">Sobre Mí</router-link>
        <a href="https://github.com/laucha54321" target="_blank">GitHub</a>
        <a href="" target="_blank">Pagina 3</a>
      </nav>
        <button :class="['hamburger',menu ? 'active' : '_']" @click="clickHamburguer" >
          <div class="bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
    </header>
    <nav :class="['mobile-nav',menu ? 'active': null]" >
      <router-link to="/AboutMe">Sobre Mí</router-link>
      <a href="https://github.com/laucha54321" target="_blank">GitHub</a>
      <a href="" target="_blank">Pagina 3</a>
    </nav>
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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark);
  color: var(--light);
  min-height: 70px;
  max-height: 110px;
  z-index: 99;
}
h1{
  margin-left:25px;
}
.looping{
  background-color: var(--dark);
}
nav{
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin-right: 25px;
}
a{
  text-align: center;
  color: var(--light);
  font-weight: bold;
  padding-right: 10px;
  padding-left: 10px;
  font-size: x-large;
  font-weight: normal;
}

a:hover{
  color: var(--accent);
  background-color: var(--darkest);
}

.hamburger{
  display: none;
}
.mobile-nav{
  display:none;
}

@media (max-width:768px){

  header{
    padding-left: 3vw;
    padding-right: 2vw;
    padding-top: 1vh;
    padding-bottom:1vh;
  }
  h1{
    margin-left: 0;
    z-index: 99;
  }

  .menu{
    display: none;
    z-index: 99;
  }
  .mobile-nav{
    display: block;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    min-height: 100vh;
    z-index: 98;
    background-color: var(--dark);
    padding-top: 110px;
    transition: 0.4s;
  }
  .mobile-nav.active{
    left: 0;
  }

  a{
    display: block;
    text-align: center;
    padding: 12px 16px;
    margin-top: 6px;
    margin-bottom: 6px;
    background-color: var(--darkest);
  }
  
.hamburger{
  display: block;
  position: relative;
  z-index: 99;

  user-select: none;

  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor:pointer;
}
.hamburger span{
  display:block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position:relative;

  background-color: var(--light);
  border-radius: 6px;
  z-index: 1;
  transform-origin: 0 0;
  
  transition: 0.4s;

}
.hamburger:hover span:nth-child(2){
  transform: translate(10px);
  background-color: var(--accent);
}
.hamburger.active span:nth-child(1){
  transform: translate(0, -2px) rotate(45deg);
}
.hamburger.active span:nth-child(3){
  transform: translate(-3px, 3px) rotate(-45deg);
}
.hamburger.active span:nth-child(2){
  opacity: 0;
}

.hamburger.active:hover span{
  background-color: var(--accent);
}

}</style>
