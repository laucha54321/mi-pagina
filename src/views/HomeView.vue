<template>
  <a href="https://github.com/laucha54321" target="_blank" class="github-corner" aria-label="View source on GitHub">
    <svg width="90" height="90" viewBox="0 0 250 250" style="fill:#151513;color:#fff;position:absolute;top:0;border:0;left:0;transform:scale(-1,1);z-index:9999" aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
      </path>
      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px" class="octo-arm">
      </path>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
      </path>
    </svg>
  </a>
  <div class="main">
    <section class="darkest">
      <div class="hi-text-container" v-motion-slide-bottom>
        <div class="hi-text">
          <h3>Hola,</h3>
          <h1>Soy <b>Laureano Iván Oliva</b></h1>
          <h2>Estudiante de Ingeniería en Sistemas de Información.</h2>
        </div>
      </div>
    </section>
    <section class="light">
        <div class="column-row" v-motion-slide-bottom>
          <div class="left">
            <img src="../assets/portrait.jpeg" alt="Portrait">
          </div>
          <div class="right">
            <div>
              <h2>About Me</h2>
              <h3>Developer and Designer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit consectetur ipsum ut voluptatum. Tenetur ex ratione vitae error temporibus hic culpa. Dolor libero aperiam quo nostrum necessitatibus sapiente sed non.
              </p>
            </div>
          </div>
      </div>
    </section>
    <section class="dark">
      <div class="container hi-text" v-motion-slide-visible-once-bottom>
        <h3>Hola,</h3>
        <h1>Soy Laureano Oliva</h1>
        <h2>Estudiante de Ingeniería en Sistemas de Información.</h2>
      </div>
    </section>
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
body{
  background-color: var(--darkest);
}
.column-row{
  display: flex;
  flex-direction: row;
  height: 100%;

  justify-content: center;
  text-align: left;
}
.right{
  display: flex;
  flex: 2;
  align-items: center;
  padding: 3%;
}
.left{
  display: flex;
  flex: 1;
  align-items: center;
  padding: 3%;
}
.hi-text{
  padding-left: 10%;
  padding-bottom: 20%;
}
.hi-text-container{
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: center;
}
h3{
  font-size: clamp(20px,2vw,50px);
}
h1{
  font-size: clamp(20px,5vw,80px);
}
h2{
  font-size: clamp(20px,2.5vw,70px);
}
p{
  font-size: clamp(20px,2vw,50px);
}
b{
  color: var(--accent);
}
section{
  height: 95vh;
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

.github-corner:hover .octo-arm{
  animation:octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave{
  0%,100%{
    transform:rotate(0)
  }20%,60%{
    transform:rotate(-25deg)
  }40%,80%{
    transform:rotate(10deg)
  }
}
@media (max-width:500px){
  .github-corner:hover .octo-arm{
    animation:none
  }
  .github-corner .octo-arm{
    animation:octocat-wave 560ms ease-in-out
  }
}
</style>
