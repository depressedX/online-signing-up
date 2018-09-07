<template>
    <div class="group yiban">
        <div class="bg"></div>
        <app-bar>易班工作站</app-bar>
        <main>
            <my-summary :theme-color="summaryThemeColor">
                易班工作站下设平台运营、生活服务<br/>
                以及公关推广三个部门。<br/>
                易班是教育教学、生活服务、<br/>
                文化娱乐的综合性互动平台。
            </my-summary>
            <my-section label="平台运营事业部" :theme-color="sectionThemeColor">
                在这里，<br/>
                你将参与管理运营整个微社区，<br/>
                与用户“直接接触”；<br/>
                你还将帮助进行大学生思政教育的专题，<br/>
                并与学生在线其他各个部门合作，<br/>
                甚至还可以实现课程的<br/>
                在线学习、答疑、讨论等功能，<br/>
                并为其他部门的内容提供发布平台。
            </my-section>
            <my-section label="生活服务事业部" :theme-color="sectionThemeColor">
                在这里，<br/>
                你将负责易班网和APP上<br/>
                应用的开发和推广，<br/>
                还可以研究你自己的应用；<br/>
                你还将可以通过现有应用——<br/>
                21天打卡、拼车、抢票等功能<br/>
                影响成千上万的山大人，<br/>
                并可以通过表白墙<br/>
                帮助他们发现许多有意思的事。
            </my-section>
            <my-section label="公关推广事业部" :theme-color="sectionThemeColor">
                在这里，<br/>
                你不仅能够让你的想法变为现实，<br/>
                来推广易班，<br/>
                还能有机会与校内学生组织和社团交接，<br/>
                帮助你形成一个“强大的关系网络”，<br/>
                甚至还会有机会进行活动的对接<br/>
                或参与易班全国性活动的策划，<br/>
                让你的大学生活不再仅仅局限于校园。
            </my-section>
            <my-summary :theme-color="summaryThemeColor">
                易班是集各种资料、网课、通知<br/>
                于一体并带有论坛特色的综合体<br/>
                各部门负责板块不同，但却“浑然一体”<br/>
                一切只差“易”个你，<br/>
                一起加入易班吧！
            </my-summary>
        </main>
    </div>
</template>

<script>
    import MySummary from "./components/MySummary";
    import MySection from "./components/MySection";

    export default {
        name: "YiBan",
        components: {MySection, MySummary},
        data() {
            return {
                summaryThemeColor: 'rgba(120,186,197,.75)',
                sectionThemeColor: 'rgba(120,186,197,.75)'
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "common";

    .bg{
        background: url(../../assets/bg_yiban.jpg) ;
        background-size: cover;
        background-position-y: bottom;
    }
</style>