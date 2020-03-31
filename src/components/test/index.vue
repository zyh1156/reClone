<template>
    <section></section>
</template>
<script>
import axios from "../../core/axios"
export default {
    data(){
        return{}
    },
    methods:{
        getData:async function(){
            let bb= await axios.post("http://192.168.1.92/api/",{});
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
<style lang="scss" scoped>

</style>