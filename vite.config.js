// 

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Ensures assets are not inlined as base64
    outDir: 'dist', // Output directory
    assetsDir: 'assets', // Directory for static assets inside dist
  },
  resolve: {
    alias: {
      '@emotion/react': '@emotion/react',
      '@emotion/styled': '@emotion/styled',
      '@mui/styled-engine': '@mui/styled-engine',
    },
  },
  rollupOptions: {
    output: {
      manualChunks(id) {
        // Group vendor libraries (e.g., node_modules) into a separate chunk
        if (id.includes('node_modules')) {
          return 'vendor';  // All node_modules will be bundled into 'vendor.js'
        }
        // You can add more logic here for additional chunk splitting
      }
    }
  },
  resolve: {
    alias: {
      '~slick-carousel': '/node_modules/slick-carousel'
    }
  },

  chunkSizeWarningLimit: 1000 , // Set the limit to 1 MB (1000 KB),
});
