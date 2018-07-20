<template>
    <div>
        <app-bar>试用期作业</app-bar>
        <main>
            <ul v-if="workData.length>0">
                <li v-for="group in workData" :key="group.intention">
                    <p>{{group.intention.map(d=>matchedDepartmentName(d)).join(',')}}</p>
                    <ul v-if="group.scores.length>0">
                        <li v-for="(score,idx) in group.scores" :key="idx">第{{idx+1}}次作业 分数：{{score}}</li>
                    </ul>
                    <el-alert v-else title="当前部门暂无作业" type="info"/>
                </li>
            </ul>
            <el-alert v-else title="暂无处在试用期的面试部门" type="info"/>
        </main>
    </div>
</template>

<script>
    import {getWorkExecution} from "../../resource";
    import {departments} from "../../manifest";

    export default {
        name: "Work",
        created() {
            getWorkExecution()
                .then(data => Array.isArray(data) ? data : [])
                .then(data => {
                    this.workData = data.map(group => ({
                        intention: group.intention.split(',').map(s => Number(s)),
                        scores: group.scores.split(',').map(s => Number(s))
                    }))
                })
        },
        data() {
            return {
                workData: [],
                departments

            }
        },
        methods: {
            matchedDepartmentName: code => departments.find(dd => dd.code === code)
        }
    }
</script>

<style scoped>

</style>