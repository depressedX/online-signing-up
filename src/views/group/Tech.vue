<template>
    <div class="group tech">
        <div class="bg"></div>
        <app-bar>技术工程事业群</app-bar>
        <main>
            <my-summary :theme-color="summaryThemeColor">
                技术工程事业群下设视觉设计组、<br/>
                Web开发组、移动终端组三个部门。<br/>
                为学生在线大大小小的项目和产品<br/>
                提供技术支持。
            </my-summary>
            <my-section label="视觉设计组" :theme-color="sectionThemeColor">
                这里是设计师的聚集地，<br/>
                主要负责应用PS、AI等软件进行<br/>
                线上网站、APP、游戏的<br/>
                视觉设计和交互设计，<br/>
                同时负责线下<br/>
                宣传物料、周边的设计工作。<br/>
                如果你爱时尚、爱创作、爱设计，<br/>
                欢迎你加入视觉设计组。
            </my-section>
            <my-section label="Web开发组" :theme-color="sectionThemeColor">
                这里专注培养程序猿。<br/>
                前端利用前端技术完成<br/>
                网站的编写或小程序的开发；<br/>
                后端利用多种语言和数据库实现<br/>
                网站后台研发、服务器的运维等。<br/>
                只要你具有基本的逻辑思维，<br/>
                喜欢尝试新东西、热爱折腾，<br/>
                Web开发组欢迎你的加入。
            </my-section>
            <my-section label="移动终端开发组" :theme-color="sectionThemeColor">
                这里是程序攻城狮的诞生地，<br/>
                主要负责移动APP的开发与维护，<br/>
                下设Android、iOS等几个方向。<br/>
                移动的技术人员需要兼备<br/>
                Web组的知识和移动端的技术。<br/>
                不仅可以参与APP的创作，<br/>
                还可以参与网站的开发。
            </my-section>
            <my-summary :theme-color="summaryThemeColor">
                来技术工程事业群，<br/>
                你可以感受到一个小小的点子<br/>
                孵化成一项成熟的产品的喜悦，<br/>
                以第一视角体验流水化作业，<br/>
                锻炼人际交往能力和团队配合能力。<br/>
                学生在线技术工程事业群<br/>
                欢迎你的加入。
            </my-summary>
        </main>
    </div>
</template>

<script>
    import MySummary from "./components/MySummary";
    import MySection from "./components/MySection";

    export default {
        name: "Tech",
        components: {MySection, MySummary},
        data() {
            return {
                summaryThemeColor: 'rgba(138,145,180,.75)',
                sectionThemeColor: 'rgba(138,145,180,.75)'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";

    .bg{
        background: url(../../assets/bg_tech.jpg) ;
        background-size: cover;
        background-position-y: bottom;
    }
</style>