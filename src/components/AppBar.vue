<template>
    <el-row class="app-bar" type="flex" align="middle">
        <el-col :span="4"><el-button style="vertical-align: middle;width: 3em" type="text" @click="back"><icon :src="backIcon"/></el-button></el-col>
        <el-col :span="16" class="title"><h1><slot></slot></h1></el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>

<script>
    import Icon from "./Icon";
    import backIcon from '../assets/icon_back.png'
    export default {
        name: "AppBar",
        components: {Icon},
        data(){
            return{
                backIcon
            }
        },
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
        
        .icon{
            width: 1em;
            height: 1em;
            object-fit: contain;
            vertical-align: middle;
        }
    }
</style>