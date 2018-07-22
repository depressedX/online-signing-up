<template>
    <div class="main-layout">
        <router-link class="join-us-button" to="/join">加入我们</router-link>
        <div class="groups">
            <div class="row row-2">
                <router-link
                        class="group-button"
                        to="/group?id=1">
                    <div class="text">技术工程<br/>事业群</div>
                </router-link>
                <router-link
                        class="group-button"
                        to="/group?id=3">
                    <div class="text">网络媒体<br/>事业群</div>
                </router-link>
            </div>
            <div class="row row-1">
                <router-link
                        class="group-button"
                        to="/group?id=5">
                    <div class="text">易班运营<br/>中心</div>
                </router-link>
            </div>
            <div class="row row-2">
                <router-link
                        class="group-button"
                        to="/group?id=2">
                    <div class="text">应用服务<br/>事业群</div>
                </router-link>
                <router-link
                        class="group-button"
                        to="/group?id=4">
                    <div class="text">团队发展<br/>事业群</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {groups} from "../../../manifest";

    export default {
        name: "MainLayout",
        data() {
            return {
                groups
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/variables.scss";

    .main-layout {
        width: 295px;
        margin: auto;
        font-size: 18px;
        color: black;

        padding: {
            top: $top-bar-height;
        }


        .join-us-button {
            text-align: center;
            display: block;
            width: 100%;
            border-radius: 10px;
            background-color: #7d7d7d;
            padding: 1em 0;

            margin-bottom: 100px;
        }

    ;

    }
    .groups{
        padding: 0 .75em;

        & > .row {
        }
        & > .row-1{
            text-align: center;
        }
        & > .row-2{
            display: flex;
            justify-content: space-between;
            text-align: center;
        }

        .group-button {
            background-color: #7d7d7d;
            width: 5em;
            height: 5em;
            transform: rotateZ(45deg);
            display: inline-block;
            border-radius: 10px;

            .text {
                transform: translateY(25px) rotateZ(-45deg);
                text-align: center;
            }
        }
    }
</style>