const { test, expect } = require('@playwright/test');
const testCases = require('./testcases.json');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
  });
});

// Helpers
const TypeInput = async (page, input) => {
  await page.fill('textarea', input);
};

const ScrapeOutput = async (page) => {
  return await page.locator('.bg-slate-50.whitespace-pre-wrap').innerText();
};

for (const testCase of testCases) {
  test(`${testCase.id} - ${testCase.name}`, async ({ page }) => {
    // Input
    const input = testCase.input;
    await TypeInput(page, input);

    // Process
    await page.waitForTimeout(5000);

    // Output
    const expectedOutput = testCase.expected_output;
    const actualOutput = await ScrapeOutput(page);

    // Testing
    expect(actualOutput).toBe(expectedOutput);
  });
}







































