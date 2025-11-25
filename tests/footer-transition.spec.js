const { test, expect } = require('@playwright/test');

test('Footer has gold border on homepage', async ({ page }) => {
  await page.goto('');
  
  const footer = page.locator('.site-footer');
  await expect(footer).toBeVisible();

  const styles = await footer.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      borderTopWidth: computed.borderTopWidth,
      borderTopColor: computed.borderTopColor,
      boxShadow: computed.boxShadow,
      backgroundColor: computed.backgroundColor
    };
  });

  expect(styles.borderTopWidth).toBe('1px');
  expect(styles.borderTopColor).toMatch(/rgba?\(212,\s*175,\s*55/);
  expect(styles.backgroundColor).toBe('rgb(13, 42, 74)');
});

test('Footer has upward shadow on homepage', async ({ page }) => {
  await page.goto('');
  
  const footer = page.locator('.site-footer');
  const boxShadow = await footer.evaluate((el) => {
    return window.getComputedStyle(el).boxShadow;
  });

  expect(boxShadow).toContain('-15px');
  expect(boxShadow).toContain('40px');
  expect(boxShadow).toMatch(/rgba?\(0,\s*0,\s*0/);
});

test('Footer gold border on About page', async ({ page }) => {
  await page.goto('/a-propos.html');
  
  const footer = page.locator('.site-footer');
  const borderColor = await footer.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    const match = computed.borderTopColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return match ? {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    } : null;
  });

  expect(borderColor.r).toBe(212);
  expect(borderColor.g).toBe(175);
  expect(borderColor.b).toBe(55);
});

test('Footer gold border on Contact page', async ({ page }) => {
  await page.goto('/contact.html');
  
  const footer = page.locator('.site-footer');
  const borderTopWidth = await footer.evaluate((el) => {
    return window.getComputedStyle(el).borderTopWidth;
  });

  expect(borderTopWidth).toBe('1px');
});

test('Footer gold border on Realisations page', async ({ page }) => {
  await page.goto('/realisations.html');
  
  const footer = page.locator('.site-footer');
  const borderTopWidth = await footer.evaluate((el) => {
    return window.getComputedStyle(el).borderTopWidth;
  });

  expect(borderTopWidth).toBe('1px');
});

test('Footer gold border on Piscines service page', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  const footer = page.locator('.site-footer');
  const styles = await footer.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      borderTopWidth: computed.borderTopWidth,
      boxShadow: computed.boxShadow
    };
  });

  expect(styles.borderTopWidth).toBe('1px');
  expect(styles.boxShadow).toContain('-15px');
});

test('Footer gold border on Amenagement service page', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const footer = page.locator('.site-footer');
  const borderTopWidth = await footer.evaluate((el) => {
    return window.getComputedStyle(el).borderTopWidth;
  });

  expect(borderTopWidth).toBe('1px');
});

test('Footer gold border on Containers service page', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const footer = page.locator('.site-footer');
  const borderTopWidth = await footer.evaluate((el) => {
    return window.getComputedStyle(el).borderTopWidth;
  });

  expect(borderTopWidth).toBe('1px');
});

test('Footer content remains unchanged', async ({ page }) => {
  await page.goto('');
  
  const footer = page.locator('.site-footer');
  await expect(footer.locator('.logo-text')).toContainText('ÉCLAT DE JARDIN');
  await expect(footer.locator('.footer-col').first()).toBeVisible();
  await expect(footer.locator('.footer-bottom')).toBeVisible();
});

test('Footer grid structure preserved', async ({ page }) => {
  await page.goto('');
  
  const footerGrid = page.locator('.footer-grid');
  await expect(footerGrid).toBeVisible();
  
  const columns = footerGrid.locator('.footer-col');
  const count = await columns.count();
  expect(count).toBeGreaterThanOrEqual(3);
});

test('Shadow Y-offset is negative (upward)', async ({ page }) => {
  await page.goto('');
  
  const footer = page.locator('.site-footer');
  const shadowDetails = await footer.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    const shadow = computed.boxShadow;
    const parts = shadow.match(/rgba?\([^)]+\)\s+([-\d.]+px)\s+([-\d.]+px)\s+([-\d.]+px)/);
    return parts ? {
      yOffset: parts[2],
      blurRadius: parts[3]
    } : null;
  });

  expect(shadowDetails.yOffset).toBe('-15px');
  expect(shadowDetails.blurRadius).toBe('40px');
});
