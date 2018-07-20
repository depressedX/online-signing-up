<template>
    <div>
        <el-card class="login-container">
            <div style="text-align: center"><img class="avatar" src="../../assets/logo.png"/></div>
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item label="学号" prop="stu_no">
                    <el-input type="text" v-model="form.stu_no"/>
                </el-form-item>
                <el-form-item label="密码" prop="password" @keyup.enter.native="submit">
                    <el-input type="password" v-model="form.password"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :disabled="submitting" @click="submit">
                        <i :class="[submitting?'el-icon-loading':'']"/>{{submitting?'':'登陆'}}
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {login} from "../../resource";

    export default {
        name: "Login",
        created() {
        },
        data() {
            return {
                submitting: false,
                form: {
                    stu_no: '',
                    password: ''
                },
                rules: {
                    stu_no: [{required: true}],
                    password: [{required: true}]
                }

            }
        },
        methods: {
            submit() {
                this.submitting = true

                let form = this.form
                this.$refs.form.validate()
                    .then(() => login(form.stu_no, form.password).then(() => {
                        this.$message('登陆成功 即将跳转');
                        this.$router.push('/')
                    }, e => {
                        this.$message('登录失败 error:' + e.message);
                    }))
                    .finally(() => {
                        this.submitting = false
                    })
            },
            test(){
                alert('df')
            }
        }
    }
</script>

<style scoped lang="scss">
    .login-container {
        width: 275px;
        max-width: 100%;
        margin: 50vh auto auto;
        transform: translateY(-50%);

        .avatar {
            width: 100px;
            height: 100px;
            object-fit: contain;
        }
    }
</style>