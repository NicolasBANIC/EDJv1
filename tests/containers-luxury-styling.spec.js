const { test, expect } = require('@playwright/test');

test('Containers Page - use-card elements have luxury styling properties', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const useCards = page.locator('.use-card');
    const count = await useCards.count();
    
    expect(count).toBe(3);

    for (let i = 0; i < count; i++) {
        const card = useCards.nth(i);
        
        const backgroundColor = await card.evaluate(el => 
            window.getComputedStyle(el).backgroundColor
        );
        expect(backgroundColor).toBe('rgb(255, 255, 255)');
        
        const borderRadius = await card.evaluate(el => 
            window.getComputedStyle(el).borderRadius
        );
        expect(borderRadius).toBe('20px');
        
        const boxShadow = await card.evaluate(el => 
            window.getComputedStyle(el).boxShadow
        );
        expect(boxShadow).toContain('rgba(0, 0, 0, 0.05)');
        
        const borderColor = await card.evaluate(el => 
            window.getComputedStyle(el).borderColor
        );
        expect(borderColor).toBe('rgb(234, 234, 234)');
        
        const position = await card.evaluate(el => 
            window.getComputedStyle(el).position
        );
        expect(position).toBe('relative');
    }
});

test('Containers Page - use-card elements have ::before pseudo-element with gold texture', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const useCards = page.locator('.use-card');
    const count = await useCards.count();

    for (let i = 0; i < count; i++) {
        const card = useCards.nth(i);
        
        const beforeElement = await card.evaluate(el => {
            const before = window.getComputedStyle(el, '::before');
            return {
                content: before.content,
                position: before.position,
                opacity: before.opacity,
                width: before.width,
                height: before.height,
                backgroundImage: before.backgroundImage
            };
        });
        
        expect(beforeElement.content).toBe('""');
        expect(beforeElement.position).toBe('absolute');
        expect(parseFloat(beforeElement.opacity)).toBeCloseTo(0.10, 2);
        expect(beforeElement.width).toBe('180px');
        expect(beforeElement.height).toBe('180px');
        expect(beforeElement.backgroundImage).toContain('data:image/svg+xml');
        expect(beforeElement.backgroundImage).toContain('D4AF37');
    }
});

test('Containers Page - use-card hover states apply correct transformations', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstCard = page.locator('.use-card').first();
    
    await firstCard.hover();
    await page.waitForTimeout(400);
    
    const transform = await firstCard.evaluate(el => 
        window.getComputedStyle(el).transform
    );
    expect(transform).not.toBe('none');
    
    const boxShadow = await firstCard.evaluate(el => 
        window.getComputedStyle(el).boxShadow
    );
    expect(boxShadow).toContain('rgba(0, 0, 0, 0.18)');
    
    const borderColor = await firstCard.evaluate(el => 
        window.getComputedStyle(el).borderColor
    );
    expect(borderColor).toBe('rgb(212, 175, 55)');
});

test('Containers Page - use-card hover increases ::before opacity', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstCard = page.locator('.use-card').first();
    
    await firstCard.hover();
    await page.waitForTimeout(400);
    
    const beforeOpacity = await firstCard.evaluate(el => {
        const before = window.getComputedStyle(el, '::before');
        return parseFloat(before.opacity);
    });
    
    expect(beforeOpacity).toBeCloseTo(0.18, 2);
});

test('Containers Page - application-card elements have luxury styling properties', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const applicationCards = page.locator('.application-card');
    const count = await applicationCards.count();
    
    expect(count).toBe(6);

    for (let i = 0; i < count; i++) {
        const card = applicationCards.nth(i);
        
        const backgroundColor = await card.evaluate(el => 
            window.getComputedStyle(el).backgroundColor
        );
        expect(backgroundColor).toBe('rgb(255, 255, 255)');
        
        const borderRadius = await card.evaluate(el => 
            window.getComputedStyle(el).borderRadius
        );
        expect(borderRadius).toBe('20px');
        
        const boxShadow = await card.evaluate(el => 
            window.getComputedStyle(el).boxShadow
        );
        expect(boxShadow).toContain('rgba(0, 0, 0, 0.05)');
        
        const padding = await card.evaluate(el => 
            window.getComputedStyle(el).padding
        );
        expect(padding).toContain('48px');
        expect(padding).toContain('40px');
        
        const textAlign = await card.evaluate(el => 
            window.getComputedStyle(el).textAlign
        );
        expect(textAlign).toBe('center');
    }
});

