const {chromium} = require('playwright');
const SMALL_SLOW_MOTION = 50;

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: SMALL_SLOW_MOTION})
    const page = await browser.newPage()
    await page.goto('https://vetlog.org/')
    await browser.close()
})()