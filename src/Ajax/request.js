import { useUserStore } from '@/store/userInfo'
import { showFailToast } from 'vant'
// import { showSuccessToast, showFailToast, showToast } from 'vant'
import API from './api'
import service from '@/Ajax/service.js'
import { withoutLoginApi } from './withoutLoginApi' // 无需登录白名单api列表

// import { getAssetsFiles } from '@/utils/index'

const userInfo = useUserStore()

const request = async (urlName, data = {}, noToast = false) => {
  const urlData = API[urlName]
  if (!urlData) return

  const { url, method = 'GET' } = urlData

  let token = userInfo.token

  const needGoLogin = window.history.state.back !== '/login'

  // 判断是否需要登录
  let needLogin = withoutLoginApi.indexOf(urlData.url) === -1

  if (!token && !needLogin) {
    token = ''
    console.log('不需要登录', url)
  } else if (!token && needLogin && needGoLogin) {
    console.log('需要登录', url)
    window.location.href = `${window.location.origin}/login`
    return
  }

  data = $base.dealObjectValue(data)

  const baseURL = import.meta.env == 'production' ? 'https://api.zgdc2023tx.com' : ''

  const requestData = {
    url: baseURL + url,
    method,
    data: method !== 'GET' ? data : '',
    params: method === 'GET' ? data : '',
    headers: {
      'content-type': 'application/json;charset=utf-8',
      lang: userInfo.lang,
      token: userInfo.token
    }
  }

  return new Promise((resolve, reject) => {
    service
      .request(requestData)
      .then((res) => {
        $base.closeToast()
        console.log('响应返回完整res', res)
        let status = res.status
        console.log('res', res)
        console.log('res.status', res.status, 'res.data', res.data)
        switch (status) {
          case 200:
            const { code, data, msg } = res.data || {}
            if (code == 1) {
              resolve(data || true)
            } else {
              resolve(null)
              !noToast && showFailToast(msg || '请求出错')
            }
            break
          case 401:
            window.location.href = `${window.location.origin}/login`
            break
          default:
            resolve(null)
            !noToast && showFailToast(res.msg || '请求出错')
        }
      })
      .catch((err) => {
        console.log('请求出错catch', err)
        $base.closeToast()
        // window.location.href = `${window.location.origin}/login`
        showFailToast(err.msg || '网络异常')
      })
  })
}

export default request
