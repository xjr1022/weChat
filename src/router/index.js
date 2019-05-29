import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path:'/login',
            component:Login,
            meta:{
                FooterBar:false
            }
        },
        {
            path:'/',
            redirect:'/login',
            meta:{
                FooterBar:false
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                FooterBar:false
            }
        },
    ]
})
