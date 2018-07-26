<template>
    <div class="sidebar-layout">
        <div class="avatar-container">
            <img src="../../../assets/logo.png"/>
        </div>
        <div class="info-container">
            <template v-if="!loading">
                <p class="name">{{name}}</p>
                <p class="stuId">{{stu_no}}</p>
            </template>
            <p v-else><i class="el-icon-loading"/></p>
        </div>
        <hr/>
        <el-menu
                class="menu"
                router
                default-active="1">
            <el-menu-item index="/work">
                <icon :src="profileIcon"/>
                <span slot="title">作业情况</span>
            </el-menu-item>
            <el-menu-item index="/process">
                <icon :src="bubbleIcon"/>
                <span slot="title">招新进程</span>
            </el-menu-item>
        </el-menu>
        <div class="logout-container">
            <hr/>
            <el-button @click="logout" type="text">
                <icon :src="exitIcon"/>
                退出登录
            </el-button>
        </div>
    </div>
</template>

<script>
    import {getUserInfo, logout} from "../../../resource";
    import Icon from "../../../components/Icon";

    import bubbleIcon from '../../../assets/icon_bubble.png'
    import profileIcon from '../../../assets/icon_profile2.png'
    import exitIcon from '../../../assets/icon_exit.png'

    export default {
        name: "SidebarLayout",
        components: {Icon},
        created() {
            this.loading = true
            getUserInfo().then(userInfo => {
                this.name = userInfo.name
                this.stu_no = userInfo.stu_no


            }).then(() => {
                this.loading = false
            }, () => {
                this.loading = false
            })
        },
        data() {
            return {
                bubbleIcon, profileIcon, exitIcon,


                name: '',
                stu_no: '',
                loading: true
            }
        },
        methods: {
            logout() {
                logout().then(() => {
                    this.$message({
                        message: '退出成功',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 1000)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/variables";

    /*两边padding*/
    $sidebar-padding-width: 1em;

    .sidebar-layout {
        position: relative;
        box-sizing: border-box;
        min-height: 100vh;
        overflow: scroll;

        padding: {
            /*为顶部关闭按钮预留空间*/
            top: $top-bar-height;
            /*为底部注销按钮预留空间*/
            bottom: 3em;

            left: $sidebar-padding-width;
            right: $sidebar-padding-width;
        }
        .avatar-container {
            text-align: center;
            padding: 2em 0;

            img {
                height: 50px;
            }
        }

        .info-container {
            p {
                text-align: center;
            }
        }

        .logout-container {
            box-sizing: border-box;
            padding: 0 $sidebar-padding-width;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: center;
        }

    }
</style>
<style lang="scss">
    .sidebar-layout {

        .el-menu-item, .el-menu {
            color: inherit;
            background-color: transparent;
        }

        .el-menu {
            text-align: center;
            border-right-width: 0;
        }

        .el-menu-item {
            font-size: 1em;
        }

        .el-menu-item:focus, .el-menu-item:hover {
            outline: 0;
            background-color: rgba(50, 50, 50, .1) !important;
        }
        .el-button {
            font-size: 1em;
            color: inherit;
        }
    }
</style> 