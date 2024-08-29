import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: 'src' }],
  },build: {
    outDir: 'dist',  // This is the default and can be omitted if you're using 'dist'
  },
})
