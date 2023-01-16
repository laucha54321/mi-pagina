<template>
  <body>
    <router-view/>
  </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');


/* paleta de color:
https://colorhunt.co/palette/222831393e4600adb5eeeeee */

*{
  margin:0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'Roboto Condensed', sans-serif;
}
li{
  list-style:disc;
  font-weight: light;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
h2{
  color:#00ADB5;
  font-weight: normal;
  text-align: center;
  font-size: xx-large;
  
  padding-top: 5vh;
  padding-bottom: 5vh;
}
h3{
  text-align: center;
  font-size: x-large;
  padding-top: 1vh;
  padding-bottom: 1vh;
}
h4{
  text-align: center;
  font-size: larger;
  padding-top: 3vh;
  padding-bottom: 3vh;
}
p{
  font-size:large;
}
li{
  list-style:disc;
  font-size: large;
}
.container{
  padding: 1vh;
}
body{
  background-color:#EEEEEE;
}
@media (max-width:700px){
  h2{
    text-align: center;
  }
  p{
    text-align: center;
  }

}
</style>
