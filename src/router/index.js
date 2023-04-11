import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/components/layout.vue'
import childLayout from '@/components/childLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/tab/home'
    },
    {
      path: '/tab',
      component: layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/index.vue')
        },
        {
          path: 'kefu',
          name: 'kefu',
          component: () => import('../views/kefu/index.vue')
        },
        {
          path: 'apply',
          name: 'apply',
          component: () => import('../views/apply/index.vue')
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('../views/team/index.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('../views/user/index.vue')
        }
      ]
    },
    {
      path: '/subpage',
      component: childLayout,
      children: [
        {
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
            title: '充值记录'
          }
        },
        {
          path: 'peopleSafeguard',
          name: 'peopleSafeguard',
          component: () => import('../views/home/peopleSafeguard.vue'),
          meta: {
            title: '民生保障'
          }
        },
        {
          path: 'peopleInfomation',
          name: 'peopleInfomation',
          component: () => import('../views/home/peopleInfomation.vue'),
          meta: {
            title: '民生资讯'
          }
        },
        {
          path: 'helpCenter',
          name: 'helpCenter',
          component: () => import('../views/kefu/helpCenter.vue'),
          meta: {
            title: '帮助中心'
          }
        },
        {
          path: 'officialSop',
          name: 'officialSop',
          component: () => import('../views/kefu/officialSop.vue'),
          meta: {
            title: '官方社群'
          }
        },
        {
          path: 'myWallet',
          name: 'myWallet',
          component: () => import('../views/user/myWallet.vue'),
          meta: {
            title: '资产管理'
          }
        },
        {
          path: 'cashRecord',
          name: 'cashRecord',
          component: () => import('../views/user/cashRecord.vue'),
          meta: {
            title: '提现记录'
          }
        },
        {
          path: 'cashMoney',
          name: 'cashMoney',
          component: () => import('../views/user/cashMoney.vue'),
          meta: {
            title: '现金红包'
          }
        },
        {
          path: 'cash',
          name: 'cash',
          component: () => import('../views/user/cash.vue'),
          meta: {
            title: '提现',
            rightInfo: {
              name: '记录',
              path: '/subpage/cashRecord'
            }
          }
        },
      ]
    },
    {
      path: '/houseDetail',
      name: 'houseDetail',
      component: () => import('../views/apply/houseDetail.vue')
    },
    {
      path: '/fundDetail',
      name: 'fundDetail',
      component: () => import('../views/apply/fundDetail.vue')
    },
    {
      path: '/applyNow',
      name: 'applyNow',
      component: () => import('../views/apply/applyNow.vue'),
      meta: {
        title: '立即申请'
      }
    },
    {
      path: '/dcep',
      name: 'dcep',
      component: () => import('../views/user/dcep.vue'),
      meta: {
        title: '数字人民币'
      }
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
