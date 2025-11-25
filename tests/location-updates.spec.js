const { test, expect } = require('@playwright/test');

test('Homepage testimonials should show correct French names and Alsace cities', async ({ page }) => {
  await page.goto('/index.html');
  
  const testimonials = page.locator('.testimonial-card');
  await expect(testimonials).toHaveCount(3);

  await expect(testimonials.nth(0)).toContainText('Claire M.');
  await expect(testimonials.nth(0)).toContainText('Strasbourg (67)');

  await expect(testimonials.nth(1)).toContainText('Thomas R.');
  await expect(testimonials.nth(1)).toContainText('Schiltigheim (67)');

  await expect(testimonials.nth(2)).toContainText('Famille Becker');
  await expect(testimonials.nth(2)).toContainText('Illkirch-Graffenstaden (67)');
});

test('Contact page Google Maps iframe should point to Schiltigheim address', async ({ page }) => {
  await page.goto('/contact.html');
  
  const iframe = page.locator('.contact-map-card iframe');
  await expect(iframe).toBeVisible();
  
  const src = await iframe.getAttribute('src');
  expect(src).toContain('1+Rue+Kellermann+67300+Schiltigheim+France');
});

test('Realisations page should show updated Alsace locations in cards and modals', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const projects = page.locator('.project-card');
  
  // Check cards text
  await expect(projects.nth(0)).toContainText('Strasbourg');
  await expect(projects.nth(1)).toContainText('Schiltigheim');
  await expect(projects.nth(2)).toContainText('Illkirch-Graffenstaden');
  await expect(projects.nth(3)).toContainText('Obernai');
  await expect(projects.nth(4)).toContainText('Haguenau');
  await expect(projects.nth(5)).toContainText('Bischheim');

  // Check modal content for one project (e.g., first one)
  await projects.nth(0).click();
  const modal = page.locator('#project-modal');
  await expect(modal).toBeVisible();
  await expect(modal.locator('#modal-location')).toHaveText('Strasbourg');
  
  // Close modal
  await page.locator('.close-modal').click();
  await expect(modal).not.toBeVisible();

  // Check modal content for another project (e.g., second one)
  await projects.nth(1).click();
  await expect(modal).toBeVisible();
  await expect(modal.locator('#modal-location')).toHaveText('Schiltigheim');
});
