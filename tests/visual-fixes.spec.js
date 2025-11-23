const { test, expect } = require('@playwright/test');

test('Logo should be text-based "ÉCLAT DE JARDIN"', async ({ page }) => {
  const pages = ['/', '/contact.html', '/services/amenagement-exterieur.html'];
  
  for (const url of pages) {
    await page.goto(url);
    const logo = page.locator('.logo-text').first();
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText('ÉCLAT DE JARDIN');
    
    // Ensure no image logo exists in header
    const imgLogo = page.locator('.site-header .logo img');
    await expect(imgLogo).not.toBeVisible();
  }
});

test('Internal page hero titles should be white', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  const title = page.locator('.page-header h1');
  await expect(title).toHaveCSS('color', 'rgb(255, 255, 255)');
});

test('Outdoor Landscaping page should use grid layout', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  const grid = page.locator('.uses-grid');
  await expect(grid).toBeVisible();
  await expect(grid).toHaveCSS('display', 'grid');
  
  // Check for gap (spacing)
  await expect(grid).toHaveCSS('gap', '32px'); // 2rem = 32px
});

test('CTA sections should be centered', async ({ page }) => {
  await page.goto('/services/index.html');
  const cta = page.locator('.cta-section');
  await expect(cta).toHaveCSS('text-align', 'center');
});

test('Contact page should have a real Google Map iframe', async ({ page }) => {
  await page.goto('/contact.html');
  const mapFrame = page.locator('.map-container iframe');
  await expect(mapFrame).toBeVisible();
  const src = await mapFrame.getAttribute('src');
  expect(src).toContain('google.com/maps/embed');
});
