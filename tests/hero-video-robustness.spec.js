const { test, expect } = require('@playwright/test');

test('Video should play on homepage load', async ({ page }) => {
  await page.goto('/');
  
  const video = page.locator('.hero-video');
  await expect(video).toBeVisible();
  
  // Check if video is playing
  await page.waitForTimeout(1500); 
  
  const isPaused = await video.evaluate(v => v.paused);
  expect(isPaused).toBe(false);
});

test('Video should continue playing after navigation back', async ({ page }) => {
  await page.goto('/');
  
  // Navigate away
  await page.click('nav >> text=Contact');
  await expect(page).toHaveURL(/.*contact\.html/);
  
  // Navigate back using browser back button
  await page.goBack();
  
  const video = page.locator('.hero-video');
  await expect(video).toBeVisible();
  
  // Check if video is playing
  await page.waitForTimeout(1500);
  const isPaused = await video.evaluate(v => v.paused);
  expect(isPaused).toBe(false);
});

test('Golden CTA button should maintain styles', async ({ page }) => {
  await page.goto('/');
  
  const cta = page.locator('.hero-cta .btn-primary');
  await expect(cta).toBeVisible();
  
  // Check computed styles
  const styles = await cta.evaluate((el) => {
    const s = window.getComputedStyle(el);
    return {
      backgroundColor: s.backgroundColor,
      borderColor: s.borderColor,
      color: s.color
    };
  });
  
  // var(--gold) is #D4AF37 -> rgb(212, 175, 55)
  expect(styles.backgroundColor).toBe('rgb(212, 175, 55)');
  expect(styles.borderColor).toBe('rgb(212, 175, 55)');
  expect(styles.color).toBe('rgb(255, 255, 255)');
});
