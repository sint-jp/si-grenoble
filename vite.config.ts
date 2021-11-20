import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/si-grenoble/",
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "SiGrenoble",
      fileName: (format) => `si-grenoble.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue"
        }
      }
    }
  },
  plugins: [vue()],
});
