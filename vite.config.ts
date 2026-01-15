import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Removing manualChunks to avoid issues with Import Maps and duplicate React instances
      }
    }
  }
});