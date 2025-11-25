const { test, expect } = require('@playwright/test');

test('Mobile menu has no gap between header and dropdown panel', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const nav = page.locator('.main-nav');
  const menuBtn = page.locator('.mobile-menu-btn');
  
  await expect(menuBtn).toBeVisible();
  
  await menuBtn.click();
  await page.waitForTimeout(700);
  
  await expect(nav).toHaveClass(/active/);
  
  const navStyles = await nav.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      marginTop: computed.marginTop,
      top: computed.top,
      position: computed.position,
      transform: computed.transform
    };
  });
  
  expect(navStyles.position).toBe('absolute');
  expect(navStyles.marginTop).toBe('0px');
  expect(navStyles.transform).not.toContain('translateY(-');
});

test('Homepage "Pourquoi Éclat de Jardin" section displays text above image on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const section = page.locator('.why-us');
  await expect(section).toBeVisible();
  
  const grid = section.locator('.grid-2-col');
  
  const gridStyles = await grid.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      display: computed.display,
      flexDirection: computed.flexDirection,
      gap: computed.gap
    };
  });
  
  expect(gridStyles.display).toBe('flex');
  expect(gridStyles.flexDirection).toBe('column');
  
  const textDiv = grid.locator('div').first();
  const imageDiv = grid.locator('div').last();
  
  const textBox = await textDiv.boundingBox();
  const imageBox = await imageDiv.boundingBox();
  
  expect(textBox.y).toBeLessThan(imageBox.y);
  
  const image = imageDiv.locator('img');
  const imageStyles = await image.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      width: computed.width,
      maxWidth: computed.maxWidth,
      margin: computed.margin
    };
  });
  
  expect(imageStyles.maxWidth).toBe('100%');
});

test('Piscines page "Équipements & Finitions" section displays text above image on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/services/piscines.html');
  
  const section = page.locator('.detail-section').filter({ hasText: 'Équipements & Finitions' });
  await expect(section).toBeVisible();
  
  const grid = section.locator('.grid-2-col');
  
  const gridStyles = await grid.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      display: computed.display,
      flexDirection: computed.flexDirection
    };
  });
  
  expect(gridStyles.display).toBe('flex');
  expect(gridStyles.flexDirection).toBe('column');
  
  const heading = grid.locator('h2', { hasText: 'Équipements & Finitions' });
  const image = grid.locator('img');
  
  await expect(heading).toBeVisible();
  await expect(image).toBeVisible();
  
  const headingBox = await heading.boundingBox();
  const imageBox = await image.boundingBox();
  
  expect(headingBox.y).toBeLessThan(imageBox.y);
});

test('Amenagement page two-column section stacks vertically on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/services/amenagement-exterieur.html');
  
  const section = page.locator('.content-section').filter({ hasText: 'Une approche respectueuse' });
  await expect(section).toBeVisible();
  
  const grid = section.locator('.grid-2-col');
  
  const gridStyles = await grid.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      display: computed.display,
      flexDirection: computed.flexDirection,
      gap: computed.gap
    };
  });
  
  expect(gridStyles.display).toBe('flex');
  expect(gridStyles.flexDirection).toBe('column');
  
  const firstDiv = grid.locator('> div').first();
  const lastDiv = grid.locator('> div').last();
  
  const firstBox = await firstDiv.boundingBox();
  const lastBox = await lastDiv.boundingBox();
  
  expect(firstBox.y).toBeLessThan(lastBox.y);
  expect(firstBox.width).toBeGreaterThan(300);
  expect(lastBox.width).toBeGreaterThan(300);
});

test('All grid layouts collapse to single column on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const servicesGrid = page.locator('.services-grid');
  const servicesStyles = await servicesGrid.evaluate((el) => {
    return window.getComputedStyle(el).gridTemplateColumns;
  });
  expect(servicesStyles).toContain('1fr');
  expect(servicesStyles.split(' ').length).toBe(1);
  
  const testimonialsGrid = page.locator('.testimonials-grid');
  const testimonialsStyles = await testimonialsGrid.evaluate((el) => {
    return window.getComputedStyle(el).gridTemplateColumns;
  });
  expect(testimonialsStyles).toContain('1fr');
  expect(testimonialsStyles.split(' ').length).toBe(1);
});

test('Mobile typography scales appropriately', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const h1 = page.locator('h1').first();
  const h2 = page.locator('h2').first();
  const h3 = page.locator('h3').first();
  
  const h1Size = await h1.evaluate((el) => {
    return window.getComputedStyle(el).fontSize;
  });
  
  const h2Size = await h2.evaluate((el) => {
    return window.getComputedStyle(el).fontSize;
  });
  
  const h3Size = await h3.evaluate((el) => {
    return window.getComputedStyle(el).fontSize;
  });
  
  expect(parseFloat(h1Size)).toBeLessThanOrEqual(40);
  expect(parseFloat(h2Size)).toBeLessThanOrEqual(32);
  expect(parseFloat(h3Size)).toBeLessThanOrEqual(24);
});

test('Process steps display vertically on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const processSteps = page.locator('.process-steps');
  await expect(processSteps).toBeVisible();
  
  const processStyles = await processSteps.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      display: computed.display,
      flexDirection: computed.flexDirection
    };
  });
  
  expect(processStyles.flexDirection).toBe('column');
  
  const steps = processSteps.locator('.step');
  const count = await steps.count();
  expect(count).toBeGreaterThan(0);
  
  for (let i = 0; i < count - 1; i++) {
    const currentBox = await steps.nth(i).boundingBox();
    const nextBox = await steps.nth(i + 1).boundingBox();
    expect(currentBox.y).toBeLessThan(nextBox.y);
  }
});

test('Uses-grid cards display as single column on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/services/amenagement-exterieur.html');
  
  const usesGrid = page.locator('.uses-grid');
  await expect(usesGrid).toBeVisible();
  
  const gridStyles = await usesGrid.evaluate((el) => {
    return window.getComputedStyle(el).gridTemplateColumns;
  });
  
  expect(gridStyles).toBe('1fr');
  
  const cards = usesGrid.locator('.use-card');
  const count = await cards.count();
  
  for (let i = 0; i < count; i++) {
    const card = cards.nth(i);
    const cardBox = await card.boundingBox();
    expect(cardBox.width).toBeGreaterThan(300);
  }
});

test('Detail grid displays single column on piscines page mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/services/piscines.html');
  
  const detailGrid = page.locator('.detail-grid');
  await expect(detailGrid).toBeVisible();
  
  const gridStyles = await detailGrid.evaluate((el) => {
    return window.getComputedStyle(el).gridTemplateColumns;
  });
  
  expect(gridStyles).toBe('1fr');
  
  const cards = detailGrid.locator('.detail-card');
  const count = await cards.count();
  
  for (let i = 0; i < count - 1; i++) {
    const currentBox = await cards.nth(i).boundingBox();
    const nextBox = await cards.nth(i + 1).boundingBox();
    expect(currentBox.y).toBeLessThan(nextBox.y);
  }
});

test('Container padding is optimized for mobile screens', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  const container = page.locator('.container').first();
  
  const containerStyles = await container.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      paddingLeft: computed.paddingLeft,
      paddingRight: computed.paddingRight
    };
  });
  
  expect(containerStyles.paddingLeft).toBe('24px');
  expect(containerStyles.paddingRight).toBe('24px');
});
