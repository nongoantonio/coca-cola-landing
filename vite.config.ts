import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuracao padrao do Vite para React + TypeScript
export default defineConfig({
  plugins: [react()],
})
