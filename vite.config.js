import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    loader: {
      '.js': 'jsx' // Instruct esbuild to treat .js files as containing JSX
    }
  }
});

