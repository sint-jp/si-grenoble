import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { terser } from "rollup-plugin-terser";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/si-grenoble/",
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "SiGrenoble",
      fileName: (format) => `si-grenoble.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "twemoji"],
      output: {
        globals: {
          vue: "vue"
        }
      }
    }
  },
  plugins: [vue(), terser()],
});
