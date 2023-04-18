// route
import { ref, onBeforeUnmount } from 'vue'

export function useToastRefreshHook() {

  /**
   * 保留当前页面，跳转到应用内的某个页面
   * 去除跳转页面的缓存
   */
  let toastTime = ref()

  function showToastRefresh(title = '操作成功', refreshFun = () => {}) {
    $base.showToast(title)
    toastTime.value = setTimeout(() => {
      refreshFun()
    }, 1500)
  }

  onBeforeUnmount(() => {
    console.log('执行了onBeforeUnmount')
    clearTimeout(toastTime.value)
    toastTime.value = ''
  })

  return {
    showToastRefresh
  }
}
