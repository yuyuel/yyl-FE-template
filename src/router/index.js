import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 在路由过多的情况下可以将路由进行拆分*/

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index')
  }
]

const createRouter = () => new Router({
  mode: 'history', // history模式
  // scrollBehavior: () => ({ y: 0 }), // 定位到之前的滑动位置
  routes: constantRouterMap
})

const router = createRouter()

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
