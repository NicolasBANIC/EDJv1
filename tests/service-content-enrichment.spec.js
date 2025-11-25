const { test, expect } = require('@playwright/test');

test('Homepage - Piscines card mentions all pool types', async ({ page }) => {
  await page.goto('/');
  
  const piscinesCard = page.locator('.service-card').filter({ hasText: 'Piscines' });
  await expect(piscinesCard).toBeVisible();
  
  const cardText = await piscinesCard.locator('p').textContent();
  expect(cardText).toContain('coques');
  expect(cardText).toContain('maçonnées');
  expect(cardText).toContain('toutes dimensions');
  expect(cardText).toContain('containers');
});

test('Homepage - Aménagement Extérieur card mentions all services', async ({ page }) => {
  await page.goto('/');
  
  const amenagementCard = page.locator('.service-card').filter({ hasText: 'Aménagement Extérieur' });
  await expect(amenagementCard).toBeVisible();
  
  const cardText = await amenagementCard.locator('p').textContent();
  expect(cardText).toContain('Terrasses');
  expect(cardText).toContain('escaliers');
  expect(cardText).toContain('soutènements');
  expect(cardText).toContain('enrochements');
  expect(cardText).toContain('gazon');
  expect(cardText).toContain('clôtures');
});

test('Homepage - Containers card mentions all applications', async ({ page }) => {
  await page.goto('/');
  
  const containersCard = page.locator('.service-card').filter({ hasText: 'Containers' });
  await expect(containersCard).toBeVisible();
  
  const cardText = await containersCard.locator('p').textContent();
  expect(cardText).toContain('pool house');
  expect(cardText).toContain('logement');
  expect(cardText).toContain('stockage');
  expect(cardText).toContain('locaux vélos');
  expect(cardText).toContain('locaux poubelles');
  expect(cardText).toContain('sur-mesure');
});

test('Services Overview - Piscines section mentions 4 pool types', async ({ page }) => {
  await page.goto('/services/index.html');
  
  const piscinesSection = page.locator('.service-block').filter({ hasText: "Piscines d'Exception" });
  await expect(piscinesSection).toBeVisible();
  
  const sectionText = await piscinesSection.locator('.service-content p').textContent();
  expect(sectionText).toContain('coques');
  expect(sectionText).toContain('maçonnées');
  expect(sectionText).toContain('toutes dimensions');
  expect(sectionText).toContain('containers');
});

test('Services Overview - Aménagement section mentions all exterior services', async ({ page }) => {
  await page.goto('/services/index.html');
  
  const amenagementSection = page.locator('.service-block').filter({ hasText: 'Aménagement Extérieur' });
  await expect(amenagementSection).toBeVisible();
  
  const sectionText = await amenagementSection.locator('.service-content p').textContent();
  expect(sectionText).toContain('terrasses');
  expect(sectionText).toContain('escaliers');
  expect(sectionText).toContain('gazon');
  expect(sectionText).toContain('soutènements');
  expect(sectionText).toContain('enrochements');
  expect(sectionText).toContain('clôtures');
});

test('Services Overview - Containers section mentions all applications', async ({ page }) => {
  await page.goto('/services/index.html');
  
  const containersSection = page.locator('.service-block').filter({ hasText: 'Containers Architecturaux' });
  await expect(containersSection).toBeVisible();
  
  const sectionText = await containersSection.locator('.service-content p').textContent();
  expect(sectionText).toContain('logement');
  expect(sectionText).toContain('stockage');
  expect(sectionText).toContain('local vélo');
  expect(sectionText).toContain('local poubelles');
  expect(sectionText).toContain('pool house');
  expect(sectionText).toContain('sur-mesure');
});

test('Piscines Page - displays all 4 types of pools', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  await expect(page.locator('h3', { hasText: 'Piscines Coque Premium' })).toBeVisible();
  await expect(page.locator('h3', { hasText: 'Piscines Maçonnées' })).toBeVisible();
  await expect(page.locator('h3', { hasText: 'Piscines Toutes Dimensions' })).toBeVisible();
  await expect(page.locator('h3', { hasText: 'Piscines Container' })).toBeVisible();
});

test('Piscines Page - Coque mentions transport constraints', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  const coqueCard = page.locator('.detail-card').filter({ hasText: 'Piscines Coque Premium' });
  const cardText = await coqueCard.textContent();
  
  expect(cardText).toContain('Formes standardisées');
  expect(cardText).toContain('Transport');
  expect(cardText).toContain('convoi exceptionnel');
});

