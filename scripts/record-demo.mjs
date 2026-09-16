// Records a short interaction demo for the README GIF.
import { chromium } from 'playwright'
import { copyFileSync, mkdirSync } from 'node:fs'

mkdirSync('demo-video', { recursive: true })

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({
  viewport: { width: 1100, height: 700 },
  recordVideo: {
    dir: 'demo-video',
    size: { width: 1100, height: 700 },
  },
})

const page = await context.newPage()
await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle' })

await page.waitForTimeout(900)

for (const city of ['Palestine', 'Emirates', 'Cairo']) {
  await page.getByRole('button', { name: city }).click()
  await page.waitForTimeout(1100)
}

const video = page.video()
await context.close()

if (video) {
  const recordedPath = await video.path()
  copyFileSync(recordedPath, 'demo-video/change-cities-demo.webm')
}

await browser.close()
