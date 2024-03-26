import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: 'import { jsx } from "@/core/jsx-runtime.js"',
  },
  server: {
    open: 'index.html',
  },
})
