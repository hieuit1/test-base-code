import { test, expect } from '@playwright/test';

// Gắn tag @smoke để khớp với lệnh --grep "@smoke" trong file CI của bạn
test('Kịch bản test mẫu cho CI/CD @smoke', async ({ page }) => {
    // Truy cập trang web
    await page.goto('https://playwright.dev/');

    // Kiểm tra tiêu đề trang
    await expect(page).toHaveTitle(/Playwright/);

});