const { test, expect } = require('@playwright/test');

test('Hero section has gradient transition pseudo-element', async ({ page }) => {
  await page.goto('');
  
  const hero = page.locator('.hero');
  await expect(hero).toBeVisible();

  const afterStyles = await hero.evaluate((el) => {
    const computed = window.getComputedStyle(el, '::after');
    return {
      content: computed.content,
      position: computed.position,
      bottom: computed.bottom,
      left: computed.left,
      width: computed.width,
      height: computed.height,
      background: computed.backgroundImage,
      zIndex: computed.zIndex,
      pointerEvents: computed.pointerEvents
    };
  });

  expect(afterStyles.content).toBe('""');
  expect(afterStyles.position).toBe('absolute');
  expect(afterStyles.bottom).toBe('0px');
  expect(afterStyles.left).toBe('0px');
  expect(afterStyles.height).toBe('120px');
  expect(afterStyles.background).toContain('linear-gradient');
  expect(afterStyles.background).toContain('rgba(250, 248, 244, 0.08)');
  expect(afterStyles.zIndex).toBe('1');
  expect(afterStyles.pointerEvents).toBe('none');
});

test('Hero gradient transitions from beige-tinted to transparent', async ({ page }) => {
  await page.goto('');
  
  const hero = page.locator('.hero');
  const gradient = await hero.evaluate((el) => {
    const computed = window.getComputedStyle(el, '::after');
    return computed.backgroundImage;
  });

  expect(gradient).toContain('to top');
  expect(gradient).toMatch(/rgba\(250,\s*248,\s*244,\s*0\.08\)/);
  expect(gradient).toMatch(/transparent|rgba\(0,\s*0,\s*0,\s*0\)/);
});

test('Service card 1 (Piscines) has water ripple micro-texture', async ({ page }) => {
  await page.goto('');
  
  const firstCard = page.locator('.services-grid .service-card').nth(0);
  await expect(firstCard).toBeVisible();

  const beforeStyles = await firstCard.evaluate((el) => {
    const computed = window.getComputedStyle(el, '::before');
    return {
      content: computed.content,
      position: computed.position,
      width: computed.width,
      height: computed.height,
      opacity: computed.opacity,
      pointerEvents: computed.pointerEvents,
      backgroundImage: computed.backgroundImage,
      backgroundRepeat: computed.backgroundRepeat,
      backgroundSize: computed.backgroundSize,
      top: computed.top,
      right: computed.right
    };
  });

  expect(beforeStyles.content).toBe('""');
  expect(beforeStyles.position).toBe('absolute');
  expect(beforeStyles.width).toBe('180px');
  expect(beforeStyles.height).toBe('180px');
  expect(beforeStyles.opacity).toBe('0.06');
  expect(beforeStyles.pointerEvents).toBe('none');
  expect(beforeStyles.backgroundRepeat).toBe('no-repeat');
  expect(beforeStyles.backgroundSize).toBe('contain');
  expect(beforeStyles.top).toBe('-20px');
  expect(beforeStyles.right).toBe('-20px');
  expect(beforeStyles.backgroundImage).toContain('data:image/svg+xml');
  expect(beforeStyles.backgroundImage).toContain('D4AF37');
});

test('Service card 2 (Aménagement) has garden geometric micro-texture', async ({ page }) => {
  await page.goto('');
  
  const secondCard = page.locator('.services-grid .service-card').nth(1);
  await expect(secondCard).toBeVisible();

  const beforeStyles = await secondCard.evaluate((el) => {
    const computed = window.getComputedStyle(el, '::before');
    return {
      content: computed.content,
      position: computed.position,
      opacity: computed.opacity,
      backgroundImage: computed.backgroundImage,
      bottom: computed.bottom,
      right: computed.right
    };
  });

  expect(beforeStyles.content).toBe('""');
  expect(beforeStyles.position).toBe('absolute');
  expect(beforeStyles.opacity).toBe('0.06');
  expect(beforeStyles.bottom).toBe('-15px');
  expect(beforeStyles.right).toBe('-15px');
  expect(beforeStyles.backgroundImage).toContain('data:image/svg+xml');
  expect(beforeStyles.backgroundImage).toContain('D4AF37');
});

test('Service card 3 (Containers) has architectural vertical micro-texture', async ({ page }) => {
  await page.goto('');
  
  const thirdCard = page.locator('.services-grid .service-card').nth(2);
  await expect(thirdCard).toBeVisible();

  const beforeStyles = await thirdCard.evaluate((el) => {
    const computed = window.getComputedStyle(el, '::before');
    return {
      content: computed.content,
      position: computed.position,
      width: computed.width,
      height: computed.height,
      opacity: computed.opacity,
      backgroundImage: computed.backgroundImage,
      top: computed.top,
      right: computed.right
    };
  });

  expect(beforeStyles.content).toBe('""');
  expect(beforeStyles.position).toBe('absolute');
  expect(beforeStyles.width).toBe('180px');
  expect(beforeStyles.height).toBe('180px');
  expect(beforeStyles.opacity).toBe('0.06');
  expect(beforeStyles.top).toBe('-10px');
  expect(beforeStyles.right).toBe('-10px');
  expect(beforeStyles.backgroundImage).toContain('data:image/svg+xml');
  expect(beforeStyles.backgroundImage).toContain('rect');
});

