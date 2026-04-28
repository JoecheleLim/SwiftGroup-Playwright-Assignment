import { test, expect } from '../fixtures/baseTest.js';
import { CREDENTIALS } from './credentials.js';

test('Part 1: Successful Checkout Flow', async ({ loginPage, productsPage, checkoutPage, page }) => {
  
  // 1. Login with standard_user
  await loginPage.goto();
  await loginPage.login(CREDENTIALS.standard_user, CREDENTIALS.password);
  await expect(page).toHaveURL(/inventory.html/);
  
  // 2. Add specific items to cart
  const items = ['Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie'];
  for (const item of items) {
    await productsPage.addItemToCart(item);
  }

  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('3');

  // 3. Go to cart and click checkout
  await page.locator('.shopping_cart_link').click();
  await page.locator('#checkout').click();

  // 4. Click continue without filling the form (Requirement Step 3)
  await page.locator('#continue').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();

  // 5. Fill the form with valid data and continue (Requirement Step 4)
  await checkoutPage.fillInformation('Joechele', 'Lim', '50603');

  // 6. Overview page validations (Requirement Step 5)
  // We use toContainText for better reliability with currency symbols
  await expect(page.locator('.summary_subtotal_label')).toContainText('73.97');
  await expect(page.locator('.summary_tax_label')).toContainText('5.92');
  await expect(page.locator('.summary_total_label')).toContainText('79.89');

  // 7. Submit and expect success message (Requirement Step 6)
  await page.locator('#finish').click();
  await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
});