// import service from '@/utils/server.js'
import {useUserStore} from '@/store/userInfo'
import { Toast, Dialog } from 'vant'
import API from './api'
import withoutLoginApi from './withoutLoginApi' // 无需登录白名单api列表

import {getAssetsFiles} from '@/utils/index'

import {useRouteHook} from '@/hook/routeHook'
const {router} = useRouteHook()

let service = null

const userInfo = useUserStore()

let isLogin = false

const request = async (urlName, data = {}, method = 'GET') => {

  const url = API[urlName]
  if (!url) return

  let token = userInfo.token

	// 判断是否需要登录
	let needLogin = withoutLoginApi.indexOf(url) === -1
	if (!token && !needLogin) {
		token = ''
		console.log('不需要登录', url)
    service = getAssetsFiles('../Ajax/service.js')
	} else if (!token && needLogin) {
		console.log('需要登录', url)
    router.push({
      path: '/login'
    })
    isLogin = true
    return
	} else {
    service = getAssetsFiles('../Ajax/service.js')
  }

  data = $base.dealObjectValue(data)


  const requestData = {
    url,
    method,
    data: method !== 'GET' ? data : '',
    params: method === 'GET' ? data : '',
  }

  return new Promise((resolve, reject) => {
    service.request(requestData).then(res => {
      console.log('响应返回完整res', res)
      let statusCode = res.statusCode
      console.log('res', res)
      console.log('res.statusCode', res.statusCode, 'res.data', res.data)
      switch (statusCode) {
        case 200:
          const {
            code, data, msg
          } = res.data || {}
          if (code == 1) {
            resolve(data || {})
          } else {
            resolve(null)
            !noToast && iconToast(msg || '请求出错')
          }
          break;
        case 401:
          uni.redirectTo({
            url: '/pages/login',
            success() {
              console.log('success')
              isLogin = true
            }
          })
          break;
        default:
          resolve(null)
          !noToast && iconToast(res.msg || '请求出错')
      }

    }).catch(err => {
      console.log('请求出错catch', err)
      Toast.fail('网络异常')
      resolve(null)
    })
  })
}


export default request