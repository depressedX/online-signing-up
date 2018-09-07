<template>
    <div class="main-layout">
        <div class="groups">
            <div class="row row-2">
                <router-link
                        class="group-button group-button-1"
                        to="/group/tech">
                    <div class="text">技术工程<br/>事业群</div>
                </router-link>
                <router-link
                        class="group-button group-button-2"
                        to="/group/media">
                    <div class="text">网络媒体<br/>事业群</div>
                </router-link>
            </div>
            <div class="row row-1">
                <router-link
                        class="group-button group-button-3"
                        to="/group/yiban">
                    <div class="text">易班<br/>工作站</div>
                </router-link>
            </div>
            <div class="row row-2">
                <router-link
                        class="group-button group-button-4"
                        to="/group/application">
                    <div class="text">应用服务<br/>事业群</div>
                </router-link>
                <router-link
                        class="group-button group-button-5"
                        to="/group/team">
                    <div class="text">团队发展<br/>事业群</div>
                </router-link>
            </div>
        </div>
        <router-link class="join-us-button" to="/join"><div style="position: relative">加入我们</div></router-link>
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
        /*height: 100%;*/
        /*overflow: scroll;*/
        width: 325px;
        margin: auto;
        font-size: 18px;

        padding: {
            top: $top-bar-height;
        }

        .join-us-button {
            text-align: center;
            display: block;
            width: 100%;
            border-radius: 20px;
            padding: 1em 0;

            margin: 50px 0;
            
            background-image: url("../../../assets/bg_join_us.png");
            background-size: cover;
            position: relative;
            
            &:before{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0px;
                top:0px;
                background-color: rgba(50,50,50,.2);
                border-radius: 20px;
            }
        }

    ;

    }

    .groups {
        padding: .75em;

        & > .row {
        }
        & > .row-1 {
            text-align: center;
        }
        & > .row-2 {
            display: flex;
            justify-content: space-between;
            text-align: center;
        }

        .group-button {
            background-color: #7d7d7d;
            width: 6em;
            height: 6em;
            transform: rotateZ(45deg);
            display: inline-block;
            border-radius: 20px;
            position: relative;
            overflow: hidden;

            .text {
                transform: translateY(-50%) rotateZ(-45deg);
                text-align: center;
                position: relative;
                top: 50%;
            }

            &:before, &:after {

                content: "";
                width: 128%;
                height: 128%;
                display: block;
                position: absolute;
                left: -15%;
                top: -15%;
                transform: rotateZ(-45deg);
            }
            &:before {
                z-index: -2;
            }
            &:after {
                z-index: -1;
                background-color: rgba(50, 50, 50, .2);
            }
        }

        @for $i from 1 through 5 {
            .group-button-#{$i} {
                &:before {
                    background-image: url("../../../assets/ret_#{$i}.png");
                    background-size: cover;
                }
            }
        }

    }
</style>