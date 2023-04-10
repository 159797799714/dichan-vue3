// route
import { useRoute, useRouter } from 'vue-router'

export function useRouteHook() {
  const route = useRoute()
  const router = useRouter()

  /**
   * 保留当前页面，跳转到应用内的某个页面
   * 去除跳转页面的缓存
   */
  function navigateTo(args) {
    route.meta.reload = true // 是否重新加载
    router.push(args)
  }

  function goPage(path) {
    console.log('path', path)
    if (!path) return $base.showToast('升级中')
    router.push({ path })
  }

  return {
    route,
    router,
    navigateTo,
    goPage
  }
}
