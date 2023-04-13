import { showToast, closeToast, showLoadingToast } from 'vant'

let base = {}

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
  options = { duration: 0, forbidClick: false }
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
const dataType = obj => {
  if (obj === null) return 'Null'
  if (obj === undefined) return 'Undefined'
  return Object.prototype.toString.call(obj).slice(8, -1)
}
// 处理对象参数值，过滤去除对象参数值为""、null、undefined,并返回一个新对象
base.dealObjectValue = obj => {
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

export default { ...base }
