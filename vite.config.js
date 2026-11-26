import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  // Keep the dev optimizer aligned with the packages the app currently uses.
  // This also avoids stale removed dependencies leaving the dev page unmounted.
  optimizeDeps: {
    include: ["react", "react-dom/client", "@vercel/analytics/react", "lucide-react"],
  },
})
