<template>
    <div>
        <a :href="links" target="_blank" class="year-title">
            <p><slot name="year"></slot></p>
            <div  class="main"><b><slot name="title"></slot></b>, <slot name="institution"></slot></div>
        </a>
    </div>
</template>
<script>
export default{
    props:['links']
}
</script>
<style scoped>
.year-title{
    padding-left:5%;
    margin-top: 10px;
    text-align: left;
    display: flex;
    font-size: large;

    padding-top: 6vh;
    padding-bottom: 6vh;
    padding-left: 5vw;
    padding-right: 5vw;

}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    background-color: #00ADB5;
    color:#EEEEEE;
}
.main{
    font-weight: light;
    padding-left: 8%;
    padding-right: 10px;
}
</style>