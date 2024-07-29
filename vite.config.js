import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  publicDir: '../public/',
  base: '/some_layout/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
