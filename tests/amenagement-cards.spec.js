const { test, expect } = require('@playwright/test');

test('Aménagement Extérieur cards have correct styles and hover effects', async ({ page }) => {
  await page.goto('http://localhost:8081/services/amenagement-exterieur.html');

  const card = page.locator('.use-card').first();
  await expect(card).toBeVisible();

  // Check initial styles
  // var(--transition-fast) is 0.3s ease
  await expect(card).toHaveCSS('transition-duration', '0.3s');
  await expect(card).toHaveCSS('transition-timing-function', 'ease');
  
  // var(--grey-perl) is #E6E2DD -> rgb(230, 226, 221)
  await expect(card).toHaveCSS('border-bottom-color', 'rgb(230, 226, 221)');
  await expect(card).toHaveCSS('border-bottom-style', 'solid');
  await expect(card).toHaveCSS('border-bottom-width', '1px');

  // Check hover effect
  await card.hover();
  
  // Wait for transition to complete
  await page.waitForTimeout(500);

  // Check transform: translateY(-5px) -> matrix(1, 0, 0, 1, 0, -5)
  await expect(card).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -5)');

  // Check box-shadow: 0 10px 30px rgba(0,0,0,0.1)
  // Browsers normalize box-shadow. It usually puts color first.
  await expect(card).toHaveCSS('box-shadow', 'rgba(0, 0, 0, 0.1) 0px 10px 30px 0px');
});
