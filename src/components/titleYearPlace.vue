<template>
    <div class="title-year-container">
        <div class="title-year">
            <p class="title">Estudiante de Ingeniería en Sistemas de la Información</p>
            <p class="year">Mar. 2020 - Actualmente</p> 
        </div>
        <div class="title-year">
            <p>Universidad Tecnológica Nacional</p>
            <p class="place">Rosario, Santa Fe</p>
        </div>
    </div>
</template>
<style scoped>
.title-year-container{
    margin-top: 15px;
}
.title-year{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title-year p{
    display: inline-block;
}
.title{
    font-weight: bold;
    font-size: larger;
}
.year,.place{
    font-weight: lighter;
    font-size: small;
}
@media (max-width:700px){
  .title-year{
    flex-direction: column;
  }
}
</style>