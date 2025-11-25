const { test, expect } = require('@playwright/test');

test('Nav CTA button exists on index.html with correct class', async ({ page }) => {
  await page.goto('/index.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  await expect(navCTAButton).toBeVisible();
  await expect(navCTAButton).toContainText('Demander une étude');
  
  const classes = await navCTAButton.getAttribute('class');
  expect(classes).toContain('nav-cta');
  expect(classes).toContain('btn-primary');
  expect(classes).toContain('btn');
});

test('Nav CTA button exists on contact.html with correct class', async ({ page }) => {
  await page.goto('/contact.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  await expect(navCTAButton).toBeVisible();
  
  const classes = await navCTAButton.getAttribute('class');
  expect(classes).toContain('nav-cta');
});

test('Nav CTA button exists on realisations.html with correct class', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  await expect(navCTAButton).toBeVisible();
  
  const classes = await navCTAButton.getAttribute('class');
  expect(classes).toContain('nav-cta');
});

test('Nav CTA button exists on services/index.html', async ({ page }) => {
  await page.goto('/services/index.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  await expect(navCTAButton).toBeVisible();
});

test('Nav CTA button has correct flexbox alignment styles', async ({ page }) => {
  await page.goto('/index.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  
  const display = await navCTAButton.evaluate(el => window.getComputedStyle(el).display);
  expect(display).toBe('inline-flex');
  
  const alignItems = await navCTAButton.evaluate(el => window.getComputedStyle(el).alignItems);
  expect(alignItems).toBe('center');
  
  const justifyContent = await navCTAButton.evaluate(el => window.getComputedStyle(el).justifyContent);
  expect(justifyContent).toBe('center');
  
  const lineHeight = await navCTAButton.evaluate(el => window.getComputedStyle(el).lineHeight);
  expect(lineHeight).toBe('1');
});

test('Nav CTA button hover state has correct text color', async ({ page }) => {
  await page.goto('/index.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  
  await navCTAButton.hover();
  await page.waitForTimeout(300);
  
  const hoverColor = await navCTAButton.evaluate(el => window.getComputedStyle(el).color);
  expect(hoverColor).toContain('255');
});

test('Nav CTA button maintains gold background on hover', async ({ page }) => {
  await page.goto('/index.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  
  await navCTAButton.hover();
  await page.waitForTimeout(300);
  
  const backgroundColor = await navCTAButton.evaluate(el => window.getComputedStyle(el).backgroundColor);
  expect(backgroundColor).toMatch(/rgba?\(212,\s*175,\s*55/);
});

test('Hero section button is NOT affected by nav-cta styling', async ({ page }) => {
  await page.goto('/index.html');
  
  const heroButton = page.locator('section.hero .btn-primary');
  
  const classes = await heroButton.getAttribute('class');
  expect(classes).not.toContain('nav-cta');
  
  await expect(heroButton).toContainText('Demander une étude sur-mesure');
  
  const display = await heroButton.evaluate(el => window.getComputedStyle(el).display);
  expect(display).not.toBe('inline-flex');
});

test('Nav CTA button is clickable and links to contact page', async ({ page }) => {
  await page.goto('/index.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  
  const href = await navCTAButton.getAttribute('href');
  expect(href).toBe('contact.html');
  
  await navCTAButton.click();
  
  await expect(page).toHaveURL(/.*contact\.html/);
});

test('Nav CTA button from services page links correctly', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  const navCTAButton = page.locator('nav .btn-primary.nav-cta');
  
  await expect(navCTAButton).toBeVisible();
  
  const href = await navCTAButton.getAttribute('href');
  expect(href).toBe('../contact.html');
  
  await expect(navCTAButton).toBeInViewport();
});
