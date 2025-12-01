const { test, expect } = require('@playwright/test');

test('Modal should have fixed height and prevent jumping', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modal = page.locator('.realisation-modal');
  await expect(modal).toBeVisible();
  
  const initialModalBox = await modal.boundingBox();
  expect(initialModalBox).toBeTruthy();
  
  const initialHeight = initialModalBox.height;
  
  const nextBtn = page.locator('.gallery-arrow--next');
  await nextBtn.click();
  await page.waitForTimeout(400);
  
  const newModalBox = await modal.boundingBox();
  const newHeight = newModalBox.height;
  
  expect(Math.abs(newHeight - initialHeight)).toBeLessThan(5);
});

test('Media wrapper should not have inline maxHeight styles', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  await page.waitForTimeout(100);
  
  const mediaElement = page.locator('.realisation-media-wrapper img, .realisation-media-wrapper video').first();
  await expect(mediaElement).toBeVisible();
  
  const maxHeight = await mediaElement.evaluate(el => el.style.maxHeight);
  expect(maxHeight).toBe('');
});

test('Modal header should always be visible and not covered by media', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const header = page.locator('.realisation-modal-header');
  const title = page.locator('.realisation-modal-title');
  const description = page.locator('.realisation-modal-description');
  
  await expect(header).toBeVisible();
  await expect(title).toBeVisible();
  await expect(description).toBeVisible();
  
  const headerBox = await header.boundingBox();
  const titleBox = await title.boundingBox();
  
  expect(headerBox).toBeTruthy();
  expect(titleBox).toBeTruthy();
  expect(titleBox.y).toBeGreaterThan(0);
});

test('Media should fade in smoothly when changing slides', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  await page.waitForTimeout(100);
  
  const mediaElement = page.locator('.realisation-media-wrapper img, .realisation-media-wrapper video').first();
  
  const animation = await mediaElement.evaluate(el => {
    const styles = window.getComputedStyle(el);
    return styles.animation || styles.webkitAnimation;
  });
  
  expect(animation).toContain('fadeIn');
});

test('Modal body should use flex layout and fill available space', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const firstCard = page.locator('.project-card').first();
  await firstCard.click();
  
  const modalBody = page.locator('.realisation-modal-body');
  await expect(modalBody).toBeVisible();
  
  const styles = await modalBody.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      display: computed.display,
      flex: computed.flex,
      overflow: computed.overflow
    };
  });
  
  expect(styles.display).toBe('flex');
  expect(styles.flex).toContain('1');
  expect(styles.overflow).toBe('hidden');
});
