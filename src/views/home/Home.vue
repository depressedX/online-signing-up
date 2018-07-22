<template>
    <div class="home">
        <el-button
                class="toggle-button"
                type="text"
                style="width: 3em"
                @click="drawerOpen=!drawerOpen">
            <img src="../../assets/icon_menu.png" style="width: 1em;height: 1em"/>
        </el-button>
        <drawer-layout
                @slide-end="handleSlideEnd"
                ref="drawer"
                :content-drawable="true">
            <div class="drawer" slot="drawer">
                <sidebar-layout/>
            </div>
            <div class="content" slot="content">
                <main-layout/>
            </div>
        </drawer-layout>
    </div>
</template>

<script>
    import {DrawerLayout} from 'vue-drawer-layout'
    import SidebarLayout from "./componnets/SidebarLayout";
    import MainLayout from "./componnets/MainLayout";

    export default {
        name: 'home',
        components: {
            MainLayout,
            SidebarLayout,
            DrawerLayout
        },
        data() {
            return {
                drawerOpen: false
            }
        },
        methods:{
            handleSlideEnd(v){
                this.drawerOpen = v
            }
        },
        watch: {
            drawerOpen(val) {
                console.log('changed')
                this.$refs.drawer.toggle(val)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .toggle-button{
        position: relative;
        z-index: 999;
    }
</style> 