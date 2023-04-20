import { showToast, closeToast, showLoadingToast, showConfirmDialog } from 'vant'

let base = {}

base.showConfirmDialog = (message, title = '提示') => {
  return new Promise(resolve => {
    showConfirmDialog({
      title: title,
      message: message,
    })
      .then(() => {
        // on confirm
        resolve(true)
      })
      .catch(() => {
        // on cancel
        resolve(false)
      })
  })

}

/**
 *  showToast
 */
base.showToast = function (message, options = { duration: 1500 }) {
  showToast({
    message,
    ...options
  })
}

/**
 * 显示Loading
 * forbidClick: 是否显示透明蒙层，防止触摸穿透
 */
base.showLoadingToast = function (
  message = '加载中...',
  options = { duration: 0, forbidClick: true }
) {
  showLoadingToast({
    message,
    ...options
  })
}

/**
 *  隐藏消息提示框。
 */

base.closeToast = function () {
  closeToast()
}

// 判断传入参数的类型，以字符串的形式返回
const dataType = (obj) => {
  if (obj === null) return 'Null'
  if (obj === undefined) return 'Undefined'
  return Object.prototype.toString.call(obj).slice(8, -1)
}
// 处理对象参数值，过滤去除对象参数值为""、null、undefined,并返回一个新对象
base.dealObjectValue = (obj) => {
  const param = {}
  if (obj === null || obj === undefined || obj === '') return param
  Object.keys(obj).forEach((item) => {
    if (dataType(obj[item]) === 'Object') {
      param[item] = dealObjectValue(obj[item])
    } else if (obj[item] !== null && obj[item] !== undefined && obj[item] !== '') {
      param[item] = obj[item]
    }
  })
  return param
}

// 将时间戳转换成yyyy-MM-dd
base.DateFormat = (time, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  time = new Date(time * 1000)
  console.log('time', time)
  var o = {
    'M+': time.getMonth() + 1, //月份
    'd+': time.getDate(), //日
    'h+': time.getHours(), //小时
    'm+': time.getMinutes(), //分
    's+': time.getSeconds(), //秒
    'q+': Math.floor((time.getMonth() + 3) / 3), //季度
    S: time.getMilliseconds() //毫秒
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }

  return fmt
}

import request from '@/Ajax/request'
import axios from 'axios'
base.uploadAvatar = async (file, headersData = {}) => {
  let result = {};
  //用FormData传输
  let param = new FormData();
  param.append("file", file);
  //判断图片大小和格式
  // if (file.size >= 10 * 1024 * 1024) {
  //   result = { picture: "sobig", msg: "图片超过了10M", url: "" };
  // } else 
  if (!(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type))) {
    result = { picture: "error", msg: " 只支持 jpg/png/jpeg 格式图片", url: "" };
  } else {
    //设置请求头
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        lang: headersData.lang,
        token: headersData.token
      }
    }

    const uploadUrl = process.env.NODE_ENV == 'production' ? 'https://cxvcv.oiweurewrj.store/api/common/upload' : '/api/common/upload'

    const { data } = await axios.post(
      uploadUrl,
      param,
      config,
    )
    console.log('data', data)
    if (data.code != 1) {
      result = { picture: "error", msg: "图片上传失败，请重试", url: "" };
    } else {
      result = { picture: "over", msg: "上传成功", url: data.data ? data.data.url : '' };
    }
  }
  return result;
}


export default { ...base }
