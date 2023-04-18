import { useUserStore } from '@/store/userInfo'
import { showFailToast } from 'vant'
// import { showSuccessToast, showFailToast, showToast } from 'vant'
import API from './api'
import service from '@/Ajax/service.js'
import { withoutLoginApi } from './withoutLoginApi' // 无需登录白名单api列表

// import { getAssetsFiles } from '@/utils/index'

const userInfo = useUserStore()

const request = async (urlName, data = {}, headers = {}, noToast = false, noFilter = false) => {
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

  const baseURL = process.env.NODE_ENV == 'production' ? 'https://api.zgdc2023tx.com' : ''

  let params = ''
  if (method === 'GET' || urlName === 'apiUpload') {
    data = ''
    params = data
  }

  const requestData = {
    // url: `https://api.zgdc2023tx.com${url}`,
    url: `${baseURL}${url}`,
    method,
    data: data,
    params: params,
    headers: Object.assign({
      'content-type': 'application/json;charset=utf-8',
      lang: userInfo.lang,
      token: userInfo.token
    }, headers)
  }

  return new Promise((resolve, reject) => {
    console.log('请求参数', requestData)
    service
      .request(requestData)
      .then((res) => {
        $base.closeToast()
        console.log('响应返回完整res', res)

        if (noFilter) return resolve(res)

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
      .catch((err = {}) => {
        console.log('请求出错catch', err)
        $base.closeToast()
        const response = err.response || {}
        const status = response.status || ''
        const data = response.data || {}
        if (status == 401) {
          showFailToast(data.msg || '请重新登录')
          setTimeout(() => {
            window.location.href = `${window.location.origin}/login`
          }, 1500)
          return
        }

        
        if (noFilter) return resolve(err)

        // window.location.href = `${window.location.origin}/login`
        showFailToast(err.message || '网络异常')
      })
  })
}

export default request
