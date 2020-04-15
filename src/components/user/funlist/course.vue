<template>
    <section></section>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        getData(){
            this.axios.post("/api/user/profile/getkclist.html",{table:"goods_post"},res=>{
                console.log(res);
            })
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
<style lang="scss" scoped>

</style>