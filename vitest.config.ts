import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'node',
    include: [
      '**/__test__/**/*.{js,ts,mjs}',
      "**/*.(spec|test).{js,ts,mjs}"
    ],
  },
});
