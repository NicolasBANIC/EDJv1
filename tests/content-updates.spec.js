const { test, expect } = require('@playwright/test');

test('About Page - Team Section', async ({ page }) => {
  await page.goto('/a-propos.html');
  
  const teamMembers = page.locator('.team-member');
  await expect(teamMembers).toHaveCount(1);
  
  const memberName = teamMembers.locator('h4');
  await expect(memberName).toHaveText('Salih Yilmaz');
  
  const memberRole = teamMembers.locator('.member-role');
  await expect(memberRole).toHaveText('Directeur & Fondateur');
  
  const memberDesc = teamMembers.locator('p').nth(1);
  await expect(memberDesc).toContainText('Salih Yilmaz dirige Éclat de Jardin');
});

test('Contact Page - Address Block', async ({ page }) => {
  await page.goto('/contact.html');
  
  const addressBlock = page.locator('.info-item').filter({ hasText: 'Adresse' });
  await expect(addressBlock).toContainText('1 Rue Kellermann');
  await expect(addressBlock).toContainText('67300 Schiltigheim, France');
  await expect(addressBlock).not.toContainText('Salih Yilmaz');
});

test('Homepage - Footer Address', async ({ page }) => {
  await page.goto('/');
  
  const footerContact = page.locator('.footer-col').filter({ hasText: 'Contact' });
  await expect(footerContact).toContainText('1 Rue Kellermann');
  await expect(footerContact).toContainText('67300 Schiltigheim, France');
});

test('Mentions Légales - Legal Info', async ({ page }) => {
  await page.goto('/mentions-legales.html');
  
  const content = page.locator('.legal-content');
  
  // Check Director
  await expect(content).toContainText('Directeur de la publication : Salih Yilmaz');
  
  // Check Siège Social
  await expect(content).toContainText('Siège social : 1 Rue Kellermann, 67300 Schiltigheim, France');
});
