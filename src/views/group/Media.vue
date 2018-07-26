<template>
    <div class="group media">
        <div class="bg"></div>
        <app-bar>网络媒体事业群</app-bar>
        <main>
            <my-summary :theme-color="summaryThemeColor">
                网络媒体事业群下设媒体运营中心、<br/>
                新闻中心、图视中心、有盐、<br/>
                小树林日报五个部门。<br/>
                为热爱文字的你提供展示的平台。
            </my-summary>
            <my-section label="媒体运营中心" :theme-color="sectionThemeColor">
                我们是媒体运营中心。<br/>
                你看过西游记吗？<br/>
                妖魔鬼怪七十二变就是我们！<br/>
                千奇百怪的排版风格，<br/>
                不落窠臼的艺术审美，<br/>
                加上设计策划的技能，<br/>
                再送你10000+粉丝，<br/>
                我看，你就是<br/>
                新媒体取经路上的明日之星！
            </my-section>
            <my-section label="新闻中心" :theme-color="sectionThemeColor">
                我们是新闻中心。<br/>
                新鲜、真实<br/>
                ——我们就是网媒“小鲜肉”<br/>
                铁肩道义、妙笔文章<br/>
                将热点放在解剖台上，<br/>
                将事实放在显微镜下。<br/>
                你是否有追踪热点的敏锐？<br/>
                你是否有摄影写作的热情？<br/>
                如果有，别犹豫！<br/>
                你就是新闻中心需要的小鲜肉！
            </my-section>
            <my-section label="图视中心" :theme-color="sectionThemeColor">
                我们是图视中心，<br/>
                致力于打造山东大学<br/>
                青年视觉艺术平台。<br/>
                我们热爱摄影，<br/>
                用相机聚焦校园与生活，<br/>
                采撷最精彩的瞬间，<br/>
                用镜头发现新视界；<br/>
                我们热爱手绘，<br/>
                用画笔创造一个画纸上的世界，<br/>
                调配生活的色彩，<br/>
                描绘心中独一无二的画面；<br/>
                我们热爱视频制作，<br/>
                用摄像机记录精彩的成长故事，<br/>
                用专业的镜头语言<br/>
                为你讲述故事背后的故事。<br/>
                那个正在摁下快门的你，<br/>
                那个正在执笔作画的你，<br/>
                那个正在剪辑视频的你，<br/>
                正是我们一路走来<br/>
                一直寻寻觅觅的你，<br/>
                欢迎加入图视中心的你。
            </my-section>
            <my-section label="有盐" :theme-color="sectionThemeColor">
                我们是有盐，<br/>
                是学生在线山中阅工作室<br/>
                出品的线上生活杂志。<br/>
                调味品在一道菜中占的比重极小，<br/>
                但它对整道菜的味道<br/>
                却有着必不可缺的作用。<br/>
                生活太淡，不妨加点盐。<br/>
                我们是有盐，<br/>
                茫茫人海之中，<br/>
                我们看上去那么渺小，<br/>
                而我们致力成为生活的调料，<br/>
                传播有滋味的生活方式。<br/>
                简短而有力的文章内容，<br/>
                观点同样追求精致与深刻，<br/>
                如同提纯过的精盐，<br/>
                健康高效地调出生活的滋味。<br/>
                我们是有盐，<br/>
                欢迎你和我们一起<br/>
                创造有滋味的生活。
            </my-section>
            <my-section label="小树林日报" :theme-color="sectionThemeColor">
                我们是小树林日报，<br/>
                致力于打造山东大学<br/>
                最有思想性的专业媒体。<br/>
                这里不仅有好故事，<br/>
                还有深度与思考。<br/>
                我们聚焦校园身边事，<br/>
                用最有深度的视角探讨校园新闻；<br/>
                捕捉时事热点，<br/>
                发出山大人最客观理性的声音；<br/>
                用心感受生活，<br/>
                用最贴近大学生生活的语言<br/>
                触碰他们的内心；<br/>
                关注身边特别的人们，<br/>
                讲一讲他们身上与众不同的故事。<br/>
                如果你热爱文字，<br/>
                更热爱文字所承载的思考和深度，<br/>
                那么欢迎你加入小树林日报，<br/>
                让我们一起为山大人<br/>
                发出最理性的声音。
            </my-section>
            <my-summary :theme-color="summaryThemeColor">
                笔执千斤重，<br/>
                能写人间几多欢喜几多愁；<br/>
                才思如泉涌，<br/>
                挥洒成文，<br/>
                人间不得只应天上有。<br/>
                如此能人异士，<br/>
                我们非你不可。
            </my-summary>
        </main>
    </div>
</template>

<script>
    import MySummary from "./components/MySummary";
    import MySection from "./components/MySection";

    export default {
        name: "Media",
        components: {MySection, MySummary},
        data() {
            return {
                summaryThemeColor: 'rgba(222,182,149,.75)',
                sectionThemeColor: 'rgba(222,189,149,.75)'
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "common";

    .bg{
        background: url(../../assets/bg_media.jpg) ;
        background-size: cover;
        background-position-y: bottom;
    }
</style>