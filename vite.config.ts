import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/si-grenoble/",
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "SiGrenoble",
      fileName: (format) => `si-grenoble.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "twemoji", "Twemoji"],
      output: {
        name: "SiGrenoble",
        exports: "named",
        sourcemap: true,
        globals: {
          vue: "vue",
        },
      },
    },
  },
  plugins: [typescript(), commonjs(), vue(), terser()],
});
