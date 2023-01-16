<template>
    <div class="title-sub-item">
            <div class="main">
            <h3><slot name="title"></slot></h3>
            <h4><slot name="subtitle"></slot></h4>
            <p><slot name="year"></slot></p>
        </div>
        <ul>
            <li v-for="el in listItems" >{{ el }}</li>
        </ul>
    </div>
</template>
<script>
export default{
    props:['listItems'],
}
</script>
<style scoped>
p{
    padding-bottom: 3vh;
    padding-left: 3vw;
    padding-right: 3vw;
    text-align: center;
}
.title-sub-item{
    padding-top: 6vh;
    padding-bottom: 6vh;
    padding-left: 5vw;
    padding-right: 5vw;
}
</style>