test('Containers Page - application-card elements have ::before pseudo-element with gold texture', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const applicationCards = page.locator('.application-card');
    const count = await applicationCards.count();

    for (let i = 0; i < count; i++) {
        const card = applicationCards.nth(i);
        
        const beforeElement = await card.evaluate(el => {
            const before = window.getComputedStyle(el, '::before');
            return {
                content: before.content,
                position: before.position,
                opacity: before.opacity,
                width: before.width,
                height: before.height,
                backgroundImage: before.backgroundImage
            };
        });
        
        expect(beforeElement.content).toBe('""');
        expect(beforeElement.position).toBe('absolute');
        expect(parseFloat(beforeElement.opacity)).toBeCloseTo(0.10, 2);
        expect(beforeElement.width).toBe('180px');
        expect(beforeElement.height).toBe('180px');
        expect(beforeElement.backgroundImage).toContain('data:image/svg+xml');
        expect(beforeElement.backgroundImage).toContain('D4AF37');
    }
});

test('Containers Page - application-card hover states apply correct transformations', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstAppCard = page.locator('.application-card').first();
    
    await firstAppCard.hover();
    await page.waitForTimeout(400);
    
    const transform = await firstAppCard.evaluate(el => 
        window.getComputedStyle(el).transform
    );
    expect(transform).not.toBe('none');
    
    const boxShadow = await firstAppCard.evaluate(el => 
        window.getComputedStyle(el).boxShadow
    );
    expect(boxShadow).toContain('rgba(0, 0, 0, 0.18)');
    
    const borderColor = await firstAppCard.evaluate(el => 
        window.getComputedStyle(el).borderColor
    );
    expect(borderColor).toBe('rgb(212, 175, 55)');
});

test('Containers Page - application-card titles use Playfair Display font', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstTitle = page.locator('.application-card h4').first();
    
    const fontFamily = await firstTitle.evaluate(el => 
        window.getComputedStyle(el).fontFamily
    );
    expect(fontFamily).toContain('Playfair Display');
    
    const color = await firstTitle.evaluate(el => 
        window.getComputedStyle(el).color
    );
    expect(color).toBe('rgb(23, 74, 132)');
});

test('Containers Page - application cards have refined gold line-art icons', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const icons = page.locator('.application-icon img');
    const count = await icons.count();
    
    expect(count).toBe(6);
    
    for (let i = 0; i < count; i++) {
        const icon = icons.nth(i);
        const src = await icon.getAttribute('src');
        expect(src).toContain('.svg');
        expect(src).toContain('../assets/icons/');
    }
});

test('Containers Page - tech section has refined gold line-art icons', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const techIcons = page.locator('.tech-icon img');
    const count = await techIcons.count();
    
    expect(count).toBe(3);
    
    for (let i = 0; i < count; i++) {
        const icon = techIcons.nth(i);
        const src = await icon.getAttribute('src');
        expect(src).toContain('.svg');
        expect(src).toContain('../assets/icons/');
    }
});

test('Containers Page - tech section titles use gold color and Playfair Display', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstTechTitle = page.locator('.tech-item h3').first();
    
    const color = await firstTechTitle.evaluate(el => 
        window.getComputedStyle(el).color
    );
    expect(color).toBe('rgb(212, 175, 55)');
    
    const fontFamily = await firstTechTitle.evaluate(el => 
        window.getComputedStyle(el).fontFamily
    );
    expect(fontFamily).toContain('Playfair Display');
    
    const fontSize = await firstTechTitle.evaluate(el => 
        window.getComputedStyle(el).fontSize
    );
    expect(fontSize).toBe('24px');
});

