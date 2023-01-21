<template>
  <body>
    <router-view/>
  </body>
</template>
<script>
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');


/* paleta de color:
https://colorhunt.co/palette/222831393e4600adb5eeeeee */
:root{
  --darkest:#222831;
  --dark:#393E46;
  --light:#EEEEEE;
  --accent:#00ADB5;
}
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
  background-color:var(--light);
}
.container{
  padding-top: 6vh;
  padding-bottom: 6vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
@media (max-width:700px){
  p{
    text-align: center;
  }

}
</style>