test('Piscines Page - Maçonnées mentions technical details', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  const maconneeCard = page.locator('.detail-card').filter({ hasText: 'Piscines Maçonnées' });
  const cardText = await maconneeCard.textContent();
  
  expect(cardText).toContain('béton armé');
  expect(cardText).toContain('robustesse structurelle');
  expect(cardText).toContain('carrelage');
  expect(cardText).toContain('mosaïque');
  expect(cardText).toContain('liner armé');
});

test('Piscines Page - Toutes Dimensions explains sizing flexibility', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  const dimensionsCard = page.locator('.detail-card').filter({ hasText: 'Piscines Toutes Dimensions' });
  const cardText = await dimensionsCard.textContent();
  
  expect(cardText).toContain('Adaptées à chaque terrain');
  expect(cardText).toContain('Petits bassins urbains');
  expect(cardText).toContain('Couloirs de nage');
});

test('Piscines Page - Container mentions technical specifications', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  const containerCard = page.locator('.detail-card').filter({ hasText: 'Piscines Container' });
  const cardText = await containerCard.textContent();
  
  expect(cardText).toContain('acier renforcé');
  expect(cardText).toContain('étanchéité');
  expect(cardText).toContain('filtration intégrée');
});

test('Aménagement Page - combines Terrasses and Escaliers in one card', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const terrassesCard = page.locator('.use-card').filter({ hasText: 'Terrasses & Escaliers' });
  await expect(terrassesCard).toBeVisible();
  
  const cardText = await terrassesCard.textContent();
  expect(cardText).toContain('Terrasses');
  expect(cardText).toContain('Escaliers');
});

test('Aménagement Page - Terrasses mentions materials and drainage', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const terrassesCard = page.locator('.use-card').filter({ hasText: 'Terrasses & Escaliers' });
  const cardText = await terrassesCard.textContent();
  
  expect(cardText).toContain('Bois exotique');
  expect(cardText).toContain('Ipé');
  expect(cardText).toContain('Cumaru');
  expect(cardText).toContain('grès cérame');
  expect(cardText).toContain('pierre naturelle');
  expect(cardText).toContain('drainage');
  expect(cardText).toContain('anti-dérapantes');
});

test('Aménagement Page - Escaliers mentions safety and materials', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const terrassesCard = page.locator('.use-card').filter({ hasText: 'Terrasses & Escaliers' });
  const cardText = await terrassesCard.textContent();
  
  expect(cardText).toContain('Pierre massive');
  expect(cardText).toContain('béton');
  expect(cardText).toContain('métal');
  expect(cardText).toContain('normes de sécurité');
  expect(cardText).toContain('éclairage');
});

test('Aménagement Page - Soutènements mentions stabilization and drainage', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const soutenementsCard = page.locator('.use-card').filter({ hasText: 'Soutènements & Enrochements' });
  const cardText = await soutenementsCard.textContent();
  
  expect(cardText).toContain('Stabilisation');
  expect(cardText).toContain('poussée des terres');
  expect(cardText).toContain('drainage');
  expect(cardText).toContain('gabions');
  expect(cardText).toContain('enrochements');
});

test('Aménagement Page - Gazon mentions different types', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const gazonCard = page.locator('.use-card').filter({ hasText: 'Végétal & Gazon' });
  const cardText = await gazonCard.textContent();
  
  expect(cardText).toContain('gazon en rouleaux');
  expect(cardText).toContain('semis traditionnel');
  expect(cardText).toContain('gazon synthétique');
  expect(cardText).toContain('climat');
  expect(cardText).toContain('exposition');
});

test('Aménagement Page - Clôtures mentions materials and regulations', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const cloturesCard = page.locator('.use-card').filter({ hasText: 'Clôtures & Occultations' });
  const cardText = await cloturesCard.textContent();
  
  expect(cardText).toContain('bois');
  expect(cardText).toContain('aluminium');
  expect(cardText).toContain('claustras');
  expect(cardText).toContain('haies');
  expect(cardText).toContain('PLU');
  expect(cardText).toContain('réglementaires');
});

test('Containers Page - displays Applications Possibles section', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  await expect(page.locator('h2', { hasText: 'Applications Possibles' })).toBeVisible();
});

