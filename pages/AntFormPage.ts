import { type Page, type Locator, expect } from '@playwright/test';

export class AntFormPage {
  readonly page: Page;
  readonly nextBtn: Locator;
  readonly submitBtn: Locator;
  readonly errorMessages: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextBtn = page.getByRole('button', { name: 'Next' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.errorMessages = page.locator('.ant-form-item-explain-error');
  }

  // Fills a standard text field
  async fillTextField(label: string, value: string) {
    const locator = this.page.getByLabel(label, { exact: false }).first();
    
    await locator.click();
    await locator.pressSequentially(value, { delay: 30 });
  }

  // Selection for valid options
  async selectOption(label: string, option: string) {
    const selector = this.page.locator('.ant-select-selector', {
      has: this.page.getByLabel(label)
    });
    await selector.click();

    const dropdown = this.page.locator('.ant-select-dropdown:not(.ant-select-dropdown-hidden)');
    const optionLocator = dropdown
      .locator('.ant-select-item-option-content')
      .filter({ hasText: option })
      .first();

    await optionLocator.waitFor({ state: 'visible' });
    await optionLocator.click();
  }

  // Bruce force input for selector
 async verifyNoOptionFound(label: string, invalidOption: string) {
    const selector = this.page.locator('.ant-select-selector', {
      has: this.page.getByLabel(label)
    });
    await selector.click();

    const input = selector.locator('input');
    await input.focus();

    // Clear and type invalid text
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await input.pressSequentially(invalidOption, { delay: 50 });

    const dropdown = this.page.locator('.ant-select-dropdown:not(.ant-select-dropdown-hidden)');
    
    // Checks the combined text of all options and avoids strict mode errors.
    await expect(dropdown).not.toContainText(invalidOption);

    // Clean up UI
    await this.page.keyboard.press('Escape');
}

  // Selects an option using the internal search/filter
  async findnselectOption(label: string, option: string) {
    const container = this.page.locator('.ant-select-selector', {
      has: this.page.getByLabel(label, { exact: false })
    });
    await container.click();

    const input = container.locator('input');
    await input.focus();
    await input.pressSequentially(option, { delay: 50 });

    const optionLocator = this.page
      .locator('.ant-select-dropdown:not(.ant-select-dropdown-hidden)')
      .locator('.ant-select-item-option-content')
      .filter({ hasText: option })
      .first();

    await optionLocator.click();
  }

  // Fills DatePicker by forcing clear and typing
  async fillDatePicker(label: string, value: string) {
    const picker = this.page.getByLabel(label, { exact: false });
    await picker.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Backspace');
    await this.page.keyboard.type(value);
    await this.page.keyboard.press('Enter');
  }
}