<template>
    <header :class="classLoop">
      <h1 :class="classLoop">{{ aux }}</h1>
      <nav class="links-header">
        <div class="menu">
          <a href="https://github.com/laucha54321" target="_blank">GitHub</a>
          <a href="" target="_blank">Pagina 2</a>
          <a href="" target="_blank">Pagina 3</a>
        </div>
        <button class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
</template>
<script>

export default {
  data(){
    return{
      titulo:'Laureano Iván Oliva',
      looping:true,
      aux:''
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
  height: 100%;
  text-align: center;
  color: #00ADB5;
  font-weight: bold;
  padding-right: 10px;
  padding-left: 10px;
  font-size: x-large;
  font-weight: normal;
}

a:hover{
  color:#EEEEEE;
  background-color: #222831;
}

.hamburger{
  display: block;
  position: relative;
  z-index: 1;

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
.hamburger:active span:nth-child(1){
  transform: translate(0, -2px) rotate(45deg);
}
.hamburger:active span:nth-child(3){
  transform: translate(-3px, 3px) rotate(-45deg);
}
.hamburger:active span:nth-child(2){
  opacity: 0;
}

.hamburger:active:hover span{
  background-color: #00ADB5;
}

@media (max-width:700px){

  header{
    padding-left: 3vw;
    padding-right: 2vw;
    padding-top: 1vh;
    padding-bottom:1vh;
  }
  h1{
    margin-left: 0;
  }
  .menu{
    display: none;
  }

}</style>
