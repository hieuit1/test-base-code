import { test, expect } from '@playwright/test';

// SỬA CHỮ @smoke THÀNH @regression
test('Kịch bản test mẫu cho CI/CD @regression', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});