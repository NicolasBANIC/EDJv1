const { test, expect } = require('@playwright/test');


test('Home page should load with correct title', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle(/Éclat de Jardin/);
  await expect(page.locator('h1')).toContainText('Créateurs d’espaces extérieurs d’exception');
});

test('Navigation should work', async ({ page }) => {
  await page.goto('');
  
  // Click on Services
  await page.click('nav >> text=Services');
  await expect(page).toHaveURL(/.*services\/index\.html/);
  await expect(page.locator('h1')).toContainText('Nos Services');

  // Go back home
  await page.click('.logo');
  await expect(page).toHaveURL(/.*index\.html/);

  // Click on Réalisations
  await page.click('nav >> text=Réalisations');
  await expect(page).toHaveURL(/.*realisations\.html/);
  await expect(page.locator('h1')).toContainText('Nos Réalisations');
});

test('Contact page should have a form', async ({ page }) => {
  await page.goto('/contact.html');
  await expect(page.locator('form#contactForm')).toBeVisible();
  await expect(page.locator('input#name')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});

test('Service pages should be accessible', async ({ page }) => {
  await page.goto('/services/piscines.html');
  await expect(page.locator('h1')).toContainText('Piscines d\'Exception');

  await page.goto('/services/amenagement-exterieur.html');
  await expect(page.locator('h1')).toContainText('Aménagement Extérieur');

  await page.goto('/services/containers.html');
  await expect(page.locator('h1')).toContainText('Containers Architecturaux');
});

