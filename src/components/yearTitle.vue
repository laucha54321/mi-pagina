<template>
    <div>
        <div class="year-title">
            <p><slot name="year"></slot></p>
            <a :href="links" target="_blank" class="main"><b><slot name="title"></slot></b>, <slot name="institution"></slot></a>
        </div>
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

    margin-top: 15px;
    padding-top: 10vh;
    padding-left: 5vw;
    padding-right: 5vw;

}
a{
    text-decoration: none;
    color: black;
}
.main{
    font-weight: light;
    padding-left: 8%;
    padding-right: 10px;
}
</style>