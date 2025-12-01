const { test, expect } = require('@playwright/test');

test('Modal buttons should work without inline onclick attributes', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('#realisation-modal-overlay');
  await expect(modal).toHaveClass(/is-open/);
  
  const closeBtn = page.locator('.realisation-modal-close');
  const closeOnclick = await closeBtn.getAttribute('onclick');
  expect(closeOnclick).toBeNull();
  
  await closeBtn.click();
  await expect(modal).not.toHaveClass(/is-open/);
});

test('Navigation buttons should work without inline onclick', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const prevBtn = page.locator('.gallery-arrow--prev');
  const nextBtn = page.locator('.gallery-arrow--next');
  
  const prevOnclick = await prevBtn.getAttribute('onclick');
  const nextOnclick = await nextBtn.getAttribute('onclick');
  
  expect(prevOnclick).toBeNull();
  expect(nextOnclick).toBeNull();
  
  const counter = page.locator('#realisation-media-counter');
  const initialCounter = await counter.textContent();
  
  await nextBtn.click();
  await page.waitForTimeout(200);
  
  const newCounter = await counter.textContent();
  expect(newCounter).not.toBe(initialCounter);
  
  await prevBtn.click();
  await page.waitForTimeout(200);
  
  const backCounter = await counter.textContent();
  expect(backCounter).toBe(initialCounter);
});

test('Focus management should work correctly', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  await page.waitForTimeout(100);
  
  const focusedElement = await page.evaluate(() => document.activeElement.className);
  expect(focusedElement).toContain('realisation-modal-close');
});

test('Focus trap should keep focus within modal', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('#realisation-modal-overlay');
  await expect(modal).toHaveClass(/is-open/);
  
  const closeBtn = page.locator('.realisation-modal-close');
  await closeBtn.focus();
  
  await page.keyboard.press('Tab');
  
  const focusedAfterTab = await page.evaluate(() => {
    const el = document.activeElement;
    return {
      className: el.className,
      tagName: el.tagName,
      isInModal: el.closest('.realisation-modal') !== null
    };
  });
  
  expect(focusedAfterTab.isInModal).toBe(true);
});

test('Focus returns to trigger element after modal closes', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  await page.waitForTimeout(100);
  
  const closeBtn = page.locator('.realisation-modal-close');
  await closeBtn.click();
  
  await page.waitForTimeout(100);
  
  const focusedElement = await page.evaluate(() => {
    return {
      className: document.activeElement.className,
      tagName: document.activeElement.tagName
    };
  });
  
  expect(focusedElement.className).toContain('project-card');
});
