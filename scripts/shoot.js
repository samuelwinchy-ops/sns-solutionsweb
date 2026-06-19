// Viewport-sized section screenshots at large viewports (installed Chrome).
const { chromium } = require('playwright-core')
const path = require('path')
const fs = require('fs')

const OUT = path.join(__dirname, '..', '.shots')
const URL = process.env.SHOT_URL || 'http://localhost:3000'
const sizes = [
  { w: 1920, h: 1080 },
  { w: 2560, h: 1440 },
]
const sections = ['what-we-do', 'build-log', 'team', 'contact']

;(async () => {
  fs.mkdirSync(OUT, { recursive: true })
  const browser = await chromium.launch({ channel: 'chrome' })

  for (const { w, h } of sizes) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: h },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    })
    const page = await ctx.newPage()
    await page.goto(URL, { waitUntil: 'networkidle' })
    await page.waitForTimeout(800)

    // Hero (top of page, real viewport framing)
    await page.screenshot({ path: path.join(OUT, `hero-${w}x${h}.png`) })
    console.log('wrote hero', w)

    for (const id of sections) {
      await page.evaluate((sel) => {
        document.getElementById(sel)?.scrollIntoView({ block: 'start' })
      }, id)
      // build-log needs time to print its rows
      await page.waitForTimeout(id === 'build-log' ? 4500 : 700)
      await page.screenshot({ path: path.join(OUT, `${id}-${w}x${h}.png`) })
      console.log('wrote', id, w)
    }
    await ctx.close()
  }
  await browser.close()
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
