<template>
    <div class="group yiban">
        <div class="bg"></div>
        <app-bar>易班工作站</app-bar>
        <main>
            <my-summary :theme-color="summaryThemeColor">
                易班工作站下设平台运营、生活服务
                以及公关推广三个部门。
                易班是教育教学、生活服务、
                文化娱乐的综合性互动平台。
            </my-summary>
            <my-section label="平台运营" :theme-color="sectionThemeColor">
                在这里，
                你将参与管理运营整个微社区，
                与用户“直接接触”；
                你还将帮助进行大学生思政教育的专题，
                并与学生在线其他各个部门合作，
                甚至还可以实现课程的
                在线学习、答疑、讨论等功能，
                并为其他部门的内容提供发布平台。
            </my-section>
            <my-section label="生活服务" :theme-color="sectionThemeColor">
                在这里，
                你将负责易班网和APP上
                应用的开发和推广，
                还可以研究你自己的应用；
                你还将可以通过现有应用——
                21天打卡、拼车、抢票等功能
                影响成千上万的山大人，
                并可以通过表白墙
                帮助他们发现许多有意思的事。
            </my-section>
            <my-section label="公关推广" :theme-color="sectionThemeColor">
                在这里，
                你不仅能够让你的想法变为现实，
                来推广易班，
                还能有机会与校内学生组织和社团交接，
                帮助你形成一个“强大的关系网络”，
                甚至还会有机会进行活动的对接
                或参与易班全国性活动的策划，
                让你的大学生活不再仅仅局限于校园。
            </my-section>
            <my-summary :theme-color="summaryThemeColor">
                易班是集各种资料、网课、通知
                于一体并带有论坛特色的综合体
                各部门负责板块不同，但却“浑然一体”
                一切只差“易”个你，
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