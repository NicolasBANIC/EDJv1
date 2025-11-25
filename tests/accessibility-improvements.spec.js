const { test, expect } = require('@playwright/test');

test('Skip link should be present on homepage', async ({ page }) => {
    await page.goto('/index.html');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveAttribute('href', '#main-content');
    await expect(skipLink).toHaveText('Passer au contenu principal');
});

test('Skip link should be visually hidden by default', async ({ page }) => {
    await page.goto('/index.html');
    const skipLink = page.locator('.skip-link');
    const box = await skipLink.boundingBox();
    expect(box.y).toBeLessThan(0);
});

test('Skip link should be visible when focused', async ({ page }) => {
    await page.goto('/index.html');
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
    const box = await skipLink.boundingBox();
    expect(box.y).toBeGreaterThanOrEqual(0);
});

test('Skip link should exist on all pages', async ({ page }) => {
    const pages = [
        '/index.html',
        '/contact.html',
        '/a-propos.html',
        '/realisations.html',
        '/services/index.html',
        '/services/piscines.html'
    ];

    for (const pagePath of pages) {
        await page.goto(pagePath);
        const skipLink = page.locator('.skip-link');
        await expect(skipLink).toBeAttached();
        await expect(skipLink).toHaveAttribute('href', '#main-content');
    }
});

test('Main content should have id="main-content"', async ({ page }) => {
    await page.goto('/index.html');
    const main = page.locator('main#main-content');
    await expect(main).toBeAttached();
});

test('Main content ID should exist on all pages', async ({ page }) => {
    const pages = [
        '/index.html',
        '/contact.html',
        '/a-propos.html',
        '/realisations.html',
        '/services/index.html'
    ];

    for (const pagePath of pages) {
        await page.goto(pagePath);
        const main = page.locator('main#main-content');
        await expect(main).toBeAttached();
    }
});

test('Navigation should have aria-label', async ({ page }) => {
    await page.goto('/index.html');
    const nav = page.locator('nav.main-nav');
    await expect(nav).toHaveAttribute('aria-label', 'Navigation principale');
});

test('Home page link should have aria-current="page"', async ({ page }) => {
    await page.goto('/index.html');
    const homeLink = page.locator('nav.main-nav a[href="index.html"]');
    await expect(homeLink).toHaveAttribute('aria-current', 'page');
});

test('Contact page link should have aria-current="page"', async ({ page }) => {
    await page.goto('/contact.html');
    const contactLink = page.locator('nav.main-nav a[href="contact.html"].active');
    await expect(contactLink).toHaveAttribute('aria-current', 'page');
});

test('A Propos page link should have aria-current="page"', async ({ page }) => {
    await page.goto('/a-propos.html');
    const aproposLink = page.locator('nav.main-nav a[href="a-propos.html"].active');
    await expect(aproposLink).toHaveAttribute('aria-current', 'page');
});

test('Realisations page link should have aria-current="page"', async ({ page }) => {
    await page.goto('/realisations.html');
    const realisationsLink = page.locator('nav.main-nav a[href="realisations.html"].active');
    await expect(realisationsLink).toHaveAttribute('aria-current', 'page');
});

test('Services page link should have aria-current="page"', async ({ page }) => {
    await page.goto('/services/index.html');
    const servicesLink = page.locator('nav.main-nav a[href="index.html"].active');
    await expect(servicesLink).toHaveAttribute('aria-current', 'page');
});

test('Mobile menu button should initialize with aria-expanded="false"', async ({ page }) => {
    await page.goto('/index.html');
    const menuBtn = page.locator('.mobile-menu-btn');
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
});

test('Mobile menu should toggle aria-expanded on button click', async ({ page }) => {
    await page.goto('/index.html');
    await page.setViewportSize({ width: 375, height: 667 });
    const menuBtn = page.locator('.mobile-menu-btn');
    
    await menuBtn.click();
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
    
    await menuBtn.click();
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
});

test('Mobile menu should close when ESC key is pressed', async ({ page }) => {
    await page.goto('/index.html');
    await page.setViewportSize({ width: 375, height: 667 });
    const menuBtn = page.locator('.mobile-menu-btn');
    const nav = page.locator('nav.main-nav');
    
    await menuBtn.click();
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(nav).toHaveClass(/active/);
    
    await page.keyboard.press('Escape');
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(nav).not.toHaveClass(/active/);
});

test('Mobile menu should close when nav link is clicked', async ({ page }) => {
    await page.goto('/index.html');
    await page.setViewportSize({ width: 375, height: 667 });
    const menuBtn = page.locator('.mobile-menu-btn');
    const nav = page.locator('nav.main-nav');
    
    await menuBtn.click();
    await expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(nav).toHaveClass(/active/);
    
    const contactLink = page.locator('nav.main-nav a[href="contact.html"]').first();
    await contactLink.click();
    
    await page.waitForURL('**/contact.html');
    const newMenuBtn = page.locator('.mobile-menu-btn');
    await expect(newMenuBtn).toHaveAttribute('aria-expanded', 'false');
});

test('Mobile menu hamburger animation should work', async ({ page }) => {
    await page.goto('/index.html');
    await page.setViewportSize({ width: 375, height: 667 });
    const menuBtn = page.locator('.mobile-menu-btn');
    const spans = menuBtn.locator('span');
    
    await menuBtn.click();
    const firstSpan = spans.nth(0);
    const transform = await firstSpan.evaluate(el => el.style.transform);
    expect(transform).toContain('rotate(45deg)');
});

test('Contact form should have form-status div with aria-live', async ({ page }) => {
    await page.goto('/contact.html');
    const formStatus = page.locator('.form-status');
    await expect(formStatus).toBeAttached();
    await expect(formStatus).toHaveAttribute('aria-live', 'polite');
});

