import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/components/layout.vue'
import childLayout from '@/components/childLayout.vue'

import pinia from '../store/index'
import { useUserStore } from '../store/userInfo'
const userInfo = useUserStore(pinia) // 这里一定要把 pinia传入进去
console.log('userInfo', userInfo)

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
          path: 'aboutUs',
          name: 'aboutUs',
          component: () => import('../views/home/aboutUs.vue'),
          meta: {
            title: '关于我们'
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
        {
          path: 'zhuanzhang',
          name: 'zhuanzhang',
          component: () => import('../views/user/zhuanzhang.vue'),
          meta: {
            title: '转账'
          }
        },
        {
          path: 'properties',
          name: 'properties',
          component: () => import('../views/user/properties.vue'),
          meta: {
            title: '产权办理'
          }
        },
        {
          path: 'policy',
          name: 'policy',
          component: () => import('../views/user/policy.vue'),
          meta: {
            title: '政策文件'
          }
        },
        {
          path: 'myApply',
          name: 'myApply',
          component: () => import('../views/user/myApply.vue'),
          meta: {
            title: '我的申请'
          }
        },
        {
          path: 'certification',
          name: 'certification',
          component: () => import('../views/user/certification.vue'),
          meta: {
            title: '实名认证'
          }
        },
        {
          path: 'addCard',
          name: 'addCard',
          component: () => import('../views/user/addCard.vue'),
          meta: {
            title: '绑定银行卡'
          }
        },
        {
          path: 'uploadCertificate',
          name: 'uploadCertificate',
          component: () => import('../views/user/uploadCertificate.vue'),
          meta: {
            title: '身份验证'
          }
        }
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
      path: '/myWallet',
      name: 'myWallet',
      component: () => import('../views/user/myWallet.vue')
    },

    {
      path: '/editPassword',
      name: 'editPassword',
      component: () => import('../views/user/editPassword.vue')
    },
    {
      path: '/editPayPassword',
      name: 'editPayPassword',
      component: () => import('../views/user/editPayPassword.vue')
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: () => import('../views/user/addAddress.vue')
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
