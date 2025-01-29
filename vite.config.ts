import { defineConfig } from 'vite';
import million from 'million/compiler';
//import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    //MillionLint.vite(),
    million.vite({
      auto: {
        threshold: 0,
      },
    }),
    react(),
    tailwindcss(),
  ],
});
