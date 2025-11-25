const { test, expect } = require('@playwright/test');

test('should have skip link that appears on focus', async ({ page }) => {
  await page.goto('/');
  
  const skipLink = page.locator('.skip-link');
  await expect(skipLink).toBeAttached();
  
  await page.keyboard.press('Tab');
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  
  await skipLink.click();
  const mainContent = page.locator('#main-content');
  await expect(mainContent).toBeInViewport();
});

test('should have proper ARIA attributes on navigation', async ({ page }) => {
  await page.goto('/');
  
  const homeLink = page.locator('nav a[href="index.html"]');
  await expect(homeLink).toHaveAttribute('aria-current', 'page');
});

test('should have aria-current on correct page in contact', async ({ page }) => {
  await page.goto('/contact.html');
  
  const contactLink = page.locator('nav a[href="contact.html"]');
  await expect(contactLink).toHaveAttribute('aria-current', 'page');
});

test('should have main landmark with id', async ({ page }) => {
  await page.goto('/');
  
  const main = page.locator('main#main-content');
  await expect(main).toBeAttached();
});

test('mobile menu button should have aria-expanded attribute', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const menuButton = page.locator('.menu-toggle');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('should have lazy loading on images', async ({ page }) => {
  await page.goto('/');
  
  const lazyImages = page.locator('img[loading="lazy"]');
  const count = await lazyImages.count();
  expect(count).toBeGreaterThan(0);
});

test('contact form should have aria-live status region after submit', async ({ page }) => {
  await page.goto('/contact.html');
  
  await page.fill('#name', 'Test User');
  await page.fill('#email', 'test@example.com');
  await page.fill('#phone', '0612345678');
  await page.fill('#message', 'Test message');
  
  await page.click('button[type="submit"]');
  
  const statusMessage = page.locator('.form-status[aria-live="polite"]');
  await expect(statusMessage).toBeVisible();
  await expect(statusMessage).toContainText('Merci');
});

test('should toggle mobile menu on button click', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const menuButton = page.locator('.menu-toggle');
  const nav = page.locator('.nav-links');
  
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(nav).not.toHaveClass(/active/);
  
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(nav).toHaveClass(/active/);
  
  await menuButton.click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(nav).not.toHaveClass(/active/);
});

test('should close mobile menu on ESC key', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const menuButton = page.locator('.menu-toggle');
  const nav = page.locator('.nav-links');
  
  await menuButton.click();
  await expect(nav).toHaveClass(/active/);
  
  await page.keyboard.press('Escape');
  await expect(nav).not.toHaveClass(/active/);
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('should close mobile menu when clicking a link', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const menuButton = page.locator('.menu-toggle');
  await menuButton.click();
  
  const nav = page.locator('.nav-links');
  await expect(nav).toHaveClass(/active/);
  
  await page.click('nav a[href="contact.html"]');
  await page.waitForURL('**/contact.html');
  
  const navAfterClick = page.locator('.nav-links');
  await expect(navAfterClick).not.toHaveClass(/active/);
});

test('should use grid-2 utility class on homepage', async ({ page }) => {
  await page.goto('/');
  
  const gridElements = page.locator('.grid-2');
  const count = await gridElements.count();
  expect(count).toBeGreaterThan(0);
});

test('should use section utility classes', async ({ page }) => {
  await page.goto('/');
  
  const sections = page.locator('.section');
  const count = await sections.count();
  expect(count).toBeGreaterThan(0);
});

test('page headers should use modifier classes', async ({ page }) => {
  await page.goto('/contact.html');
  
  const pageHeader = page.locator('.page-header.page-header--contact');
  await expect(pageHeader).toBeAttached();
});

test('hero video should have preload metadata', async ({ page }) => {
  await page.goto('/');
  
  const video = page.locator('video');
  await expect(video).toHaveAttribute('preload', 'metadata');
});

test('images should have decoding async', async ({ page }) => {
  await page.goto('/');
  
  const asyncImages = page.locator('img[decoding="async"]');
  const count = await asyncImages.count();
  expect(count).toBeGreaterThan(0);
});

test('should respect reduced motion preference for video', async ({ page, context }) => {
  await context.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  
  const video = page.locator('video');
  const isPaused = await video.evaluate(v => v.paused);
  expect(isPaused).toBe(true);
});

