import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  plugins: [checker({ typescript: true }), react(), svgr(), tsconfigPaths()],
  build: {
    target: 'esnext',
  },
})