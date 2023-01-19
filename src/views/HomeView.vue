<template>
  <div class="home">
    <the-header></the-header>
  </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'

export default{
  components:{
    TheHeader
  },
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
