<template>
    <div>
        <app-bar>试用期作业</app-bar>
        <main>
            <ul v-if="workData.length>0">
                <li v-for="data in workData" :key="data.intention">
                    <p>{{matchedDepartmentName(data.intention)}}</p>
                    <ul v-if="data.works.length>0">
                        <li v-for="(work,i) in data.works" :key="i">名称：{{work.name}} 分数：{{work.score}}</li>
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
            getWorkExecution().then(data => {
                this.workData = data
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