const { test, expect } = require('@playwright/test')
const { Properties } = require('../properties/test.properties')

test('should validate page title', async ({ page }) => {
  await page.goto(Properties.url)
  await expect(page).toHaveTitle(Properties.title)
})
