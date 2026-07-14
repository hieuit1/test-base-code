import { test, expect } from '@playwright/test';
import { customStep } from '../src/utils/reportHelper';

// 1. Kịch bản này sẽ chạy khi có PULL REQUEST hoặc CHẠY TAY chọn @smoke
test('Kiểm tra trang chủ Playwright @smoke', async ({ page }) => {
    await customStep(page, 'Truy cập Playwright', async () => {
        await page.goto('https://playwright.dev/');
    });

    await customStep(page, 'Xác nhận tiêu đề', async () => {
        await expect(page).toHaveTitle(/Playwright/);
    });
});

// 2. Kịch bản này sẽ chạy khi PUSH thẳng lên Main, Schedule ban đêm, hoặc CHẠY TAY chọn @regression
test('Kiểm tra trang chủ GitHub @regression', async ({ page }) => {
    await customStep(page, 'Truy cập GitHub', async () => {
        await page.goto('https://github.com/');
    });

    await customStep(page, 'Xác nhận tiêu đề', async () => {
        await expect(page).toHaveTitle(/GitHub/);
    });
});