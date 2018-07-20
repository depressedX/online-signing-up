<template>
    <div class="join">
        <app-bar>报名</app-bar>
        <main>
            <el-row style="margin: .5em">
                <el-alert
                        :closable="false"
                        title="团队事业群不在软件园校区纳新！请软件园同学不要误报"
                        type="info">
                </el-alert>
            </el-row>
            <el-row style="margin: .5em" v-if="this.deadlineFormatted">
                <el-alert
                        :closable="false"
                        :title="`报名截止至：${deadlineFormatted}`"
                        type="info">
                </el-alert>
            </el-row>
            <el-form ref="form" :rules="rules" :model="form" label-width="80px" label-position="left">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-switch
                            v-model="form.sex"
                            active-text="男"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            inactive-text="女">
                    </el-switch>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input v-model="form.stu_no" disabled></el-input>
                </el-form-item>
                <el-form-item label="校区" prop="campus">
                    <el-select v-model="form.campus" placeholder="选择校区">
                        <el-option
                                v-for="campus in campusOptions"
                                :key="campus.value"
                                :label="campus.label"
                                :value="campus.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-row>
                    <el-col :span="12">
                        <el-form-item error="" label="学院" prop="academy">
                            <el-input v-model="form.academy"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="家乡" prop="from">
                            <el-input v-model="form.from"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="我想加入" prop="intention">
                    <el-cascader
                            expand-trigger="hover"
                            :options="intentionCascaderOptions"
                            v-model="form.intention">
                    </el-cascader>
                </el-form-item>
                <el-form-item>
                    <el-cascader
                    :disabled="form.intention?false:true"
                    expand-trigger="hover"
                    :options="secondIntentionCascaderOptions"
                    v-model="form.intention2">
                    </el-cascader>
                </el-form-item>
                <el-form-item label="描述一下可爱的自己吧！" class="form__introduction">
                    <el-input type="textarea" v-model="form.introduction"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="form.tel"></el-input>
                </el-form-item>
                <el-form-item label="QQ">
                    <el-input v-model="form.qq"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :disabled="submiting">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>

<script>
    import {groups, departments, campus} from "../../manifest";
    import {getForm, getSigningUpDeadline, getUserInfo, submitForm, updateUserInfo} from "../../resource";

    const intentionCascaderOptions = groups.map(group => ({
        value: group.code,
        label: group.name,
        children: departments
            .filter(department => Math.floor(department.code / 10) === group.code)
            .map(department => ({
                value: department.code,
                label: department.name
            }))
    }))

    const campusOptions = campus.map(campus => ({
        value: campus.code,
        label: campus.name
    }))

    export default {
        name: "Join",
        created() {
            Promise.all([getUserInfo(), getForm()]).then(r => {
                let t = this.data2Form(r[0], r[1])
                Object.keys(this.form).forEach(key => {
                    t[key] !== null && t[key] !== undefined && (this.form[key] = t[key])
                })
            })

            getSigningUpDeadline().then(t => {
                this.deadline = new Date(t)
            })
        },
        data() {
            return {
                intentionCascaderOptions,
                campusOptions,

                submiting: false,

                deadline: null,

                form: {
                    name: '',
                    sex: '',
                    stu_no: '',
                    campus: undefined,
                    academy: '',
                    from: '',
                    tel: '',
                    qq: '',

                    intention: undefined,
                    intention2: undefined,
                    introduction: ''

                },

                rules: {
                    campus: [
                        {required: true, message: '请选择校区', trigger: 'blur'}
                    ],
                    academy: [
                        {required: true, message: '请选择学院', trigger: 'blur'}
                    ],
                    from: [
                        {required: true, message: '家乡', trigger: 'blur'}
                    ],
                    intention: [
                        {required: true, message: '请选择意愿部门', trigger: 'blur'}
                    ],
                }
            }
        },
        computed: {
            deadlineFormatted() {
                let t = this.deadline
                return t ? `${t.getMonth() + 1}月${t.getDate()}日` : null
            },

            secondIntentionCascaderOptions() {
                if (!this.form.intention) {
                    return []
                }
                return this.intentionCascaderOptions.map(group => (
                        group.value === this.form.intention[0] ?
                            {
                                value: group.value,
                                label: group.label,
                                children: group.children.filter(o => o.value !== this.form.intention[1])
                            } : group
                    )
                )
            }
        },
        methods: {
            onSubmit() {
                this.submiting = true

                let {userData, joinData} = this.form2Data(this.form)

                // 有空加个验证  是否修改过个人信息  现在先不验证了
                this.$refs.form.validate().then(() =>
                    updateUserInfo(userData)
                        .then(submitForm.bind(undefined, joinData))
                        .then(() => {
                            alert('提交成功')
                        })
                ).finally(() => {
                    this.submiting = false
                })
            },
            data2Form(userData, joinData) {
                userData.campus = Number(userData.campus)
                userData.sex = userData.sex === '男' ? true : false //true男  false女
                joinData.intention = joinData.intention &&
                    [Math.floor(joinData.intention / 10), Number(joinData.intention)]
                joinData.intention2 = joinData.intention2 &&
                    [Math.floor(joinData.intention2 / 10), Number(joinData.intention2)]
                return Object.assign({}, userData, joinData)
            },
            form2Data(form) {
                let userData = {}, joinData = {};

                (['name', 'sex', 'stu_no', 'campus', 'academy', 'from', 'tel', 'qq']).forEach(key => {
                    userData[key] = form[key]
                })
                userData.campus = String(userData.campus)
                userData.sex = userData.sex ? '男' : '女' //true男  false女

                joinData = {
                    intention: form.intention && String(form.intention[1]),
                    intention2: form.intention2 && String(form.intention2[1]),
                    introduction: form.introduction
                }

                return {
                    userData,
                    joinData
                }
            }
        }
    }
</script>

<style scoped>

</style>
<style lang="scss">
    .join {
        .form__introduction {
            .el-form-item__label {
                float: none;
                width: 100% !important;
            }
        }
    }
</style> 