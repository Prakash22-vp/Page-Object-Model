import { test, expect } from '@playwright/test';

test.use({
    storageState: 'playwright/.auth/user.json'
});

test('Verify saved authentication state', async ({ page }) => {
    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();
});