test('Containers Page - lists all 6 application types', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  await expect(page.locator('h4', { hasText: 'Logement' })).toBeVisible();
  await expect(page.locator('h4', { hasText: 'Stockage' })).toBeVisible();
  await expect(page.locator('h4', { hasText: 'Local Vélo' })).toBeVisible();
  await expect(page.locator('h4', { hasText: 'Local Poubelles' })).toBeVisible();
  await expect(page.locator('h4', { hasText: 'Pool House' })).toBeVisible();
  await expect(page.locator('h4', { hasText: 'Sur-Mesure' })).toBeVisible();
});

test('Containers Page - Logement mentions insulation and norms', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const pageText = await page.textContent('body');
  
  expect(pageText).toContain('Isolation thermique');
  expect(pageText).toContain('laine de roche');
  expect(pageText).toContain('VMC');
  expect(pageText).toContain('NF C 15-100');
  expect(pageText).toContain('RT2012');
});

test('Containers Page - Local Vélo mentions electrical outlets and lighting', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const pageText = await page.textContent('body');
  
  expect(pageText).toContain('éclairage LED');
  expect(pageText).toContain('prises électriques');
  expect(pageText).toContain('220V');
  expect(pageText).toContain('recharge');
  expect(pageText).toContain('vélos électriques');
});

test('Containers Page - Local Poubelles mentions ventilation and drainage', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const pageText = await page.textContent('body');
  
  expect(pageText).toContain('Aération');
  expect(pageText).toContain('ventilé');
  expect(pageText).toContain('siphon');
  expect(pageText).toContain('nettoyage');
});

test('Containers Page - enriched Pool House card mentions technical details', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const poolHouseCard = page.locator('.use-card').filter({ hasText: 'Pool House' });
  const cardText = await poolHouseCard.textContent();
  
  expect(cardText).toContain('douches');
  expect(cardText).toContain('Local technique');
  expect(cardText).toContain('filtration');
  expect(cardText).toContain('Isolation thermique');
});

test('Containers Page - enriched Studio card mentions housing use', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const studioCard = page.locator('.use-card').filter({ hasText: /Studio.*Bureau.*Logement/ });
  const cardText = await studioCard.textContent();
  
  expect(cardText).toContain('logement');
  expect(cardText).toContain('conformité normes');
  expect(cardText).toContain('VMC');
  expect(cardText).toContain('Isolation thermique et acoustique');
});

test('Containers Page - enriched Stockage card mentions bike and trash applications', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const stockageCard = page.locator('.use-card').filter({ hasText: /Stockage.*Local Vélo.*Local Poubelles/ });
  const cardText = await stockageCard.textContent();
  
  expect(cardText).toContain('Local vélo');
  expect(cardText).toContain('éclairage LED');
  expect(cardText).toContain('prises de recharge');
  expect(cardText).toContain('Local poubelles');
  expect(cardText).toContain('ventilé');
});

test('Containers Page - technical section mentions foundations and electrical norms', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const techSection = page.locator('.tech-section');
  const sectionText = await techSection.textContent();
  
  expect(sectionText).toContain('Fondations');
  expect(sectionText).toContain('plots béton');
  expect(sectionText).toContain('vis de fondation');
  expect(sectionText).toContain('VMC');
  expect(sectionText).toContain('NF C 15-100');
  expect(sectionText).toContain('anticorrosion');
});

test('Layout - homepage maintains 3 service cards', async ({ page }) => {
  await page.goto('/');
  
  const serviceCards = page.locator('.service-card');
  await expect(serviceCards).toHaveCount(3);
});

test('Layout - piscines page maintains 4 pool type cards', async ({ page }) => {
  await page.goto('/services/piscines.html');
  
  const detailCards = page.locator('.detail-card');
  await expect(detailCards).toHaveCount(4);
});

test('Layout - amenagement page maintains 4 service cards', async ({ page }) => {
  await page.goto('/services/amenagement-exterieur.html');
  
  const useCards = page.locator('.use-card');
  await expect(useCards).toHaveCount(4);
});

test('Layout - containers page maintains 3 main cards', async ({ page }) => {
  await page.goto('/services/containers.html');
  
  const useCards = page.locator('.use-card');
  await expect(useCards).toHaveCount(3);
});
