import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ['./setupVitest.js']
  },
  base: process.env.NODE_ENV === 'production'
  ? '/ClickAdopt/'
  : '/',
})