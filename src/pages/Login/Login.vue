<template>
    <div id="app">

        <div class="body">
            <div class="header">微信号/QQ/邮箱登录</div>
            <div class="section">
                <div class="container" v-bind:class="{'container-on':accountClass,'container-off':!accountClass}">
                    <div  class="content" >
                        <span>帐号</span>
                        <input type="text" name="account" @focus="changeBorder(1)">
                    </div>
                </div>
                <div class="container" v-bind:class="{'container-on':passwordClass,'container-off':!passwordClass}">
                    <div class="content">
                        <span>密码</span>
                        <input  type="text" name="passwd" @focus="changeBorder(2)">
                    </div>
                </div>
                <div class="register">
                    <router-link to="/register">
                        <span class="register-span">注册</span>
                    </router-link>
                </div>
            </div>
            <div class="footer">
                <div class="button">登录</div>
            </div>
        </div>
    </div>
</template>

<script>

    import { requerLogin } from '../../api/index'
    export default {
        name: 'app',
        methods: {
            changeBorder(value) {
                this.accountClass = false
                this.passwordClass = false
                if (value == 1) {
                    this.accountClass = true
                } else {
                    this.passwordClass = true
                }
            },
        },
        data() {
            return {
                accountClass: false,
                passwordClass: false,
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
            color #00b713
        .container
            height 3.6rem
            display flex
            align-items center
            .content
                input
                    margin-left 1rem
        .container-on
            border-bottom 1px  solid #00d314
        .container-off
            border-bottom 1px solid #dddddd
        .register
            margin-top 2rem
            .register-span
                color #155ccb
    .footer
        width 100%
        height 3.5rem
        background-color #00d314
        /*opacity:0.3;*/
        border-radius 0.3rem
        color white
        text-align center
        line-height 3.5rem
        margin-top 20%
</style>
