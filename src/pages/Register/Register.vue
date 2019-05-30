<template>
    <div>
        <div class="body">
            <div class="header">微信号注册</div>
            <div class="section">
                <div class="container" v-bind:class="{'container-on':accountClass,'container-off':!accountClass}">
                    <div  class="content" >
                        <span class="title">手机号</span>
                        <input type="text" name="account" @focus="changeBorder(1)" v-model="phone">
                        <span class="error" v-show="error">账号格式不正确</span>
                    </div>
                </div>
                <div class="container" v-bind:class="{'container-on':passwordClass,'container-off':!passwordClass}">
                    <div class="content">
                        <span class="title">密码</span>
                        <input  type="password" name="passwd" @focus="changeBorder(2)">
                    </div>
                </div>
            </div>

            <div class="footer">
                <cube-button  >登录</cube-button>
            </div>

        </div>
    </div>
</template>

<script>
    /*
*修改人:徐嘉锐
*创建时间: 2019/5/29 20:30
*/

    export default {
        name: "Register",
        methods: {
            changeBorder(value) {
                this.accountClass = false
                this.passwordClass = false
                if (value == 1) {
                    this.accountClass = true
                } else {
                    this.error = false
                    this.passwordClass = true
                    //正则验证手机号码
                    var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                    //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
                    if(this.phone==''){
                        this.error = true

                    }else if(!reg.test(this.phone)){

                        this.error = true

                    }
                }
            },
            showPopup(refId) {
                const component = this.$refs[refId]
                component.show()
                setTimeout(() => {
                    component.hide()
                }, 2000)
            }
        },
        data() {
            return {
                accountClass: false,
                passwordClass: false,
                phone:'',
                error:false
            }
        },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .body
        margin 0 1rem
        height 100%

    .header
        margin-top 25%
        text-align left
        font-weight 700
        font-size 1.8rem
    .section
        margin-top 15%
        input
            outline none
        .container
            height 3.6rem
            display flex
            align-items center
            .content
                input
                    margin-left 1rem
                    width 10rem
                .title
                    display inline-block
                    width  3rem
                 .error
                    font-size 0.8rem
                    color red
                    margin-left 1rem
        .container-on
            border-bottom 1px  solid #00d314
        .container-off
            border-bottom 1px solid #dddddd
        .register
            margin-top 2rem
    .footer
        margin-top 20%
</style>
