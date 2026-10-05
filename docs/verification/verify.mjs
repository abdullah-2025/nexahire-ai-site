import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'

const url = process.argv[2] || 'http://127.0.0.1:3001'
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const results = []
for (const width of [1440, 768, 390, 375, 320]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } })
  const errors = [],
    warnings = [],
    failures = [],
    remote = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => {
    if (['warning', 'error'].includes(m.type())) warnings.push(m.text())
  })
  page.on('requestfailed', (r) => failures.push(r.url()))
  page.on('request', (r) => {
    if (!r.url().startsWith(url) && !r.url().startsWith('data:'))
      remote.push(r.url())
  })
  const response = await page.goto(url, { waitUntil: 'networkidle' })
  assert.equal(response.status(), 200)
  await page.waitForFunction(
    () =>
      document.querySelector('.hero__proof-text strong')?.textContent ===
      '2,400+',
    null,
    { timeout: 10000 },
  )
  assert.equal(
    await page.title(),
    'NexaHire AI — AI-Powered Career Readiness Platform',
  )
  assert.equal(
    await page.locator('.hero__proof-text strong').textContent(),
    '2,400+',
  )
  assert.ok(
    await page.locator('canvas').evaluate((c) => c.width > 0 && c.height > 0),
  )
  await page.addStyleTag({
    content: 'html { scroll-behavior:auto !important; }',
  })
  if (width < 1024) {
    const burger = page.getByRole('button', { name: 'Toggle menu' })
    await burger.click()
    await assert.doesNotReject(() =>
      page.locator('.nav__mobile--open').waitFor(),
    )
    assert.equal(await burger.getAttribute('aria-expanded'), 'true')
    await page.locator('.nav__mobile a[href="#features"]').click()
    assert.equal(await burger.getAttribute('aria-expanded'), 'false')
    assert.equal(new URL(page.url()).hash, '#features')
  } else {
    await page.locator('.nav__links-capsule a[href="#features"]').click()
    assert.equal(new URL(page.url()).hash, '#features')
  }
  const tabs = page.getByRole('tab')
  for (const index of [1, 2, 3, 0]) {
    await tabs.nth(index).click()
    await tabs.nth(index).focus()
    await page.waitForFunction(
      (index) =>
        document.querySelector('.fx-layer.on')?.getAttribute('alt') ===
          [
            'AI CV Builder',
            'Skill Gap Analysis',
            'Career Roadmaps',
            'AI Mock Interviews',
          ][index] &&
        !document.querySelector('.fx-panel.swap') &&
        document.querySelector('#fx-chips')?.classList.contains('show'),
      index,
      { timeout: 5000 },
    )
    assert.equal(await tabs.nth(index).getAttribute('aria-selected'), 'true')
    const active = page.locator('.fx-layer.on')
    assert.equal(
      await active.getAttribute('alt'),
      [
        'AI CV Builder',
        'Skill Gap Analysis',
        'Career Roadmaps',
        'AI Mock Interviews',
      ][index],
    )
    assert.ok(
      await active.evaluate((img) => img.complete && img.naturalWidth > 0),
    )
    assert.equal(await page.locator('.fx-panel.swap').count(), 0)
    assert.ok(
      await page
        .locator('#fx-chips')
        .evaluate((el) => el.classList.contains('show')),
    )
  }
  await tabs.first().focus()
  await page.keyboard.press('ArrowRight')
  assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true')
  await page.waitForFunction(
    () =>
      document.querySelector('.fx-layer.on')?.getAttribute('alt') ===
        'Skill Gap Analysis' && !document.querySelector('.fx-panel.swap'),
    null,
    { timeout: 10000 },
  )
  // Rapid selection must recover from canceled wipe animations.
  await tabs.nth(2).click()
  await page.waitForTimeout(90)
  await tabs.nth(1).click()
  await tabs.nth(1).focus()
  await page.waitForTimeout(2200)
  assert.equal(
    await page.locator('.fx-layer.on').getAttribute('alt'),
    'Skill Gap Analysis',
  )
  assert.equal(await page.locator('.fx-panel.swap').count(), 0)
  await page.locator('#readiness').scrollIntoViewIfNeeded()
  await page.evaluate(() => {
    const el = document.querySelector('#rd-wrap')
    window.scrollBy(0, el.getBoundingClientRect().top - 150)
  })
  await page.waitForFunction(
    () => Number(document.querySelector('#rd-num')?.textContent) > 0,
    null,
    { timeout: 5000 },
  )
  assert.ok(Number(await page.locator('#rd-num').textContent()) > 0)
  const counts = page.locator('.count')
  for (let i = 0; i < (await counts.count()); i++)
    await counts.nth(i).scrollIntoViewIfNeeded()
  await page.waitForFunction(
    () =>
      JSON.stringify(
        [...document.querySelectorAll('.count')].map((el) => el.textContent),
      ) === JSON.stringify(['78', '2,400', '94', '850']),
    null,
    { timeout: 10000 },
  )
  assert.deepEqual(await counts.allTextContents(), ['78', '2,400', '94', '850'])
  await page.locator('#faq').scrollIntoViewIfNeeded()
  const faq = page.locator('.faq-q')
  assert.equal(await faq.first().getAttribute('aria-expanded'), 'true')
  await faq.nth(1).click()
  assert.equal(await faq.first().getAttribute('aria-expanded'), 'false')
  assert.equal(await faq.nth(1).getAttribute('aria-expanded'), 'true')
  assert.ok(
    await faq
      .nth(1)
      .evaluate((el) => el.closest('.faq-item').classList.contains('visible')),
  )
  await faq.nth(1).click()
  assert.equal(await faq.nth(1).getAttribute('aria-expanded'), 'false')
  await page.locator('#cta-form').scrollIntoViewIfNeeded()
  await page.getByPlaceholder('Your name').fill('Migration Check')
  await page.getByPlaceholder('you@university.edu.pk').fill('check@example.com')
  await page.locator('#cta-form button').click()
  assert.equal(
    await page.locator('#cta-label').textContent(),
    "You're on the list ✓",
  )
  assert.equal(await page.getByPlaceholder('Your name').inputValue(), '')
  assert.equal(
    await page.getByPlaceholder('you@university.edu.pk').inputValue(),
    '',
  )
  assert.equal(
    await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    false,
  )
  await page.locator('footer .logo').click()
  assert.equal(new URL(page.url()).hash, '#top')
  await page.waitForTimeout(150)
  assert.equal(await page.evaluate(() => scrollY), 0)
  assert.deepEqual(errors, [], 'Browser errors')
  assert.deepEqual(warnings, [], 'Browser warnings')
  assert.deepEqual(failures, [], 'Failed requests')
  assert.deepEqual(remote, [], 'External requests')
  results.push({
    width,
    passed: true,
    errors,
    warnings,
    failures,
    externalRequests: remote,
  })
  console.log(
    `Passed navigation, tabs, rapid transitions, counters, readiness, FAQ, signup, assets, console, and overflow at ${width}px.`,
  )
  await page.close()
}
const noJS = await browser.newPage({ javaScriptEnabled: false })
await noJS.goto(url)
assert.ok(
  (await noJS.locator('h1').textContent()).includes('Your next career move'),
)
assert.equal(await noJS.getByRole('tab').count(), 4)
assert.equal(await noJS.locator('#faq-list button').count(), 5)
assert.equal(await noJS.locator('footer').count(), 1)
results.push({ serverRenderedContent: true })
await browser.close()
await fs.writeFile(
  new URL('./functional-report.json', import.meta.url),
  JSON.stringify(results, null, 2),
)