test('homepage should have unique title and meta description', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/Éclat de Jardin/);
  
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', /Créez votre espace/);
});

test('contact page should have unique title and meta description', async ({ page }) => {
  await page.goto('/contact.html');
  
  await expect(page).toHaveTitle(/Contactez-nous/);
  
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', /contactez notre équipe/);
});

test('homepage should have Open Graph meta tags', async ({ page }) => {
  await page.goto('/');
  
  const ogTitle = page.locator('meta[property="og:title"]');
  await expect(ogTitle).toBeAttached();
  
  const ogDescription = page.locator('meta[property="og:description"]');
  await expect(ogDescription).toBeAttached();
  
  const ogImage = page.locator('meta[property="og:image"]');
  await expect(ogImage).toBeAttached();
  
  const ogUrl = page.locator('meta[property="og:url"]');
  await expect(ogUrl).toBeAttached();
});

test('homepage should have JSON-LD structured data', async ({ page }) => {
  await page.goto('/');
  
  const jsonLd = page.locator('script[type="application/ld+json"]');
  await expect(jsonLd).toBeAttached();
  
  const jsonContent = await jsonLd.textContent();
  const data = JSON.parse(jsonContent);
  
  expect(data['@type']).toBe('LocalBusiness');
  expect(data.name).toBe('Éclat de Jardin');
  expect(data.telephone).toBeTruthy();
  expect(data.address).toBeTruthy();
});

test('contact form should display success message without browser alert', async ({ page }) => {
  await page.goto('/contact.html');
  
  page.on('dialog', dialog => {
    throw new Error('Browser alert detected - should use form-status instead');
  });
  
  await page.fill('#name', 'Jean Dupont');
  await page.fill('#email', 'jean@example.com');
  await page.fill('#phone', '0601020304');
  await page.fill('#message', 'Je souhaite obtenir un devis');
  
  await page.click('button[type="submit"]');
  
  const formStatus = page.locator('.form-status');
  await expect(formStatus).toBeVisible({ timeout: 5000 });
  await expect(formStatus).toContainText('Merci');
});

test('contact form should clear after successful submission', async ({ page }) => {
  await page.goto('/contact.html');
  
  await page.fill('#name', 'Test User');
  await page.fill('#email', 'test@example.com');
  await page.fill('#phone', '0612345678');
  await page.fill('#message', 'Test message');
  
  await page.click('button[type="submit"]');
  
  await page.waitForSelector('.form-status', { state: 'visible' });
  
  await expect(page.locator('#name')).toHaveValue('');
  await expect(page.locator('#email')).toHaveValue('');
  await expect(page.locator('#phone')).toHaveValue('');
  await expect(page.locator('#message')).toHaveValue('');
});

test('form inputs should have proper name attributes', async ({ page }) => {
  await page.goto('/contact.html');
  
  await expect(page.locator('#name')).toHaveAttribute('name', 'name');
  await expect(page.locator('#email')).toHaveAttribute('name', 'email');
  await expect(page.locator('#phone')).toHaveAttribute('name', 'phone');
  await expect(page.locator('#message')).toHaveAttribute('name', 'message');
});

test('should navigate through interactive elements with Tab', async ({ page }) => {
  await page.goto('/');
  
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  
  await page.keyboard.press('Tab');
  const focusedElement = await page.evaluate(() => document.activeElement.tagName);
  expect(['A', 'BUTTON']).toContain(focusedElement);
});

test('focused elements should have visible focus indicators', async ({ page }) => {
  await page.goto('/');
  
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  
  const focusedElement = page.locator(':focus');
  const outline = await focusedElement.evaluate(el => 
    window.getComputedStyle(el).outline
  );
  
  expect(outline).not.toBe('none');
});

test('should hide menu toggle on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('/');
  
  const menuToggle = page.locator('.menu-toggle');
  await expect(menuToggle).toBeHidden();
});

test('should show menu toggle on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const menuToggle = page.locator('.menu-toggle');
  await expect(menuToggle).toBeVisible();
});

test('nav links should be visible on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('/');
  
  const navLinks = page.locator('.nav-links');
  await expect(navLinks).toBeVisible();
});
