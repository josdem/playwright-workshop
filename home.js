const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 50})
    const page = await browser.newPage()
    await page.goto('https://vetlog.org/')
    await browser.close()
})()