import { defineConfig } from 'vite'

console.log(new URL('./src', import.meta.url).pathname)

export default defineConfig({
  root: './src',
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: 'import { jsx } "@/core/jsx-runtime"',
  },
  server: {
    open: 'index.html',
  },
})
