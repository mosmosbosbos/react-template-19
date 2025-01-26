import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Unimport from 'unimport/unplugin'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    Unimport.vite({
      presets: ['react', 'react-router'],
      dts: true,
      dirs:['./app/components/ui/**'],

      // { name: 'useState', as: 'useSignal', from: 'react' },

    })
  ],
});
