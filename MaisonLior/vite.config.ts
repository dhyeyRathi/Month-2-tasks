import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  plugins: [react(), tailwindcss(),
  ViteImageOptimizer({

    png: {
      quality: 80,
    },
    jpg: {
      quality: 10,
    },
    webp: {
      lossless: true,
    },
    avif: {
      lossless: true,
    },
  }),
  ],
})