test('Contact form should not have inline onsubmit attribute', async ({ page }) => {
    await page.goto('/contact.html');
    const form = page.locator('#contactForm');
    const onsubmit = await form.getAttribute('onsubmit');
    expect(onsubmit).toBeNull();
});

test('Contact form should display success message on submit', async ({ page }) => {
    await page.goto('/contact.html');
    await page.fill('#name', 'Jean Dupont');
    await page.fill('#email', 'jean.dupont@example.com');
    await page.fill('#phone', '0123456789');
    await page.selectOption('#project-type', 'Piscine');
    await page.fill('#location', 'Paris 75001');
    
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    
    await expect(submitBtn).toHaveText('Envoi en cours...');
    await expect(submitBtn).toBeDisabled();
    
    await page.waitForTimeout(2000);
    
    const formStatus = page.locator('.form-status');
    await expect(formStatus).toContainText('Merci ! Votre demande a bien été envoyée');
    await expect(formStatus).toContainText('Nous vous recontacterons sous 24h');
    
    await expect(submitBtn).toHaveText('Envoyer ma demande');
    await expect(submitBtn).toBeEnabled();
});

test('Contact form should reset fields after successful submission', async ({ page }) => {
    await page.goto('/contact.html');
    await page.fill('#name', 'Jean Dupont');
    await page.fill('#email', 'jean.dupont@example.com');
    await page.fill('#phone', '0123456789');
    await page.selectOption('#project-type', 'Piscine');
    await page.fill('#location', 'Paris 75001');
    await page.fill('#message', 'Test message');
    
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    
    await page.waitForTimeout(2000);
    
    await expect(page.locator('#name')).toHaveValue('');
    await expect(page.locator('#email')).toHaveValue('');
    await expect(page.locator('#phone')).toHaveValue('');
    await expect(page.locator('#message')).toHaveValue('');
});

test('Contact form should not show alert dialog on submit', async ({ page }) => {
    await page.goto('/contact.html');
    let dialogShown = false;
    page.on('dialog', async dialog => {
        dialogShown = true;
        await dialog.dismiss();
    });
    
    await page.fill('#name', 'Jean Dupont');
    await page.fill('#email', 'jean.dupont@example.com');
    await page.fill('#phone', '0123456789');
    await page.selectOption('#project-type', 'Piscine');
    await page.fill('#location', 'Paris 75001');
    
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    
    await page.waitForTimeout(2000);
    
    expect(dialogShown).toBe(false);
});

test('Contact form should allow multiple submissions', async ({ page }) => {
    await page.goto('/contact.html');
    await page.fill('#name', 'Jean Dupont');
    await page.fill('#email', 'jean.dupont@example.com');
    await page.fill('#phone', '0123456789');
    await page.selectOption('#project-type', 'Piscine');
    await page.fill('#location', 'Paris 75001');
    
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();
    await page.waitForTimeout(2000);
    
    const formStatus = page.locator('.form-status');
    await expect(formStatus).toContainText('Merci');
    
    await page.fill('#name', 'Marie Martin');
    await page.fill('#email', 'marie.martin@example.com');
    await page.fill('#phone', '0987654321');
    await page.selectOption('#project-type', 'Container');
    await page.fill('#location', 'Lyon 69001');
    
    await submitBtn.click();
    await page.waitForTimeout(2000);
    
    await expect(formStatus).toContainText('Merci');
    await expect(page.locator('#name')).toHaveValue('');
});

test('Should not have horizontal scroll on desktop', async ({ page }) => {
    await page.goto('/index.html');
    await page.setViewportSize({ width: 1920, height: 1080 });
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});

test('Should not have horizontal scroll on mobile', async ({ page }) => {
    await page.goto('/index.html');
    await page.setViewportSize({ width: 375, height: 667 });
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
});

test('Button hover states should work', async ({ page }) => {
    await page.goto('/index.html');
    const btn = page.locator('.btn-primary').first();
    await expect(btn).toBeVisible();
    
    const initialColor = await btn.evaluate(el => 
        window.getComputedStyle(el).backgroundColor
    );
    
    await btn.hover();
    await page.waitForTimeout(500);
    
    const hoverColor = await btn.evaluate(el => 
        window.getComputedStyle(el).backgroundColor
    );
    
    expect(initialColor).not.toBe(hoverColor);
});

test('Card hover effects should work', async ({ page }) => {
    await page.goto('/index.html');
    const card = page.locator('.service-card').first();
    await expect(card).toBeVisible();
    
    const initialTransform = await card.evaluate(el => 
        window.getComputedStyle(el).transform
    );
    
    await card.hover();
    await page.waitForTimeout(400);
    
    const hoverTransform = await card.evaluate(el => 
        window.getComputedStyle(el).transform
    );
    
    expect(hoverTransform).not.toBe(initialTransform);
});

test('Accessibility features should persist across navigation', async ({ page }) => {
    await page.goto('/index.html');
    let nav = page.locator('nav.main-nav');
    await expect(nav).toHaveAttribute('aria-label', 'Navigation principale');
    
    await page.click('nav.main-nav a[href="contact.html"]');
    await page.waitForURL('**/contact.html');
    nav = page.locator('nav.main-nav');
    await expect(nav).toHaveAttribute('aria-label', 'Navigation principale');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeAttached();
    
    await page.click('nav.main-nav a[href="a-propos.html"]');
    await page.waitForURL('**/a-propos.html');
    nav = page.locator('nav.main-nav');
    await expect(nav).toHaveAttribute('aria-label', 'Navigation principale');
    await expect(skipLink).toBeAttached();
});
