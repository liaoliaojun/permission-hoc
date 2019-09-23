import Vue from 'vue'
import Router from 'vue-router'
import Hoc from './hoc'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hoc({
        user: () => import('@/views/user.vue'),
        admin: () => import('@/views/admin.vue'),
        superadmin: () => import('@/views/superadmin.vue'),
      }),
      meta: {
        // 是否验证
        noValidated: true,
        
        role: ['user', 'admin', 'superadmin'],
      },
    },
  ]
})


router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('app_role')
  const name = to.name
  const {noValidated, roles} = to.meta

  if (noValidated) {
    next()
  }

  // 未登录
  else if (name === 'home' && !roles) {
    next(false)
  }

  // 通过角色验证
  else if (roles && roles.findIndex(item => item === role) !== -1) {
    next()
  }

  // 已登录 未通过角色验证
  else {
    next({name: 'home'})
  }
})

export default router
