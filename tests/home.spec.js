const { test, expect } = require('@playwright/test')
const properties = require('../properties/test.properties')

test('should validate page title', async ({ page }) => {
  await page.goto(properties.url)
  await expect(page).toHaveTitle(properties.title)
})
