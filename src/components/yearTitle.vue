<template>
    <div>
        <div class="year-title">
            <p><slot name="year"></slot></p>
            <p class="main"><b><slot name="title"></slot></b>, <slot name="institution"></slot></p>
        </div>
    </div>
</template>
<style scoped>
.year-title{
    padding-left:5%;
    margin-top: 10px;
    text-align: left;
    display: flex;
    font-size: large;
}
.main{
    font-weight: light;
    padding-left: 8%;
    padding-right: 10px;
}
</style>