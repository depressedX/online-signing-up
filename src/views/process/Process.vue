<template>
    <div class="process">
        <app-bar>招新进程</app-bar>
        <main class="process-container">
            <div class="avatar-container"><img class="avatar" :src="logo"></div>
            <p class="name">{{name}}</p>
            <p class="stu_id">{{stu_id}}</p>
            <ul v-if="processData.length>0">
                <!--<li v-for="data in computedProcessData" :key="data.intention">{{data.intention}} {{data.stage}}</li>-->
                <li class="process-box" v-for="data in computedProcessData" :key="data.intention">
                    <div class="info">
                        <p>{{data.group}}</p>
                        <p>{{data.department}}</p>
                    </div>
                    <div class="result">{{data.stage}}</div>
                </li>
            </ul>
            <el-alert v-else title="暂无录取结果，请确认是否成功提交报名表" type="info"/>
        </main>
    </div>
</template>

<script>
    import {getProcess, getUserInfo} from "../../resource";
    import {departments, groups, processStage} from "../../manifest";

    import logo from '../../assets/logo.png'

    export default {
        name: "Process",
        created() {
            getUserInfo().then(data => {
                this.name = data.name
                this.stu_id = data.stu_id
            })
            getProcess().then(data => {
                this.processData = data
                this.processData.forEach(v => {
                    v.intention = Number(v.intention)
                    v.stage = Number(v.stage)
                })
            })
        },
        data() {
            return {
                logo,
                name: '',
                stu_id: '',
                processData: []
            }
        },
        computed: {
            // 将代码转换为string
            computedProcessData() {
                return this.processData.map(data => {
                    let stage = data.stage && this.getStageByCode(data.stage)
                    let group = data.intention && this.getGroupByCode(Math.floor(data.intention / 10))
                    let department = data.intention && this.getDepartmentByCode(data.intention)
                    return {
                        stage: stage && stage.message,
                        group: group && group.name,
                        department: department && department.name
                    }
                })
            }
        },
        methods: {
            getStageByCode: code => processStage.find(s => s.code === code),
            getDepartmentByCode: code => departments.find(s => s.code === code),
            getGroupByCode: code => groups.find(s => s.code === code)
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";

    .process-container {
        position: relative;
        width: 275px;
        max-width: 100%;
        margin: auto;

        .avatar-container {
            text-align: center;
            padding-top: 50px;
        }
        .avatar {
            width: 64%;
        }

        .name, .stu_id {
            text-align: center;
        }

    }

    .process-box {
        display: flex;
        border: 2px solid white;
        flex-wrap: nowrap;
        margin-bottom: 20px;
        border-radius: 5px;
        text-align: center;
        align-items: center;
        font-size: .8em;
        padding: .5em 1em;

        .info, .result {
            flex-basis: 0;
        }
        .info {
            flex-grow: 6;
        }
        .result {
            flex-grow: 4;
        }
    }
</style>