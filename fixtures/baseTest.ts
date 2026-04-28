import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { AntFormPage } from '../pages/AntFormPage.js';

// Re-exporting expect so your .spec files can use it
export { expect };

type MyFixtures = {
  loginPage: LoginPage;
  checkoutPage: CheckoutPage;
  productsPage: ProductsPage;
  antFormPage: AntFormPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  antFormPage: async ({ page }, use) => {
    await use(new AntFormPage(page));
  },
});