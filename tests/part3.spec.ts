import { test, expect } from '../fixtures/baseTest.js';

test('Part 3: Ant Design Form Validation and Submission', async ({ antFormPage, page }) => {
  await page.goto('https://ant-design-form-test.harith-610.workers.dev');

  // 1. Brute Force / Invalid Inputs
  // Trying to type text into the DatePicker (Brute force)
  await antFormPage.fillDatePicker('Shipper Required Date', 'INVALID_DATE_TEXT');
  
  //Trying to select text into a selector (Brute force)
  await antFormPage.verifyNoOptionFound('Billing Customer', 'NON_EXISTENT_CUSTOMER');

  // 2. Fill Valid Input for Step 1
  await antFormPage.selectOption('Billing Customer', '120000000 - PERSONAL CUSTOMER');
  await antFormPage.fillTextField('References', 'REF-JOECHELE-001');
  await antFormPage.selectOption('Booking Type', 'LTL - Less than Truck Load');
  await antFormPage.fillTextField('Customer So', 'SO-UM-2026-X');
  await antFormPage.fillTextField('Cust Refs', 'REF-KL-001');
  await antFormPage.fillTextField('Commodity', 'General Cargo');
  await antFormPage.selectOption('Truck Type', '40-Footer Container'); // Match based on site options
  
  await antFormPage.nextBtn.click();

  // 3. Step 2: Choose Job Type and Trip Order
  await antFormPage.selectOption('Job Type','FTL');
  await antFormPage.selectOption('Trip Order Format', 'Same Start');

  // 4. Test Error Messages for Missing Fields (Requirement Step 3)
  // Clicking Next without filling 'From/To' information
  await antFormPage.fillTextField('Uom', 'Units');
  await antFormPage.fillTextField('Quantity', '10');
  await antFormPage.selectOption('Options', 'Option 1')
  await antFormPage.fillTextField('Remarks', 'Testing Part 3');
  await antFormPage.nextBtn.click();
  await expect(antFormPage.errorMessages.first()).toBeVisible();

  // 5. Fill Specific Swift Logistics Data (Requirement Step 4)
  await antFormPage.findnselectOption('From Company', '5 - Metro Freight');
  await antFormPage.findnselectOption('From Address', 'Customer Warehouse A');
  await antFormPage.findnselectOption('To Company', '0006 - Distribution Partners');
  await antFormPage.findnselectOption('To Address', 'PNMB Logistics Sdn. Bhd.');
  
  await antFormPage.nextBtn.click();

  // 6. Summary Page Verification (Requirement Step 5)
  // Check the summary container for the specific data
  const summary = page.locator('.ant-descriptions').filter({ hasText: 'Job Information' });
  await expect(summary).toContainText('5 - Metro Freight');
  await expect(summary).toContainText('0006 - Distribution Partners');

  await antFormPage.submitBtn.click();

  // 7. Success Page (Requirement Step 6)
  // Ant Design success results usually have this class
  await expect(page.locator('.ant-result-success')).toBeVisible();
  await expect(page.locator('.anticon-check-circle')).toBeVisible();
  await expect(page.locator('.ant-result-title')).toContainText('Successfully');
});