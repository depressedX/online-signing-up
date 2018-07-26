<template>
    <div class="group team">
        <div class="bg"></div>
        <app-bar>团队发展事业群</app-bar>
        <main>
            <my-summary :theme-color="summaryThemeColor">
                团队发展事业群下设人力资源、<br/>
                采购、运营和财务四个部门。<br/>
                这里不仅强调部门的工作成果，<br/>
                更强调团结一致以达到学生在线的整体发展。
            </my-summary>
            <my-section label="人力资源部门" :theme-color="sectionThemeColor">
                这里主要负责学生在线的<br/>
                人员的调度与活动的承办，<br/>
                是协助各个事业群<br/>
                主持操办学生在线大小活动的一把好手。<br/>
                除此之外，<br/>
                它还能够对工作情况和程序<br/>
                进行及时的总结与评价，<br/>
                以便改进团队<br/>
                乃至整个学生在线的管理工作。<br/>
                如果你富有领导魄力、<br/>
                乐于组织策划、<br/>
                极具奇思妙想，<br/>
                那么人力资源部门，<br/>
                你一定不能错过。
            </my-section>
            <my-section label="采购部门" :theme-color="sectionThemeColor">
                这里主要负责协助各单位<br/>
                精准地采购与物资的清算。<br/>
                一次次缜密的预算、<br/>
                一次次认真的结算，<br/>
                换来的是<br/>
                对所采购物资质量、数量的完美匹配。<br/>
                无论晴空万里，<br/>
                亦或阴雨连绵，<br/>
                都全然不惧，<br/>
                总能为各部门提供坚实的物资保障。<br/>
                不限性别，<br/>
                只要你具有认真踏实的态度、<br/>
                充满热情、享受计划与采购的乐趣，<br/>
                采购部门都欢迎你的加入。
            </my-section>
            <my-section label="运营部门" :theme-color="sectionThemeColor">
                这里主要负责学生在线的<br/>
                办公室的日常工作与运营维护。<br/>
                处理着平凡但必不可少的<br/>
                值班值日等大小事务。<br/>
                不仅如此，<br/>
                它还负责组织各部门的信息传递工作，<br/>
                保证各部门信息沟通顺畅，<br/>
                使工作流程能够更加明晰，<br/>
                终而协助实现学生在线共同的战略目标。<br/>
                如果你善于沟通，<br/>
                并想尝试做好一个办公室的管理者，<br/>
                那就加入运营部门吧。
            </my-section>
            <my-section label="财务部门" :theme-color="sectionThemeColor">
                这里主要负责学生在线的<br/>
                后方资金保障与精打细算。<br/>
                每月根据按劳分配的原则，<br/>
                负责薪资的发放工作。<br/>
                平日里也负责着学生在线<br/>
                日常的报销、申岗等工作。<br/>
                多数情况与数字、系统、<br/>
                老师同事们打交道的机会会更多一些，<br/>
                因此期待着细心、喜爱学习新兴事物<br/>
                又善于沟通的你来掌控财务全局。
            </my-section>
            <my-summary :theme-color="summaryThemeColor">
                初次见面，想说的太多，<br/>
                却也希望你能够来到团队发展事业群<br/>
                亲自挖掘我们为你暗藏的惊喜，<br/>
                同我们一起为学生在线<br/>
                更加蓬勃发展而战斗，<br/>
                同我们一起持之以恒地<br/>
                为学生在线的建设出谋划策，贡献力量！
            </my-summary>
        </main>
    </div>
</template>

<script>
    import MySummary from "./components/MySummary";
    import MySection from "./components/MySection";

    export default {
        name: "Team",
        components: {MySection, MySummary},
        data() {
            return {
                summaryThemeColor: 'rgba(151,189,122,.75)',
                sectionThemeColor: 'rgba(151,189,122,.75)'
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "common";

    .bg{
        background: url(../../assets/bg_team.jpg) ;
        background-size: cover;
        background-position-y: bottom;
    }
</style>