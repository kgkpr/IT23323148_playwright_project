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
    await page.waitForTimeout(3000);

    // Output
    const expectedOutput = testCase.expected_output;
    const actualOutput = await ScrapeOutput(page);

    // Testing
    expect(actualOutput).toBe(expectedOutput);
  });
}









































// /* =========================
//    POSITIVE FUNCTIONAL TESTS
//    ========================= */



// for (const tc of positiveTests) {
//   test(`${tc.id} - Positive conversion`, async ({ page }) => {

//     await page.fill('textarea', tc.input);
//     await page.waitForTimeout(3000);

//     const textareas = await page.locator('textarea').all();
//     const outputTextarea = textareas[textareas.length - 1];
//     const outputText = await outputTextarea.inputValue();

//     expect(outputText.length).toBeGreaterThan(0);
//   });
// }

// /* =========================
//    NEGATIVE FUNCTIONAL TESTS
//    ========================= */

// const negativeTests = [
//   { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa' },
//   { id: 'Neg_Fun_0002', input: 'ela ban mokakdha scene eka' },
//   { id: 'Neg_Fun_0003', input: 'mama gedhara yanavaa!!!' },
//   { id: 'Neg_Fun_0004', input: 'mata eeka karanna ba' },
//   { id: 'Neg_Fun_0005', input: 'mama offce giyaa Zoom ekata join venna namuth meeting eka hariyata therune naee.' },
//   { id: 'Neg_Fun_0006', input: 'mama     gedhara     giyaata     passe     amma     ekka     kathaa kalaa' },
//   { id: 'Neg_Fun_0007', input: 'mama yanna hithan inne namuth heta monavadha venne kiyla' },
//   { id: 'Neg_Fun_0008', input: 'mama ##@@ gedhara giyaa %% passe @@ amma ekka kathaa kalaa' },
//   { id: 'Neg_Fun_0009', input: 'adha mama kaemps giyaa udhee lecture ekakata attend venna lecture ekata yanakota tikak parakku unaa mokadha bus eke crowd eka vaedi class eka atharathuredhi lecturer assignment eka gaena kiyala dhunna saha next week deadline eka kiyala kivvaa passe yaluvo ekka canteen ekee lunch eka gaththaa iita passe library ekata gihin notes balala, group discussion ekakata join unaa raee venne kalin hostel ekata aavaa aevilla kaalaa nidhaagaththaa' },
//   { id: 'Neg_Fun_0010', input: 'oyaa hodhindha' },
// ];

// for (const tc of negativeTests) {
//   test(`${tc.id} - Negative robustness test`, async ({ page }) => {

//     await page.fill('textarea', tc.input);
//     await page.waitForTimeout(3000);

//     const textareas = await page.locator('textarea').all();
//     const outputTextarea = textareas[textareas.length - 1];
//     const outputText = await outputTextarea.inputValue();

//     // Negative validation: output exists but may be incorrect
//     expect(outputText.length).toBeGreaterThan(0);
//   });
// }

// /* =========================
//    UI TEST
//    ========================= */

// test('Pos_UI_0001 - Real-time output update and clearing behavior', async ({ page }) => {

//   await page.fill('textarea', 'mama iiyee office giyaa.'); // Type in Singlish Field
//   await page.waitForTimeout(3000); // Wait for 3 seconds

//   const textareas = await page.locator('textarea').all(); // Get all textareas in site
//   const outputTextarea = textareas[textareas.length - 1]; // Get last textarea which is the output

//   const outputBeforeClear = await outputTextarea.inputValue(); // Get output textarea value
  
//   console.log(outputBeforeClear)
  
//   expect(outputBeforeClear.length).toBeGreaterThan(0);

//   await page.fill('textarea', '');
//   await page.waitForTimeout(2000);

//   const outputAfterClear = await outputTextarea.inputValue();

//   // UI observation only
//   expect(outputAfterClear).toBe(outputAfterClear);
// });
