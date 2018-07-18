<template>
    <el-row class="app-bar">
        <el-col :span="4"><el-button type="text" class="el-icon-back" @click="back"/></el-col>
        <el-col :span="16" class="title"><h1><slot></slot></h1></el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>

<script>
    export default {
        name: "AppBar",
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../style/variables.scss";
    .app-bar{
        width: 100%;
        height: $top-bar-height;
        
        /*触发BFC*/
        overflow: hidden;
        
        .title{
            text-align: center;
            
            h1{
                font-size: 1.2em;
                font-weight: normal;
            }
        }
    }
</style>