const { chromium } = require('playwright-core')
const path = require('path')
const fs = require('fs')

const OUT = path.join(__dirname, '..', '.shots')
const BASE = 'http://localhost:3000'

;(async () => {
  fs.mkdirSync(OUT, { recursive: true })
  const browser = await chromium.launch({ channel: 'chrome' })
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  for (const slug of ['imprint', 'privacy', 'terms']) {
    await page.goto(`${BASE}/legal/${slug}`, { waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(900)
    await page.screenshot({
      path: path.join(OUT, `legal-${slug}.png`),
      fullPage: true,
    })
    console.log('wrote', slug)
  }
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
