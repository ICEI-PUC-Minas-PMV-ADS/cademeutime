import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __ENV__: process.env
  },
  base:"/cademeutime",
  server: {
    https: {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    }
  }
})
