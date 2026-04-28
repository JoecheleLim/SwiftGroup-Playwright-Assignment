import { test, expect } from '../fixtures/baseTest.js';
import { CREDENTIALS } from './credentials.js';

test('Part 2: Performance and Sorting', async ({ loginPage, productsPage, page }) => {
  await loginPage.goto();

  // Login with standard_user but WRONG password
  await loginPage.login(CREDENTIALS.standard_user, '');
  await expect(loginPage.errorMessage).toBeVisible;
  await loginPage.login(CREDENTIALS.standard_user, 'wrong password');
  await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');

  //Login with locked_out_user
  await loginPage.login(CREDENTIALS.locked_out_user, CREDENTIALS.password);
  expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');

  await page.reload();
  //Login with performance_glitch_user
  await loginPage.login(CREDENTIALS.performance_glitch_user, CREDENTIALS.password);
  
  // Sort Low to High
  await productsPage.sort('lohi');
  const prices = await productsPage.getAllPrices();
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);

  // Performance test (Z to A)
  await productsPage.sort('za');
  const actualTitles = await productsPage.getAllTitles();
  const expectedTitles = [...actualTitles].sort().reverse();
  expect(actualTitles).toEqual(expectedTitles);

  // Performance test (A to Z < 1s)
  const start = Date.now();
  await productsPage.sort('az');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(1000); // Expected to fail
});