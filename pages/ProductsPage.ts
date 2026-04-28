import type { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly sortSelector: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.sortSelector = page.locator('.product_sort_container');
  }

  async sort(value: 'az' | 'za' | 'lohi' | 'hiLo') {
    await this.sortSelector.selectOption(value);
  }

  async addItemToCart(itemName: string) {
    // Locating the specific item container then clicking its button
    const item = this.page.locator('.inventory_item', { hasText: itemName });
    await item.locator('button').click();
  }


  async getAllPrices(): Promise<number[]> {
    const priceStrings = await this.page.locator('.inventory_item_price').allTextContents();
    return priceStrings.map(p => parseFloat(p.replace('$', '')));
  }

  async getAllTitles(): Promise<string[]> {
    return await this.page.locator('.inventory_item_name').allTextContents();
  }
}