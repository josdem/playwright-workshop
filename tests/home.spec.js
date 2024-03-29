const { test, expect } = require("@playwright/test")
import { allure } from "allure-playwright"
const properties = require("../properties/test.properties")

test.beforeAll(async () => {
  test.info().annotations.push({
    type: "story",
    description: "https://github.com/josdem/playwright-workshop/issues/10",
  })
  test.info().annotations.push({
    type: "time",
    description: `${new Date()}`,
  })
})

test("should validate page title", async ({ page }) => {
  await allure.tags("home", "guest", "title")
  await allure.epic("OR-2716")
  await allure.story("OR-4197")
  await allure.issue("tags", "https://github.com/josdem/playwright-workshop/issues/12")
  await page.goto(properties.url)
  await expect(page).toHaveTitle(properties.title)
})
