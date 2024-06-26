import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/api": `http://localhost:8080`,
    // },
  },
  build: {
    chunkSizeWarningLimit: 1000, // increase limit to 1000 kB
  },
});