test('Containers Page - application-card paragraphs have centered layout with max-width', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstParagraph = page.locator('.application-card p').first();
    
    const maxWidth = await firstParagraph.evaluate(el => 
        window.getComputedStyle(el).maxWidth
    );
    expect(maxWidth).toBe('600px');
    
    const marginLeft = await firstParagraph.evaluate(el => 
        window.getComputedStyle(el).marginLeft
    );
    const marginRight = await firstParagraph.evaluate(el => 
        window.getComputedStyle(el).marginRight
    );
    expect(marginLeft).toBe('auto');
    expect(marginRight).toBe('auto');
});

test('Containers Page - use-card titles use Playfair Display font', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstTitle = page.locator('.use-card h3').first();
    
    const fontFamily = await firstTitle.evaluate(el => 
        window.getComputedStyle(el).fontFamily
    );
    expect(fontFamily).toContain('Playfair Display');
    
    const color = await firstTitle.evaluate(el => 
        window.getComputedStyle(el).color
    );
    expect(color).toBe('rgb(13, 42, 74)');
    
    const fontSize = await firstTitle.evaluate(el => 
        window.getComputedStyle(el).fontSize
    );
    expect(fontSize).toBe('24px');
});

test('Containers Page - all card content remains unchanged', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const poolHouseCard = page.locator('.use-card').filter({ hasText: 'Pool House' });
    await expect(poolHouseCard).toContainText('vestiaire avec douches');
    
    const logementCard = page.locator('.application-card').filter({ hasText: 'Logement' });
    await expect(logementCard).toContainText('laine de roche 120 mm minimum');
    await expect(logementCard.locator('.application-icon img')).toHaveAttribute('src', '../assets/icons/home.svg');
    
    const stockageCard = page.locator('.application-card').filter({ hasText: 'Stockage' });
    await expect(stockageCard).toContainText('serrure haute sécurité');
    await expect(stockageCard.locator('.application-icon img')).toHaveAttribute('src', '../assets/icons/box.svg');
    
    const veloCard = page.locator('.application-card').filter({ hasText: 'Local Vélo' });
    await expect(veloCard).toContainText('prises électriques 220V');
    await expect(veloCard.locator('.application-icon img')).toHaveAttribute('src', '../assets/icons/bike.svg');
    
    const poubellesCard = page.locator('.application-card').filter({ hasText: 'Local Poubelles' });
    await expect(poubellesCard).toContainText('siphon de sol');
    await expect(poubellesCard.locator('.application-icon img')).toHaveAttribute('src', '../assets/icons/trash.svg');
    
    const surMesureCard = page.locator('.application-card').filter({ hasText: 'Sur-Mesure' });
    await expect(surMesureCard).toContainText('atelier d\'artiste');
    await expect(surMesureCard.locator('.application-icon img')).toHaveAttribute('src', '../assets/icons/custom.svg');
});

test('Containers Page - page structure remains intact with correct card counts', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const useCardsCount = await page.locator('.use-card').count();
    expect(useCardsCount).toBe(3);
    
    const applicationCardsCount = await page.locator('.application-card').count();
    expect(applicationCardsCount).toBe(6);
    
    const techSectionExists = await page.locator('.tech-section').count();
    expect(techSectionExists).toBe(1);
    
    const faqSectionExists = await page.locator('.faq-section').count();
    expect(faqSectionExists).toBe(1);
});

test('Containers Page - use-card images have hover scale effect', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const firstCardImage = page.locator('.use-card .use-img').first();
    const parentCard = page.locator('.use-card').first();
    
    await parentCard.hover();
    await page.waitForTimeout(400);
    
    const transform = await firstCardImage.evaluate(el => 
        window.getComputedStyle(el).transform
    );
    expect(transform).toContain('scale');
});

test('Containers Page - application cards alternate ::before positioning', async ({ page }) => {
    await page.goto('http://localhost:8081/services/containers.html');
    await page.waitForLoadState('networkidle');
    
    const secondCard = page.locator('.application-card').nth(1);
    
    const beforeElement = await secondCard.evaluate(el => {
        const before = window.getComputedStyle(el, '::before');
        return {
            bottom: before.bottom,
            left: before.left
        };
    });
    
    expect(beforeElement.bottom).toBe('-15px');
    expect(beforeElement.left).toBe('-15px');
});
