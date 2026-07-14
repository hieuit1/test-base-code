import { test, expect } from '../src/fixtures/baseTest';
import { customStep } from '../src/utils/reportHelper';

test('Kiểm thử luồng CI/CD và Google @smoke', async ({ page }) => {

    await customStep(page, 'Mở trang chủ Google', async () => {
        await page.goto('https://www.google.com');
    });

    await customStep(page, 'Kiểm tra tiêu đề trang', async () => {
        await expect(page).toHaveTitle(/Google/);
    });
});