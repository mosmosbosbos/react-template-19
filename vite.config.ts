import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Unimport from 'unimport/unplugin'
import babel from "vite-plugin-babel";
const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    reactRouter(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
    tsconfigPaths(),
    Unimport.vite({
      presets: ['react', 'react-router'],
      dts: true,
      dirs:['./app/components/ui/**','./app/components/**'],
    })
  ],
});
