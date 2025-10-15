import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import postcsspxtorem from 'postcss-pxtorem'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcsspxtorem({
          rootValue: 16,
          propList: ['*'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        })
      ]
    }
  }
})
