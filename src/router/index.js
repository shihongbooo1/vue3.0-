import Vue from 'vue'
import Router from 'vue-router'
const layout = () => import('@/components/layout')
// 登录页
const reload = () => import('@/components/reLoad')

const main = () => import('@/views/index')
Vue.use(Router)
// 固定的路由表
export const fixedRouter = [{
    path: '',
    component: reload,
    hidden: true
  },
  {
    path: '',
    component: layout, //整体页面的布局(包含左侧菜单跟主内容区域)
    children: [{
      path: 'main',
      component: main,
      meta: {
        title: '首页', //菜单名称
        // roles: ['user', 'admin'], //当前菜单哪些角色可以看到
        icon: 'el-icon-info' //菜单左侧的icon图标
      }
    }]
  },
]
// 需要权限判断展示的路由
export const permissionRouter = [
  {
    path: "/order",
    component: layout,
    meta: {
      icon: "el-icon-success",
      roles: ['admin', 'user']
    },
    children: [
      {
        path: "index",
        name: "Order",
        component: () => import('../views/order.vue'),
        meta: {
          title: "订单列表",
          icon: "el-icon-goods"
        }
      }
    ]
  },
  {
    path: "/system",
    component: layout,
    meta: {
      icon: "el-icon-success",
      roles: ['admin']
    },
    children: [
      {
        path: "index",
        name: "System",
        component: () => import('../views/system.vue'),
        meta: {
          title: "系统设置",
          icon: "el-icon-goods"
        }
      }
    ]
  }
]


export default new Router({
  routes: fixedRouter

})
