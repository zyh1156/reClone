<template>
    <section  class="bac"></section>
</template>
<script>
import axios from "../../core/axios"
export default {
    data(){
        return{}
    },
    methods:{
        getData:async function(){
            let bb= await axios.post("/api/",{});
        }
    },
    mounted(){
        this.getData();
    }
}
</script>
<style lang="scss" scoped>

</style>