import service from '@/utils/server.js'
// import store from '../store'
import { Toast, Dialog } from 'vant'
import API from './api'

// 判断传入参数的类型，以字符串的形式返回
const dataType = obj => {
  if (obj === null) return 'Null'
  if (obj === undefined) return 'Undefined'
  return Object.prototype.toString.call(obj).slice(8, -1)
}
// 处理对象参数值，过滤去除对象参数值为""、null、undefined,并返回一个新对象
const dealObjectValue = obj => {
  const param = {}
  if (obj === null || obj === undefined || obj === '') return param
  Object.keys(obj).forEach(item => {
    if (dataType(obj[item]) === 'Object') {
      param[item] = dealObjectValue(obj[item])
    } else if (obj[item] !== null && obj[item] !== undefined && obj[item] !== '') {
      param[item] = obj[item]
    }
  })
  return param
}

const request = async (urlName, data = {}, method = 'GET') => {
  data = dealObjectValue(data)

  const url = API[urlName]
  if (!url) return

  const requestData = {
    url,
    method,
    data: method !== 'GET' ? data : '',
    params: method === 'GET' ? data : '',
  }

  return new Promise((resolve, reject) => {
    service.request(requestData).then(res => {
      console.log('响应返回完整res', res)

      resolve(res.data)

      // let code = res.data.code
      // if (code === 7 || code === 102 || code === 101 || code === 115 || code === 2) {
      //   // Toast.fail(res.data.message || '登录失效')
      //   resolve()
      // } else {
      //   resolve()
      // }

    }).catch(err => {
      console.log('请求出错catch', err)
      Dialog.confirm({
        width: '340px',
        messageAlign: 'left',
        title: '未知错误，可截图联系猛犸官方协助解决',
        message: `页面信息：${err}`,
        showCancelButton: false
      })
      // Toast.fail('请求失败，请检查您的网络链接')
      reject(err)
    })
  })
}


export default request