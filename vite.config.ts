import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from 'path'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {

        // 不需任何引用就可以试用main.scss里面的变量
        additionalData: '@import "@/assets/style/main.scss"'
      }
    }
  },
  // 启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {}
  },
  // 生产环境打包配置
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // 打包去掉console
        drop_debugger: true // 打包去掉debugger
      }
    }
  },
});
