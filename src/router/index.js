import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/components/layout.vue'
import childLayout from '@/components/childLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/tab/index'
    },
    {
      path: '/tab',
      component: layout,
      children: [{
        path: 'index',
        name: 'index',
        component: () => import('../views/index.vue')
      }, {
        path: 'kefu',
        name: 'kefu',
        component: () => import('../views/kefu.vue')
      }, {
        path: 'apply',
        name: 'apply',
        component: () => import('../views/apply/index.vue')
      }, {
        path: 'team',
        name: 'team',
        component: () => import('../views/team.vue')
      }, {
        path: 'user',
        name: 'user',
        component: () => import('../views/user.vue')
      }]
    },
    {
      path: '/subpage',
      component: childLayout,
      children: [{
        path: 'share',
        name: 'share',
        component: () => import('../views/home/share.vue'),
        meta: {
          title: '分享'
        }
      },
      {
        path: 'sign',
        name: 'sign',
        component: () => import('../views/home/sign.vue'),
        meta: {
          title: '签到有礼'
        }

      },

      {
        path: 'recharge',
        name: 'recharge',
        component: () => import('../views/home/recharge.vue'),
        meta: {
          title: '充值',
          rightInfo: {
            name: '记录',
            path: '/subpage/rechargeList'
          }
        }

      },
      {
        path: 'rechargeList',
        name: 'rechargeList',
        component: () => import('../views/home/rechargeList.vue'),
        meta: {
          title: '充值记录',
        }
      }]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    }
  ]
})

export default router
