/// <reference types="vitest" />
/// <reference types="Vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      provider: "c8",
      exclude: ["**/*.styled.ts", "**/assets/*"],
    },
    globals: true,
  },
});
