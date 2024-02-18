const { test, expect } = require("@playwright/test")
const properties = require("../properties/test.properties")

test.beforeAll(async () => {
  test.info().annotations.push({
    type: 'story',
    description: 'https://github.com/josdem/playwright-workshop/issues/10',
  })
  test.info().annotations.push({
    type: 'time',
    description: `${new Date()}`,
  })
})

test("should validate page title", async ({ page }) => {
  await page.goto(properties.url)
  await expect(page).toHaveTitle(properties.title)
})
