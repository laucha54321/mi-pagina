<template>
    <div class="title-year-container">
        <div class="title-year">
            <p class="title"><slot name="title"></slot></p>
            <p class="year"><slot name="year"></slot></p> 
        </div>
        <div class="title-year">
            <p class="institution"><slot name="institution"></slot></p>
            <p class="place"><slot name="place"></slot></p>
        </div>
    </div>
</template>
<style scoped>
.title-year-container{
    margin-top: 15px;
    padding-top: 10vh;
    padding-left: 5vw;
    padding-right: 5vw;
}
.title-year{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.title{
    font-weight: bold;
    font-size: large;
}
.year,.place{
    font-weight: lighter;
    font-size: normal;
}
@media (max-width:700px){
  .title-year{
    flex-direction: column;
  }
}
</style>