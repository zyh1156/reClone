<template>
    <aside class="stepstone text-center position-relative">
        <div class="d-inline-block txt">知识无限，我有底线</div>
        <div class="position-absolute line"></div>
    </aside>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
.stepstone{
    font-size: 22px;
    color: #9a9a9a;
    background-color: #f8f8f8;
    height: 120px;
    line-height: 120px;
    z-index: 10;
}
.txt{
    padding: 0 $pardon;
    background-color: #f8f8f8;
}
.line{
    width: 60%;
    left: 20%;
    top: 59px;
    border-top: 1px solid #9a9a9a;
    z-index: -1;
}
</style>