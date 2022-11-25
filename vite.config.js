import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'vue-slideover',
      entry: resolve(__dirname, 'src/components/index.js'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies)
      ],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
})
