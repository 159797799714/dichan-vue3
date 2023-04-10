import { showToast, closeToast, showLoadingToast } from 'vant'

let base = {}

/**
 *  showToast
 */
base.showToast = function (message, options = { duration: 1500 }) {
  showToast({
    message,
    ...options,
  })
}

/**
 * 显示Loading
 * forbidClick: 是否显示透明蒙层，防止触摸穿透
 */
base.showLoadingToast = function (message = '加载中...', options = { duration: 0, forbidClick: false }) {
  showLoadingToast({
    message,
    ...options,
  })
}

/**
 *  隐藏消息提示框。
 */

base.closeToast = function () {
  closeToast()
}

export default { ...base }
