import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: [
      '**/__test__/**/*.{js,ts,mjs,tsx}',
      "**/*.(spec|test).{js,ts,mjs}"
    ],
  },
});
