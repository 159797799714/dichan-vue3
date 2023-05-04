import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

import { baseUrl } from './src/config'



// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  console.log('process.env', process.env.NODE_ENV)

  return {
    // 服务器配置
    server: {
      host: '', // 指定服务器应该监听哪个 IP 地址
      port: '8888', // 指定开发服务器端口
      strictPort: true, // 设为true时端口被占用则直接退出，不会尝试下一个可用端口
      open: false, // 服务启动时自动在浏览器中打开应用
      https: false, // 启用 TLS + HTTP/2
      cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
      hmr: true, // 禁用或配置 HMR 连接(热更新)
      // 传递给 chockidar 的文件系统监视器选项
      watch: {
        // ignored: ['!**/node_modules/your-package-name/**'],
      },
      // 被监听的包必须被排除在优化之外，
      // 以便它能出现在依赖关系图中并触发热更新。
      optimizeDeps: {
        include: ['axios'],
        // exclude: ['your-package-name'],
      },
      // 反向代理配置
      proxy: {
        "/": {
          target: baseUrl,
          changeOrigin: false,
          rewrite: path => path.replace(/^\/api/, '/api'),
        },
        // "/": {
        //   "target": "https://zgdc2023tx.com",
        //   "changeOrigin": false
        // }
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

  }
})
