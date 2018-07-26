<template>
    <div class="work">
        <app-bar>
            <el-select :value="curGroup" @change="handleGroupChange" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.code"
                        :label="item.name"
                        :value="item.code">
                </el-option>
            </el-select>
        </app-bar>
        <main>
            <el-table
                    class="score-table"
                    :data="tableData">
                <el-table-column
                        align="center"
                        prop="name"
                        label="周次">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="score"
                        label="分数">
                </el-table-column>
            </el-table>
        </main>
    </div>
</template>

<script>
    import {getWorkExecution} from "../../resource";
    import {getGroupByCode} from "../../manifest";

    export default {
        name: "Work",
        created() {
            this.handleGroupChange()
        },
        data() {
            return {
                scores: [],
                
                options: [],
                curGroup: null

            }
        },
        computed: {
            tableData() {
                let res = []
                for (let i = 0; i < 4; i++) {
                    res[i] = {
                        name: `第${i+1}周作业`,
                        score: this.scores[i]||'暂无'
                    }
                }
                return res
            }
        },
        methods: {

            // 当groupCode改变时  需要更新作业表格以及options
            handleGroupChange(groupCode) {
                getWorkExecution().then(data => {
                    // 更新options
                    this.options = data.map(g => getGroupByCode(Math.floor(Number(g.intention.split(',')[0]) / 10)))
                    
                    // groupCode缺省值为第一项
                    groupCode = groupCode || (this.options[0] && this.options[0].code)
                    
                    // 更新表格
                    let curGroupData =data.find(g => Math.floor(Number(g.intention.split(',')[0]) / 10) === groupCode)
                    
                    this.scores = curGroupData?curGroupData.works.split(',').map(w => Number(w)):[]

                    // 更新curGroup
                    this.curGroup = groupCode

                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .work {
        color: white;
        
        .score-table{

            width: 80%;
            border-radius: 10px;
            background-color: transparent;
            border: 1px solid white;
            color: inherit;
            margin: 2em auto;
            
            
        }
    }
</style>
<style lang="scss">
    .work {
        .score-table.el-table{

            th,tr{
                background-color: transparent;
            }
            thead{
                color: inherit;
            }
        }

        .el-input__inner {
            background-color: transparent;
            border-width: 0;
            color: inherit;
            text-align: center;
        }

    }
</style>