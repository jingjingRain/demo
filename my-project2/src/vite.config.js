import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "myReactLibrary",
      fileName: (format) => `my-react-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        format: "esm",
      },
    },
  },
  plugins: [reactRefresh()],
});
