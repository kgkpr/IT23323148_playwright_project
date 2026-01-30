const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,

  // ✅ Generate HTML report every run
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    browserName: 'chromium',
    headless: true,
  },
});