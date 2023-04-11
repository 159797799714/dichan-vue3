//  动态加载静态文件 url地址必须是相对与utils 和index.js的路径 如../assets/.....
export const getAssetsFiles = (url) => {
  return new URL(url, import.meta.url).href
}
