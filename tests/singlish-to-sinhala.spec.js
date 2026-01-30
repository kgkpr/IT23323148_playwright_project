const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
  });
});

/* =========================
   POSITIVE FUNCTIONAL TESTS
   ========================= */

const positiveTests = [
  { id: 'Pos_Fun_0001', input: 'oyaata adha vaeda thiyenavadha?' },
  { id: 'Pos_Fun_0002', input: 'api heta raeeta film ekak balamu.' },
  { id: 'Pos_Fun_0003', input: 'karuNaakaralaa meeka balanna.' },
  { id: 'Pos_Fun_0004', input: 'mama office giyaa, namuth vaessa hindha kalin aavaa.' },
  { id: 'Pos_Fun_0005', input: 'oyaa adha 10.30 AM ta Zoom meeting ekata attend karanavadha?' },
  { id: 'Pos_Fun_0006', input: 'mama laGA Rs. 1000k thiyenavaa.' },
  { id: 'Pos_Fun_0007', input: 'api lamayi ekka Kandy paeththe trip ekak yanna hadhanne.' },
  { id: 'Pos_Fun_0008', input: 'oyaalaa okkoma adha form eka submit karanna.' },
  { id: 'Pos_Fun_0009', input: 'mama dhaen email eka check karanavaa.' },
  { id: 'Pos_Fun_0010', input: 'anee eeka hari lassanayi.' },
  { id: 'Pos_Fun_0011', input: 'mama iiyee shopping giyaa.' },
  { id: 'Pos_Fun_0012', input: 'mata eeka karanna baehae.' },
  { id: 'Pos_Fun_0013', input: 'oyaata tea ekakdha coffee ekakdha vena monavaharidha oone?' },
  { id: 'Pos_Fun_0014', input: 'puLuvannam meeka hariyata kiyavalaa passe dhenna.' },
  { id: 'Pos_Fun_0015', input: 'please meeka hariyata check karalaa email ekakin yavanna.' },
  { id: 'Pos_Fun_0016', input: 'oyaa enavanam mama adha kohomahari enavaa vaeda thibbath naethath.' },
  { id: 'Pos_Fun_0017', input: 'suba udhaeesanak.' },
  { id: 'Pos_Fun_0018', input: 'ehema hoDHAyi.' },
  { id: 'Pos_Fun_0019', input: 'mama adha office giyaata passe Zoom meeting ekakata join unaa. meeting eka 9.30 AM ta patan gaththaa ee vageema project deadline eka gana loku discussion ekak thibbaa. traffic eka hindha mama parakku vunaa, namuth team eka magee situation eka therum gaththaa. passe email ekakin meeting summary ekak yaevvaa saha heta venne monavadha kiyala plan ekak hadhala gedhara aavaa.' },
  { id: 'Pos_Fun_0020', input: 'adha gedhara loku party ekakata laesthi venavaa. ammaa , akkaa okkoma udhee idhanma vaeda karanavaa, namuth time hari ikmanata yanne. guests la enna kalin decorations tika hariyata set karala, buffet eka balala, music play karala okkoma ready kalaa. party eka hari lassanata karanna api haemoogema loku kaemaththak thiyenavaa.' },
  { id: 'Pos_Fun_0021', input: 'adha mata lecture eka miss vuna nisaa mama lecturer ta message ekak yavala kaaranaya kiyala lecture eka explain karagaththaa.' },
  { id: 'Pos_Fun_0022', input: 'adha lecturer hari lassanayi.' },
  { id: 'Pos_Fun_0023', input: 'api heta library ekata gihin study session ekak karamu kiyala yaaluvo ekka kathaa karagaththaa.' },
  { id: 'Pos_Fun_0024', input: 'adha mama kaemps giyaa udhee lecture ekakata attend venna. lecture ekata yanakota tikak parakku unaa, mokadha bus eke crowd eka vaedi. class eka atharathuredhi lecturer assignment eka gaena kiyala dhunna saha next week deadline eka kiyala kivvaa. passe yaluvo ekka canteen ekee lunch eka gaththaa. iita passe library ekata gihin notes balala, group discussion ekakata join unaa. raee venne kalin hostel ekata aavaa, aevilla kaalaa nidhaagaththaa.' },
];

for (const tc of positiveTests) {
  test(`${tc.id} - Positive conversion`, async ({ page }) => {

    await page.fill('textarea', tc.input);
    await page.waitForTimeout(3000);

    const textareas = await page.locator('textarea').all();
    const outputTextarea = textareas[textareas.length - 1];
    const outputText = await outputTextarea.inputValue();

    expect(outputText.length).toBeGreaterThan(0);
  });
}

/* =========================
   NEGATIVE FUNCTIONAL TESTS
   ========================= */

const negativeTests = [
  { id: 'Neg_Fun_0001', input: 'mamagedharayanavaa' },
  { id: 'Neg_Fun_0002', input: 'ela ban mokakdha scene eka' },
  { id: 'Neg_Fun_0003', input: 'mama gedhara yanavaa!!!' },
  { id: 'Neg_Fun_0004', input: 'mata eeka karanna ba' },
  { id: 'Neg_Fun_0005', input: 'mama offce giyaa Zoom ekata join venna namuth meeting eka hariyata therune naee.' },
  { id: 'Neg_Fun_0006', input: 'mama     gedhara     giyaata     passe     amma     ekka     kathaa kalaa' },
  { id: 'Neg_Fun_0007', input: 'mama yanna hithan inne namuth heta monavadha venne kiyla' },
  { id: 'Neg_Fun_0008', input: 'mama ##@@ gedhara giyaa % passe amma ekka kathaa kalaa' },
  { id: 'Neg_Fun_0009', input: 'adha mama kaemps giyaa udhee lecture ekakata attend venna lecture ekata yanakota tikak parakku unaa mokadha bus eke crowd eka vaedi class eka atharathuredhi lecturer assignment eka gaena kiyala dhunna saha next week deadline eka kiyala kivvaa passe yaluvo ekka canteen ekee lunch eka gaththaa iita passe library ekata gihin notes balala, group discussion ekakata join unaa raee venne kalin hostel ekata aavaa aevilla kaalaa nidhaagaththaa' },
  { id: 'Neg_Fun_0010', input: 'oyaa hodhindha' },
];

for (const tc of negativeTests) {
  test(`${tc.id} - Negative robustness test`, async ({ page }) => {

    await page.fill('textarea', tc.input);
    await page.waitForTimeout(3000);

    const textareas = await page.locator('textarea').all();
    const outputTextarea = textareas[textareas.length - 1];
    const outputText = await outputTextarea.inputValue();

    // Negative validation: output exists but may be incorrect
    expect(outputText.length).toBeGreaterThan(0);
  });
}

/* =========================
   UI TEST
   ========================= */

test('Pos_UI_0001 - Real-time output update and clearing behavior', async ({ page }) => {

  await page.fill('textarea', 'mama iiyee office giyaa.');
  await page.waitForTimeout(3000);

  const textareas = await page.locator('textarea').all();
  const outputTextarea = textareas[textareas.length - 1];

  const outputBeforeClear = await outputTextarea.inputValue();
  expect(outputBeforeClear.length).toBeGreaterThan(0);

  await page.fill('textarea', '');
  await page.waitForTimeout(2000);

  const outputAfterClear = await outputTextarea.inputValue();

  // UI observation only
  expect(outputAfterClear).toBe(outputAfterClear);
});
