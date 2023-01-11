<template>
    <header :class="classLoop">
      <h1 :class="classLoop">{{ aux }}</h1>
      <nav class="links-header">
        <a href="https://github.com/laucha54321">GitHub</a>
        <a href="">Pagina 2</a>
        <a href="">Pagina 3</a>
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
  color: #00ADB5;
  min-height: 70px;
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

@media (max-width:700px){
  header{
    flex-direction: column;
  }
  nav{
    padding: 10px 0px;
    margin-right: 0;
  }
  h1{
    margin-left: 0;
  }

}</style>
