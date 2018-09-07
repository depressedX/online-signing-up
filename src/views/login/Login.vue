<template>
    <div class="login-container">
        <div class="avatar-container"><img class="avatar" src="../../assets/logo.png"/></div>
        <el-form :model="form" :rules="rules" ref="form">
            <el-form-item prop="stu_no">
                <el-input type="text" v-model="form.stu_no" placeholder="学号">
                    <img style="width: 20px;height: 20px;object-fit: contain;vertical-align: middle"
                         src="../../assets/icon_profile.png"
                         slot="prefix"/></el-input>
            </el-form-item>
            <el-form-item prop="password" @keyup.enter.native="submit" style="margin-bottom: 75px">
                <el-input type="password" v-model="form.password" placeholder="教务密码">
                    <img style="width: 20px;height: 20px;object-fit: contain;vertical-align: middle" src="../../assets/icon_circle.png"
                         slot="prefix"/>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :disabled="submitting" @click="submit" style="width: 100%">
                    <i :class="[submitting?'el-icon-loading':'']"/>{{submitting?'':'登录'}}
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
                    stu_no: [{required: true, message: '请输入学号'}],
                    password: [{required: true, message: '请输入密码'}]
                }

            }
        },
        methods: {
            submit() {
                this.submitting = true

                let form = this.form
                this.$refs.form.validate()
                    .then(() => login(form.stu_no, form.password).then(() => {
                        this.$message('登录成功 即将跳转');
                        this.$router.push('/')
                    }, e => {
                        this.$message('登录失败 error:' + e.message);
                    }), e => {
                    })
                    .then(() => {
                        this.submitting = false
                    }, () => {
                        this.submitting = false
                    })
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
        position: relative;

        .avatar-container {
            text-align: center;
            padding-bottom: 50px;
            padding-top: 50px;
        }
        .avatar {
            width: 64%;
        }
    }
</style>
<style lang="scss">
    @import "../../style/variables";

    .login-container {

        input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
            color: white;
        }

        input:-moz-placeholder, textarea:-moz-placeholder {
            color: white;
        }

        input::-moz-placeholder, textarea::-moz-placeholder {
            color: white;
        }

        input:-ms-input-placeholder, textarea:-ms-input-placeholder {
            color: white;
        }

        .el-input__inner {
            color: white;
            border-left-width: 0;
            border-top-width: 0;
            border-right-width: 0;
            border-radius: 0;

            background-color: transparent;
        }

        /*重载按钮*/
        @include primary-button;
    }


</style> 