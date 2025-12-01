const { test, expect } = require('@playwright/test');

test('Réalisations page should load with all projects displayed', async ({ page }) => {
  await page.goto('/realisations.html');
  await expect(page).toHaveTitle(/Réalisations/);
  await expect(page.locator('h1')).toContainText('Nos Réalisations');
  
  const projectCards = page.locator('.project-card');
  await expect(projectCards.first()).toBeVisible();
  const count = await projectCards.count();
  expect(count).toBeGreaterThan(0);
});

test('should filter projects by Aménagements extérieurs', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const allCardsCount = await page.locator('.project-card').count();
  
  await page.click('button[data-filter="amenagement"]');
  await expect(page.locator('button[data-filter="amenagement"]')).toHaveClass(/active/);
  
  await page.waitForTimeout(300);
  const amenagementCards = page.locator('.project-card[data-category="amenagement"]');
  const filteredCount = await amenagementCards.count();
  
  expect(filteredCount).toBeGreaterThan(0);
  expect(filteredCount).toBeLessThanOrEqual(allCardsCount);
});

test('should filter projects by Piscines', async ({ page }) => {
  await page.goto('/realisations.html');
  
  await page.click('button[data-filter="piscine"]');
  await expect(page.locator('button[data-filter="piscine"]')).toHaveClass(/active/);
  
  await page.waitForTimeout(300);
  const piscineCards = page.locator('.project-card[data-category="piscine"]');
  const filteredCount = await piscineCards.count();
  
  expect(filteredCount).toBeGreaterThan(0);
});

test('should filter projects by Maçonnerie paysagère', async ({ page }) => {
  await page.goto('/realisations.html');
  
  await page.click('button[data-filter="maconnerie"]');
  await expect(page.locator('button[data-filter="maconnerie"]')).toHaveClass(/active/);
  
  await page.waitForTimeout(300);
  const maconnerieCards = page.locator('.project-card[data-category="maconnerie"]');
  const filteredCount = await maconnerieCards.count();
  
  expect(filteredCount).toBeGreaterThan(0);
});

test('should show all projects when Tous filter is clicked', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const initialCount = await page.locator('.project-card').count();
  
  await page.click('button[data-filter="piscine"]');
  await page.waitForTimeout(300);
  
  await page.click('button[data-filter="all"]');
  await expect(page.locator('button[data-filter="all"]')).toHaveClass(/active/);
  
  await page.waitForTimeout(300);
  const finalCount = await page.locator('.project-card').count();
  
  expect(finalCount).toBe(initialCount);
});

test('should open modal when clicking a project card', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('#realisation-modal-overlay');
  await expect(modal).toHaveClass(/is-open/);
  await expect(modal).toHaveAttribute('aria-hidden', 'false');
  
  const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
  expect(bodyOverflow).toBe('hidden');
});

test('should display correct project information in modal', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modalTitle = page.locator('#realisation-modal-title');
  const modalLocation = page.locator('#realisation-modal-location');
  const modalDescription = page.locator('#realisation-modal-description');
  const mediaCounter = page.locator('#realisation-media-counter');
  
  await expect(modalTitle).toBeVisible();
  await expect(modalLocation).toBeVisible();
  await expect(modalDescription).toBeVisible();
  await expect(mediaCounter).toBeVisible();
  
  const counterText = await mediaCounter.textContent();
  expect(counterText).toMatch(/^\d+ \/ \d+$/);
});

test('should display media in modal', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const mediaWrapper = page.locator('#realisation-media-wrapper');
  await expect(mediaWrapper).toBeVisible();
  
  const media = mediaWrapper.locator('img, video');
  await expect(media).toBeVisible();
  await expect(media).toHaveCount(1);
});

test('should close modal with close button', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('#realisation-modal-overlay');
  await expect(modal).toHaveClass(/is-open/);
  
  const closeButton = page.locator('.realisation-modal-close');
  await closeButton.click();
  
  await expect(modal).not.toHaveClass(/is-open/);
  await expect(modal).toHaveAttribute('aria-hidden', 'true');
  
  const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
  expect(bodyOverflow).toBe('');
});

