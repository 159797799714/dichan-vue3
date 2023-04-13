import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';



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
        "/api": {
          "target": "https://api.zgdc2023tx.com",
          "changeOrigin": true
        },
        // "/": {
        //   "target": "https://api.zgdc2023tx.com",
        //   "changeOrigin": true
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
    build: {
      // 以防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式。
      cssTarget: 'chrome61',
      //浏览器兼容性  "esnext"|"modules"
      target: 'modules',
      //指定输出路径
      outDir: 'dist',
      publicPath: "./", // 构建好的文件输出到哪里
      //生成静态资源的存放路径
      assetsDir: 'assets',
      //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      assetsInlineLimit: 4096,
      //启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      //构建后是否生成 source map 文件
      sourcemap: false,
      //自定义底层的 Rollup 打包配置
      // rollupOptions: {
      //   output: {
      //     manualChunks: {
      //       vant: ['vant'],
      //       echarts: ['echarts'],
      //       // 首页主要入口页面单独打包文件
      //       'index-group': [
      //         './src/views/home/HomeMain.vue',
      //         './src/views/fund/FundMain.vue',
      //         './src/views/message/MessageMain.vue',
      //         './src/views/user/UserMain.vue',
      //         './src/components/Layout/TabbarNav.vue',
      //       ],
      //     },
      //   },
      // },
      //@rollup/plugin-commonjs 插件的选项
      commonjsOptions: {},
      //构建的库
      // lib: {
      // },
      //当设置为 true，构建后将会生成 manifest.json 文件
      manifest: false,
      // 设置为 false 可以禁用最小化混淆，
      // 或是用来指定使用哪种混淆器
      // boolean | 'terser' | 'esbuild'
      // minify: 'terser', //terser 构建后文件体积更小 esbuild 构建速度更快

      //传递给 Terser 的更多 minify 选项。

      //生产环境 移除console
      terserOptions: {
        compress: {
          drop_console: process.env.VUE_APP_ENV == 'production',
          drop_debugger: process.env.VUE_APP_ENV == 'production',
        },
      },
      //设置为 false 来禁用将构建后的文件写入磁盘
      write: true,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: true,
      //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      //chunk 大小警告的限制
      chunkSizeWarningLimit: 500,
    },
  }
})
