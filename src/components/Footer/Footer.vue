<template>
    <div class="footer">

        <router-link to="/register" class="guide_item" :class="{on:'/home'== this.$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
        </router-link>

        <router-link to="/search" class="guide_item" :class="{on:'/search'== this.$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
            <span>搜索</span>
        </router-link>

        <router-link  to="/order" class="guide_item" :class="{on:'/order'== this.$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
            <span>订单</span>
        </router-link>

        <router-link  to="/profile" class="guide_item" :class="{on:'/profile'== this.$route.path}">

      <span class="item_icon">
        <i class="iconfont icon-zhu"></i>
      </span>
            <span>我的</span>

        </router-link>


    </div>
</template>

<script>
    /*
*修改人:徐嘉锐
*创建时间: 2019/3/27 20:56
*/

    export default {
        name: "Footer"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .footer  //footer
        border-top  solid 1px #eaeaea
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on
                color #FED06A
            span
                font-size 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size 1.8em

</style>
