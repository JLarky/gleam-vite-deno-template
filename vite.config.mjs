import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import gleam from "vite-gleam";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [gleam(), Inspect()],
  build: { sourcemap: true },
  cacheDir: "node_modules/.vite-cache",
});
