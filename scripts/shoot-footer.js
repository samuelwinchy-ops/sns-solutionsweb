const { chromium } = require('playwright-core')
const path = require('path')
;(async () => {
  const browser = await chromium.launch({ channel: 'chrome' })
  const page = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    reducedMotion: 'reduce',
  }).then((c) => c.newPage())
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(800)
  await page.evaluate(() =>
    document.getElementById('contact')?.scrollIntoView({ block: 'end' })
  )
  await page.waitForTimeout(600)
  await page.screenshot({
    path: path.join(__dirname, '..', '.shots', 'footer-1920.png'),
  })
  console.log('done')
  await browser.close()
})().catch((e) => (console.error(e), process.exit(1)))
