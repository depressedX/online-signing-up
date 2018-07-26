<template>
    <div class="home">
        <el-button
                class="toggle-button"
                type="text"
                style="width: 3em"
                @click="drawerOpen=!drawerOpen">
            <icon :src="drawerOpen?backIcon:menuIcon" />
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
    import Icon from "../../components/Icon";
    
    import menuIcon from '../../assets/icon_menu.png'
    import backIcon from '../../assets/icon_back.png'
    

    export default {
        name: 'home',
        components: {
            Icon,
            MainLayout,
            SidebarLayout,
            DrawerLayout
        },
        data() {
            return {
                menuIcon,backIcon,
                drawerOpen: false
            }
        },
        methods: {
            handleSlideEnd(v) {
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
    .home {
        color: white;
        
        .drawer,.content{
            overflow: scroll;
            height: 100%;
        }
    }

    .toggle-button {
        position: relative;
        z-index: 999;
    }
</style> 