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
                router
                default-active="1">
            <el-menu-item index="/work">
                <i class="el-icon-tickets"></i>
                <span slot="title">作业情况</span>
            </el-menu-item>
            <el-menu-item index="/process">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">招新进程</span>
            </el-menu-item>
        </el-menu>
        <div class="logout-container">
            <el-button type="primary" class="el-icon-circle-close">退出登录</el-button>
        </div>
    </div>
</template>

<script>
    import {getUserInfo} from "../../../resource";

    export default {
        name: "SidebarLayout",
        created() {
            this.loading = true
            getUserInfo().then(userInfo => {
                this.name = userInfo.name
                this.stu_no = userInfo.stu_no
            }).finally(() => {
                this.loading = false
            })
        },
        data() {
            return {
                name: '',
                stu_no: '',
                loading: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/variables";

    .sidebar-layout {

        position: relative;
        box-sizing: border-box;
        min-height: 100vh;

        padding: {
            /*为顶部关闭按钮预留空间*/
            top: $top-bar-height;
            /*为底部注销按钮预留空间*/
            bottom: 3em;
        }
        .avatar-container {
            text-align: center;

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
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: right;
        }
    }
</style>