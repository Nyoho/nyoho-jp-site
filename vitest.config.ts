import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: [
      '**/__test__/**/*.{js,ts,mjs}',
      "**/*.(spec|test).{js,ts,mjs}"
    ],
  },
});