test('should close modal with Escape key', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('#realisation-modal-overlay');
  await expect(modal).toHaveClass(/is-open/);
  
  await page.keyboard.press('Escape');
  
  await expect(modal).not.toHaveClass(/is-open/);
  await expect(modal).toHaveAttribute('aria-hidden', 'true');
});

test('should close modal when clicking outside', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('#realisation-modal-overlay');
  await expect(modal).toHaveClass(/is-open/);
  
  await modal.click({ position: { x: 10, y: 10 } });
  
  await expect(modal).not.toHaveClass(/is-open/);
});

test('should navigate to next media with arrow button', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const counter = page.locator('#realisation-media-counter');
  const initialCounter = await counter.textContent();
  
  const nextButton = page.locator('.gallery-arrow--next');
  await nextButton.click();
  
  await page.waitForTimeout(200);
  const newCounter = await counter.textContent();
  
  expect(newCounter).not.toBe(initialCounter);
});

test('should navigate to previous media with arrow button', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const nextButton = page.locator('.gallery-arrow--next');
  await nextButton.click();
  await page.waitForTimeout(200);
  
  const counter = page.locator('#realisation-media-counter');
  const counterAfterNext = await counter.textContent();
  
  const prevButton = page.locator('.gallery-arrow--prev');
  await prevButton.click();
  await page.waitForTimeout(200);
  
  const counterAfterPrev = await counter.textContent();
  expect(counterAfterPrev).toBe('1 / ' + counterAfterNext.split(' / ')[1]);
});

test('should navigate with keyboard arrow keys', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const counter = page.locator('#realisation-media-counter');
  const initialCounter = await counter.textContent();
  
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(200);
  
  const newCounter = await counter.textContent();
  expect(newCounter).not.toBe(initialCounter);
  
  await page.keyboard.press('ArrowLeft');
  await page.waitForTimeout(200);
  
  const backCounter = await counter.textContent();
  expect(backCounter).toBe(initialCounter);
});

test('should wrap around when navigating past last media', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const counter = page.locator('#realisation-media-counter');
  const counterText = await counter.textContent();
  const totalMedia = parseInt(counterText.split(' / ')[1]);
  
  const nextButton = page.locator('.gallery-arrow--next');
  
  for (let i = 0; i < totalMedia; i++) {
    await nextButton.click();
    await page.waitForTimeout(100);
  }
  
  const finalCounter = await counter.textContent();
  expect(finalCounter).toBe('1 / ' + totalMedia);
});

test('should wrap around when navigating before first media', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const counter = page.locator('#realisation-media-counter');
  const counterText = await counter.textContent();
  const totalMedia = parseInt(counterText.split(' / ')[1]);
  
  const prevButton = page.locator('.gallery-arrow--prev');
  await prevButton.click();
  await page.waitForTimeout(200);
  
  const finalCounter = await counter.textContent();
  expect(finalCounter).toBe(totalMedia + ' / ' + totalMedia);
});

test('should display arrows correctly on mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const prevArrow = page.locator('.gallery-arrow--prev');
  const nextArrow = page.locator('.gallery-arrow--next');
  
  await expect(prevArrow).toBeVisible();
  await expect(nextArrow).toBeVisible();
  
  const prevBox = await prevArrow.boundingBox();
  const nextBox = await nextArrow.boundingBox();
  
  expect(prevBox).toBeTruthy();
  expect(nextBox).toBeTruthy();
});

test('should maintain modal functionality on tablet viewport', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('#realisation-modal-overlay');
  await expect(modal).toHaveClass(/is-open/);
  
  const closeButton = page.locator('.realisation-modal-close');
  await expect(closeButton).toBeVisible();
  
  await closeButton.click();
  await expect(modal).not.toHaveClass(/is-open/);
});

test('should display description or fallback text for multiple projects', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const cards = page.locator('.project-card');
  const cardCount = await cards.count();
  
  for (let i = 0; i < Math.min(3, cardCount); i++) {
    await cards.nth(i).click();
    
    const modalDescription = page.locator('#realisation-modal-description');
    await expect(modalDescription).toBeVisible();
    
    const descText = await modalDescription.textContent();
    expect(descText.trim().length).toBeGreaterThan(0);
    
    const closeButton = page.locator('.realisation-modal-close');
    await closeButton.click();
    await page.waitForTimeout(300);
  }
});
