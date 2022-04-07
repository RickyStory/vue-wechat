import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Reg from '@/views/reg'
import Home from '@/views/home'
import Friends from '@/views/friends'
import Find from '@/views/find'
import Me from '@/views/me'
import Chat from '@/views/chat'
import More from '@/views/more'
import NewFriend from '@/views/new_friend'
import AddFriend from '@/views/add_friend'

const routes = [
    {
        path: '/',
        name: 'index',
        meta: {
          title:"首页"
        },
        component: Index
    },
    {
        path: '/login',
        name: 'login',
        meta: {
          title:"用户登录"
        },
        component: Login
    },
    {
        path: '/reg',
        name: 'reg',
        meta: {
            title:"注册账号"
        },
        component: Reg
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title:"消息"
        },
        component: Home
    },
    {
        path: '/friends',
        name: 'friends',
        meta: {
            title:"联系人"
        },
        component: Friends
    },
    {
        path: '/find',
        name: 'find',
        meta: {
            title:"发现"
        },
        component: Find
    },
    {
        path: '/me',
        name: 'me',
        meta: {
            title:"我"
        },
        component: Me
    },
    {
        path: '/chat',
        name: 'chat',
        meta: {
            title:"聊天"
        },
        component: Chat
    },
    {
        path: '/more',
        name: 'more',
        meta: {
            title:"更多资料"
        },
        component: More
    },
    {
        path: '/new_friend',
        name: 'new_friend',
        meta: {
            title:"新的朋友"
        },
        component: NewFriend
    },
    {
        path: '/add_friend',
        name: 'add_friend',
        meta: {
            title:"添加朋友"
        },
        component: AddFriend
    }
]

const index = createRouter({
    history: createWebHashHistory(),
    routes
})


// 登录之前做一个判断 ,判断它进入其它页面有没有先登录,
index.beforeEach((to, from, next) => {
    // 判断有没有登录
    const isLogin = !!localStorage.token;
    // 如果当前访问的是登录页面或者注册页面可以让它进入
    if (to.path === '/' || to.path === "/login" || to.path === "/reg") {
        next()
    } else {
        // 如果isLogin为true表示已经登录了;就让它正常进入就可以 ,如果没登录就让他进入登录页面
        isLogin ? next() : next('/login')
    }

})

export default index