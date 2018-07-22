<template>
        <div class="login-container">
            <div style="text-align: center;margin-bottom: 50px"><img class="avatar" src="../../assets/logo.jpg"/></div>
            <el-form :model="form" :rules="rules" ref="form">
                <el-form-item prop="stu_no">
                    <el-input type="text" v-model="form.stu_no" placeholder="学号">
                        <img style="width: 20px;height: 100%;object-fit: contain"
                             src="../../assets/icon_profile.png"
                             slot="prefix"/></el-input>
                </el-form-item>
                <el-form-item prop="password" @keyup.enter.native="submit" style="margin-bottom: 75px">
                    <el-input type="password" v-model="form.password" placeholder="密码">
                            <img style="width: 20px;height: 100%;object-fit: contain" src="../../assets/icon_circle.png" slot="prefix"/>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :disabled="submitting" @click="submit" style="width: 100%">
                        <i :class="[submitting?'el-icon-loading':'']"/>{{submitting?'':'登陆'}}
                    </el-button>
                </el-form-item>
            </el-form>
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
                    stu_no: [{required: true,message:'请输入学号'}],
                    password: [{required: true,message:'请输入密码'}]
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
            test() {
                alert('df')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../style/variables";
    
    .login-container {
        width: 275px;
        max-width: 100%;
        margin: $top-bar-height auto 0 auto;
        
        .avatar {
            width: 100px;
            height: 100px;
            object-fit: contain;
            border-radius: 50%;
        }
    }
</style>