// vite.config.js

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],  // Keep only the React plugin here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Set up your aliases if needed
    },
  },
});


