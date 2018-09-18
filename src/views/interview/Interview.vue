<template>
    <div class="interview">
        <app-bar>现场面试详情</app-bar>
        <section class="content">
            <p>洪家楼校区<br/>
                9月20日19:00-22:00<br/>
                公教楼306</p>
            <p>软件园校区<br/>
                9月15、16日19:00-22:00<br/>
                5区107、108</p>
            <p>中心校区<br/>
                9月20、21日19:00-22:00<br/>
                理综楼101</p>
            <p>兴隆山校区<br/>
                9月20、21日19:00-22:00<br/>
                C座教学楼四层</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Interview"
    }
</script>

<style scoped lang="scss">
.interview{
    &>.content{
        position: relative;
        text-align: center;
        color: white;
        
        p{
            margin: 3em;
        }
    }
}
</style>