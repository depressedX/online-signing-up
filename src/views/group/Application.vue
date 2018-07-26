<template>
    <div class="group application">
        <div class="bg"></div>
        <app-bar>应用服务事业群</app-bar>
        <main>
            <my-summary :theme-color="summaryThemeColor">
                应用服务事业群下设产品运营部<br/>
                与内容运营部两个部门。<br/>
                为同学们提供生活、学习等方面的帮助。
            </my-summary>
            <my-section label="产品运营部" :theme-color="sectionThemeColor">
                产品运营部的任务包括：<br/>
                应用服务事业群的产品开发项目<br/>
                以及i山大的日常运维。<br/>
                在这里，<br/>
                你可以做催锅甲方，<br/>
                了解用户需求，<br/>
                创造高质量产品；<br/>
                在这里，<br/>
                你可以成为产品经理，<br/>
                用原型图构建产品蓝图，<br/>
                用奇思妙想改变山大生活，<br/>
                用满腔热血追赶互联网时代的脉搏。<br/>
                我们与四万两千名用户一起，<br/>
                期待你的无限可能。
            </my-section>
            <my-section label="内容运营部" :theme-color="sectionThemeColor">
                内容运营部的任务包括：<br/>
                承接应用服务事业群其他内容项目<br/>
                并且负责 Q小线和知道的日常运维。<br/>
                或许你可以成为山大网红运营人，<br/>
                为山大人带来一手校园资讯<br/>
                或许你可以见证山大TED的诞生，<br/>
                与大佬面对面交流思想；<br/>
                或许你可以基于QQ与知乎，<br/>
                致力成为山大人校园生活管家。<br/>
                我们的步伐不止于此，<br/>
                一切都已就位，<br/>
                就差一个你。
            </my-section>
            <my-summary :theme-color="summaryThemeColor">
                这里是脑洞的产出地、互动的集中营，<br/>
                你能感受到作为产品经理的乐趣，<br/>
                在这里<br/>
                你的协调沟通能力和思考能力<br/>
                都会润物细无声地得到提升，<br/>
                我们期待你<br/>
                带着潋滟眸光，欣然来此
            </my-summary>
        </main>
    </div>
</template>

<script>
    import MySummary from "./components/MySummary";
    import MySection from "./components/MySection";

    export default {
        name: "Application",
        components: {MySection, MySummary},
        data() {
            return {
                summaryThemeColor: 'rgba(214,135,164,.75)',
                sectionThemeColor: 'rgba(214,135,164,.75)'
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "common";

    .bg{
        background: url(../../assets/bg_application.jpg) ;
        background-size: cover;
        background-position-y: bottom;
    }
</style>
<style lang="scss">

</style>