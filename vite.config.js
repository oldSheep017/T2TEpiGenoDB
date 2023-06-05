import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, '/src') }
    ]
  },
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 3000
  }
})