test('All service cards have base opacity of 0.06', async ({ page }) => {
  await page.goto('');
  
  const cards = page.locator('.services-grid .service-card');
  const count = await cards.count();
  expect(count).toBe(3);

  for (let i = 0; i < count; i++) {
    const card = cards.nth(i);
    const opacity = await card.evaluate((el) => {
      return window.getComputedStyle(el, '::before').opacity;
    });
    expect(opacity).toBe('0.06');
  }
});

test('Service card micro-texture increases opacity to 0.08 on hover', async ({ page }) => {
  await page.goto('');
  
  const firstCard = page.locator('.services-grid .service-card').nth(0);
  await expect(firstCard).toBeVisible();

  await firstCard.hover();
  await page.waitForTimeout(300);

  const opacityOnHover = await firstCard.evaluate((el) => {
    return window.getComputedStyle(el, '::before').opacity;
  });

  expect(opacityOnHover).toBe('0.08');
});

test('All three service cards have unique SVG patterns', async ({ page }) => {
  await page.goto('');
  
  const cards = page.locator('.services-grid .service-card');
  const svgPatterns = [];

  for (let i = 0; i < 3; i++) {
    const card = cards.nth(i);
    const bgImage = await card.evaluate((el) => {
      return window.getComputedStyle(el, '::before').backgroundImage;
    });
    svgPatterns.push(bgImage);
  }

  expect(svgPatterns[0]).not.toBe(svgPatterns[1]);
  expect(svgPatterns[1]).not.toBe(svgPatterns[2]);
  expect(svgPatterns[0]).not.toBe(svgPatterns[2]);
});

test('Service card 1 SVG contains water ripple elements (paths and circles)', async ({ page }) => {
  await page.goto('');
  
  const firstCard = page.locator('.services-grid .service-card').nth(0);
  const svgData = await firstCard.evaluate((el) => {
    return window.getComputedStyle(el, '::before').backgroundImage;
  });

  expect(svgData).toContain('path');
  expect(svgData).toContain('circle');
  expect(svgData).toContain('Q');
});

test('Service card 2 SVG contains garden geometric elements (rectangles and lines)', async ({ page }) => {
  await page.goto('');
  
  const secondCard = page.locator('.services-grid .service-card').nth(1);
  const svgData = await secondCard.evaluate((el) => {
    return window.getComputedStyle(el, '::before').backgroundImage;
  });

  expect(svgData).toContain('path');
  expect(svgData).toContain('line');
  expect(svgData).toContain('circle');
});

test('Service card 3 SVG contains architectural rectangles', async ({ page }) => {
  await page.goto('');
  
  const thirdCard = page.locator('.services-grid .service-card').nth(2);
  const svgData = await thirdCard.evaluate((el) => {
    return window.getComputedStyle(el, '::before').backgroundImage;
  });

  expect(svgData).toContain('rect');
  expect(svgData).toContain('line');
});

test('Service card content layout remains unchanged', async ({ page }) => {
  await page.goto('');
  
  const cards = page.locator('.services-grid .service-card');
  
  for (let i = 0; i < 3; i++) {
    const card = cards.nth(i);
    const h3 = card.locator('h3');
    const p = card.locator('p');
    const link = card.locator('a');

    await expect(h3).toBeVisible();
    await expect(p).toBeVisible();
    await expect(link).toBeVisible();
  }
});

test('Micro-textures use brand gold color (#D4AF37)', async ({ page }) => {
  await page.goto('');
  
  const firstCard = page.locator('.services-grid .service-card').nth(0);
  const svgData = await firstCard.evaluate((el) => {
    return window.getComputedStyle(el, '::before').backgroundImage;
  });

  expect(svgData).toContain('D4AF37');
});

test('Hero gradient has full width', async ({ page }) => {
  await page.goto('');
  
  const hero = page.locator('.hero');
  const heroWidth = await hero.evaluate((el) => el.offsetWidth);
  
  const afterWidth = await hero.evaluate((el) => {
    const computed = window.getComputedStyle(el, '::after');
    return parseInt(computed.width);
  });

  expect(afterWidth).toBe(heroWidth);
});

test('Service cards are positioned relatively to contain absolute pseudo-elements', async ({ page }) => {
  await page.goto('');
  
  const cards = page.locator('.services-grid .service-card');
  
  for (let i = 0; i < 3; i++) {
    const card = cards.nth(i);
    const position = await card.evaluate((el) => {
      return window.getComputedStyle(el).position;
    });
    
    expect(position).toBe('relative');
  }
});
