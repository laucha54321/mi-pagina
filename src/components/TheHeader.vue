<template>
    <header :class="classLoop">
      <h1 :class="classLoop">{{ aux }}</h1>
      <nav class="menu">
        <a href="https://github.com/laucha54321" target="_blank">GitHub</a>
        <a href="" target="_blank">Pagina 2</a>
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
      <a href="https://github.com/laucha54321" target="_blank">GitHub</a>
      <a href="" target="_blank">Pagina 2</a>
      <a href="" target="_blank">Pagina 3</a>
    </nav>
</template>
<script>

export default {
  data(){
    return{
      titulo:'Laureano Iván Oliva',
      looping:true,
      aux:'',
      menu:false
    }
  },
  mounted(){
    this.animacionTitulo()
  },
  computed:{
    classLoop(){
      return this.looping ? 'looping' : 'nt'
    }
  },
  methods:{
    animacionTitulo(){
      let titulo1 = '<h1>'+this.titulo+'</h1>'
      let counter = 0
      let bar = false
      var interval = setInterval(()=>{
        counter++
        this.aux = titulo1.substring(0,counter) + '|'
        if(counter > titulo1.length){
          clearInterval(interval)
          this.aux = this.titulo
          this.looping = false
        }
      },150)
    },
    clickHamburguer(){
      this.menu = !this.menu
      console.log(this.menu)
    }
  }
}
</script>
<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393E46;
  color: #EEEEEE;
  min-height: 70px;
  z-index: 99;
}
h1{
  margin-left:25px;
}
.looping{
  background-color: #393E46;
}
nav{
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin-right: 25px;
}
a{
  text-align: center;
  color: #EEEEEE;
  font-weight: bold;
  padding-right: 10px;
  padding-left: 10px;
  font-size: x-large;
  font-weight: normal;
}

a:hover{
  color:#00ADB5;
  background-color: #222831;
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
    background-color: #393E46;
    padding-top: 70px;
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
    background-color: #222831;
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

  background-color: #EEEEEE;
  border-radius: 6px;
  z-index: 1;
  transform-origin: 0 0;
  
  transition: 0.4s;

}
.hamburger:hover span:nth-child(2){
  transform: translate(10px);
  background-color: #00ADB5;
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
  background-color: #00ADB5;
}

}</style>
