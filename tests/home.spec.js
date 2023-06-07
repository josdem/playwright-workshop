const { test, expect } = require('@playwright/test')

test('should validate page title', async ({ page }) => {
  await page.goto('https://vetlog.org/')
  await expect(page).toHaveTitle("Vetlog")
})
