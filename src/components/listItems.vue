<template>
    <div class="list-items">
        <ul>
            <li v-for="el in listItems" v-motion-slide-visible-once-bottom>{{ el }}</li>
        </ul>
    </div>
</template>
<script>
export default{
    props:['listItems']
}
</script>
<style scoped>
.list-items{
    padding-top: 6vh;
    padding-bottom: 6vh;
    padding-left: 5vw;
    padding-right: 5vw;
}
</style>