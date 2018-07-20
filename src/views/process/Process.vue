<template>
    <div>
        <app-bar>招新进程</app-bar>
        <main>
            <img v-if="avatar" :src="avatar">
            <p class="name">{{name}}</p>
            <ul v-if="processData.length>0">
                <li v-for="data in computedProcessData" :key="data.intention">{{data.intention}} {{data.stage}}</li>
            </ul>
            <el-alert v-else title="暂无纳新结果，请确认是否成功提交报名表" type="info"/>
        </main>
    </div>
</template>

<script>
    import {getProcess, getUserInfo} from "../../resource";
    import {departments, processStage} from "../../manifest";

    export default {
        name: "Process",
        created() {
            getUserInfo().then(data => {
                this.name = data.name
            })
            getProcess().then(data => {
                this.processData = data
                this.processData.forEach(v => {
                    v.intention = Number(v.intention)
                })
            })
        },
        data() {
            return {
                avatar: undefined,
                name: '',
                processData: []
            }
        },
        computed: {
            computedProcessData() {
                return this.processData.map(data => ({
                    stage: data.stage && this.matchedProcessStage(data.stage).message,
                    intention: data.intention && this.matchedIntention(data.intention).name
                }))
            }
        },
        methods: {
            matchedProcessStage: code => processStage.find(s => s.code === code),
            matchedIntention: code => departments.find(s => s.code === code)
        }
    }
</script>

<style scoped>

</style>