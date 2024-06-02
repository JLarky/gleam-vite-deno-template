import { defineConfig } from "npm:vite";
import Inspect from 'npm:vite-plugin-inspect';
import gleam from 'npm:vite-gleam';
import react from "npm:@vitejs/plugin-react";

import "npm:react";
import "npm:react-dom/client";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [gleam(), Inspect()],
  build: { sourcemap: true },
  cacheDir: "node_modules/.vite-cache",
});
