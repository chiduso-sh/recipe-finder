import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Honor the port assigned by the environment (e.g. the preview tool),
    // falling back to Vite's default for normal local dev.
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
  },
})
