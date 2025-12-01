const { test, expect } = require('@playwright/test');

test('Hero section should have background video and overlay', async ({ page }) => {
  await page.goto('/');

  // Check video
  const video = page.locator('.hero-video');
  await expect(video).toBeVisible();
  await expect(video).toHaveAttribute('autoplay', '');
  await expect(video).toHaveAttribute('muted', '');
  await expect(video).toHaveAttribute('loop', '');
  await expect(video).toHaveAttribute('playsinline', '');
  
  const source = video.locator('source');
  await expect(source).toHaveAttribute('src', 'assets/video/8335195-uhd_3840_2160_25fps.webm');

  // Check fallback
  const fallback = page.locator('.hero-fallback');
  await expect(fallback).toHaveAttribute('src', 'assets/images/hero-pool.jpg');
  // It should be hidden initially (opacity 0) but present in DOM
  await expect(fallback).toHaveCSS('opacity', '0');

  // Check overlay
  const overlay = page.locator('.hero-overlay');
  await expect(overlay).toBeVisible();
  await expect(overlay).toHaveCSS('background-color', 'rgba(0, 0, 0, 0.35)');

  // Check content z-index
  const content = page.locator('.hero-content');
  await expect(content).toBeVisible();
  await expect(content).toHaveCSS('z-index', '2');
});
