import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(process.cwd(), '.env') })

export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      'process.env.REACT_APP_API_SEARCH': JSON.stringify(process.env.REACT_APP_API_SEARCH),
      'process.env.REACT_APP_API_GENERAL': JSON.stringify(process.env.REACT_APP_API_GENERAL),
    })
  ],
})
