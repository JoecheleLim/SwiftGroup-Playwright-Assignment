import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    screenshot: 'on',
    trace: 'on',
  },
  projects: [
    {
      name: 'SauceDemo',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.saucedemo.com', 
      },
    },
    {
      name: 'AntDesign',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://ant-design-form-test.harith-610.workers.dev', 
      },
    },
  ],
});