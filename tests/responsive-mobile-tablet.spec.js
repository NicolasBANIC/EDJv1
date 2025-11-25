const { test, expect } = require('@playwright/test');

const MOBILE_WIDTH = 375;
const TABLET_WIDTH = 768;
const DESKTOP_WIDTH = 1024;

const ALL_PAGES = [
  '/',
  '/a-propos.html',
  '/contact.html',
  '/realisations.html',
  '/mentions-legales.html',
  '/services/index.html',
  '/services/piscines.html',
  '/services/amenagement-exterieur.html',
  '/services/containers.html'
];

test.describe('Mobile Navigation (≤768px)', () => {
  test('Mobile menu button is visible and navigation is hidden by default', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const menuBtn = page.locator('.mobile-menu-btn');
    const mainNav = page.locator('.main-nav');

    await expect(menuBtn).toBeVisible();
    
    const navOpacity = await mainNav.evaluate(el => window.getComputedStyle(el).opacity);
    expect(parseFloat(navOpacity)).toBeLessThan(0.1);
  });

  test('Mobile menu has no gap and is flush with header when active', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const header = page.locator('.site-header');
    const navContainer = page.locator('.nav-container');
    const mainNav = page.locator('.main-nav');
    const menuBtn = page.locator('.mobile-menu-btn');

    await menuBtn.click();
    await page.waitForTimeout(500);

    const navContainerBox = await navContainer.boundingBox();
    const mainNavBox = await mainNav.boundingBox();

    expect(mainNavBox.y).toBeCloseTo(navContainerBox.y + navContainerBox.height, 2);

    const navPosition = await mainNav.evaluate(el => window.getComputedStyle(el).position);
    expect(navPosition).toBe('absolute');

    const navTop = await mainNav.evaluate(el => window.getComputedStyle(el).top);
    const navTopPx = parseFloat(navTop);
    expect(navTopPx).toBeGreaterThan(20);
    expect(navTopPx).toBeLessThan(100);
  });

  test('Mobile menu has vertical stacked links with proper styling', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const menuBtn = page.locator('.mobile-menu-btn');
    await menuBtn.click();
    await page.waitForTimeout(500);

    const navUl = page.locator('.main-nav ul');
    const flexDirection = await navUl.evaluate(el => window.getComputedStyle(el).flexDirection);
    expect(flexDirection).toBe('column');

    const navItems = page.locator('.main-nav ul li');
    const count = await navItems.count();
    expect(count).toBeGreaterThan(0);

    const firstItem = navItems.first();
    const firstItemBox = await firstItem.boundingBox();
    expect(firstItemBox.width).toBeGreaterThan(200);
  });

  test('Mobile nav CTA button is full-width and properly styled', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const menuBtn = page.locator('.mobile-menu-btn');
    await menuBtn.click();
    await page.waitForTimeout(500);

    const navCta = page.locator('.main-nav .nav-cta');
    await expect(navCta).toBeVisible();

    const ctaBox = await navCta.boundingBox();
    const navBox = await page.locator('.main-nav ul').boundingBox();
    
    expect(ctaBox.width).toBeGreaterThan(navBox.width * 0.8);

    const ctaStyles = await navCta.evaluate(el => {
      const style = window.getComputedStyle(el);
      return {
        padding: style.padding,
        textAlign: style.textAlign
      };
    });
    
    expect(ctaStyles.textAlign).toBe('center');
  });

  test('Hamburger icon transforms to X when menu is active', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const menuBtn = page.locator('.mobile-menu-btn');
    const spans = menuBtn.locator('span');

    const initialTransform = await spans.nth(0).evaluate(el => el.style.transform);
    expect(initialTransform).toBe('');

    await menuBtn.click();
    await page.waitForTimeout(500);

    const span1Transform = await spans.nth(0).evaluate(el => el.style.transform);
    const span2Opacity = await spans.nth(1).evaluate(el => el.style.opacity);
    const span3Transform = await spans.nth(2).evaluate(el => el.style.transform);

    expect(span1Transform).toContain('rotate');
    expect(span2Opacity).toBe('0');
    expect(span3Transform).toContain('rotate');
  });
});

test.describe('Two-Column to Single-Column Layout (Mobile)', () => {
  test('Grid-2-col becomes single column on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/a-propos.html');

    const grid2Col = page.locator('.grid-2-col').first();
    if (await grid2Col.count() === 0) {
      test.skip();
    }

    const flexDirection = await grid2Col.evaluate(el => window.getComputedStyle(el).flexDirection);
    expect(flexDirection).toBe('column');

    const children = await grid2Col.locator('> div').all();
    if (children.length >= 2) {
      const child1Box = await children[0].boundingBox();
      const child2Box = await children[1].boundingBox();
      
      expect(child2Box.y).toBeGreaterThan(child1Box.y + child1Box.height);
    }
  });

  test('Uses-grid is single column on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/services/amenagement-exterieur.html');

    const usesGrid = page.locator('.uses-grid').first();
    if (await usesGrid.count() === 0) {
      test.skip();
    }

    const gridColumns = await usesGrid.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    const columnCount = gridColumns.split(' ').filter(c => c && c !== 'none').length;
    expect(columnCount).toBe(1);
  });

  test('Services-grid is single column on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const servicesGrid = page.locator('.services-grid').first();
    if (await servicesGrid.count() === 0) {
      test.skip();
    }

    const gridColumns = await servicesGrid.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    const columnCount = gridColumns.split(' ').filter(c => c && c !== 'none').length;
    expect(columnCount).toBeLessThanOrEqual(1);
  });

  test('Detail-grid is single column on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/services/piscines.html');

    const detailGrid = page.locator('.detail-grid').first();
    if (await detailGrid.count() === 0) {
      test.skip();
    }

    const gridColumns = await detailGrid.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    const columnCount = gridColumns.split(' ').filter(c => c && c !== 'none').length;
    expect(columnCount).toBeLessThanOrEqual(1);
  });

  test('Testimonials-grid is single column on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/realisations.html');

    const testimonialsGrid = page.locator('.testimonials-grid').first();
    if (await testimonialsGrid.count() === 0) {
      test.skip();
    }

    const gridColumns = await testimonialsGrid.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    const columnCount = gridColumns.split(' ').filter(c => c && c !== 'none').length;
    expect(columnCount).toBeLessThanOrEqual(1);
  });
});

test.describe('Footer Responsive Layout (Mobile)', () => {
  test('Footer grid becomes single column on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const footerGrid = page.locator('.footer-grid');
    await expect(footerGrid).toBeVisible();

    const gridColumns = await footerGrid.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    const columnCount = gridColumns.split(' ').filter(c => c && c !== 'none').length;
    expect(columnCount).toBeLessThanOrEqual(1);

    const textAlign = await footerGrid.evaluate(el => 
      window.getComputedStyle(el).textAlign
    );
    expect(textAlign).toBe('center');
  });

  test('Footer columns are centered and well-spaced on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const footerCols = page.locator('.footer-col');
    const count = await footerCols.count();
    
    if (count >= 2) {
      const col1Box = await footerCols.nth(0).boundingBox();
      const col2Box = await footerCols.nth(1).boundingBox();
      
      expect(col2Box.y).toBeGreaterThan(col1Box.y + col1Box.height);
    }
  });
});

test.describe('Image Responsive Behavior (Mobile)', () => {
  test('Images in grid-2-col are full-width and centered on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/a-propos.html');

    const gridImage = page.locator('.grid-2-col img').first();
    if (await gridImage.count() === 0) {
      test.skip();
    }

    await expect(gridImage).toBeVisible();

    const imageBox = await gridImage.boundingBox();
    const containerBox = await page.locator('.container').first().boundingBox();
    
    expect(imageBox.width).toBeGreaterThan(containerBox.width * 0.85);

    const imageStyles = await gridImage.evaluate(el => {
      const style = window.getComputedStyle(el);
      return {
        maxWidth: style.maxWidth,
        height: style.height,
        display: style.display
      };
    });

    expect(imageStyles.maxWidth).toBe('100%');
    expect(imageStyles.display).toBe('block');
  });

  test('Service card images maintain aspect ratio on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const serviceCardImage = page.locator('.service-card img').first();
    if (await serviceCardImage.count() === 0) {
      test.skip();
    }

    await expect(serviceCardImage).toBeVisible();

    const imageBox = await serviceCardImage.boundingBox();
    const aspectRatio = imageBox.width / imageBox.height;
    
    expect(aspectRatio).toBeGreaterThan(0.5);
    expect(aspectRatio).toBeLessThan(4);
  });
});

test.describe('Typography and Spacing (Mobile)', () => {
  test('Headings have appropriate font sizes on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const h1 = page.locator('h1').first();
    const h2 = page.locator('h2').first();
    const h3 = page.locator('h3').first();

    const h1Size = await h1.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
    const h2Size = await h2.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
    const h3Size = await h3.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));

    expect(h1Size).toBeGreaterThan(30);
    expect(h1Size).toBeLessThan(50);
    expect(h2Size).toBeLessThan(h1Size);
    expect(h3Size).toBeLessThan(h2Size);
  });

  test('Paragraphs have readable line-height on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const paragraph = page.locator('p').first();
    const lineHeight = await paragraph.evaluate(el => {
      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const lh = parseFloat(style.lineHeight);
      return lh / fontSize;
    });

    expect(lineHeight).toBeGreaterThanOrEqual(1.5);
    expect(lineHeight).toBeLessThanOrEqual(2);
  });

  test('Sections have adequate padding on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/a-propos.html');

    const sections = page.locator('section');
    const count = await sections.count();
    
    if (count > 0) {
      const firstSection = sections.nth(1);
      const padding = await firstSection.evaluate(el => {
        const style = window.getComputedStyle(el);
        return {
          top: parseFloat(style.paddingTop),
          bottom: parseFloat(style.paddingBottom)
        };
      });

      expect(padding.top + padding.bottom).toBeGreaterThan(40);
    }
  });

  test('Container has proper side padding on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const container = page.locator('.container').first();
    const padding = await container.evaluate(el => {
      const style = window.getComputedStyle(el);
      return {
        left: parseFloat(style.paddingLeft),
        right: parseFloat(style.paddingRight)
      };
    });

    expect(padding.left).toBeGreaterThanOrEqual(20);
    expect(padding.right).toBeGreaterThanOrEqual(20);
  });
});

test.describe('Hero Sections Responsive (Mobile)', () => {
  test('Hero section is properly sized and readable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const hero = page.locator('.hero');
    await expect(hero).toBeVisible();

    const heroBox = await hero.boundingBox();
    expect(heroBox.height).toBeGreaterThan(400);
    expect(heroBox.height).toBeLessThan(700);

    const heroH1 = hero.locator('h1');
    await expect(heroH1).toBeVisible();

    const h1Size = await heroH1.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
    expect(h1Size).toBeGreaterThan(25);
  });

  test('Page header is centered on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/a-propos.html');

    const pageHeader = page.locator('.page-header');
    if (await pageHeader.count() === 0) {
      test.skip();
    }

    const textAlign = await pageHeader.evaluate(el => 
      window.getComputedStyle(el).textAlign
    );
    expect(textAlign).toBe('center');
  });
});

test.describe('Card Responsive Behavior (Mobile)', () => {
  test('Service cards are full-width with proper padding on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/');

    const serviceCard = page.locator('.service-card').first();
    await expect(serviceCard).toBeVisible();

    const cardBox = await serviceCard.boundingBox();
    const containerBox = await page.locator('.container').first().boundingBox();

    expect(cardBox.width).toBeGreaterThan(containerBox.width * 0.8);

    const padding = await serviceCard.evaluate(el => {
      const style = window.getComputedStyle(el);
      return parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    });

    expect(padding).toBeGreaterThan(40);
  });

  test('Use cards stack vertically on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
    await page.goto('/services/containers.html');

    const useCards = page.locator('.use-card');
    const count = await useCards.count();

    if (count >= 2) {
      const card1Box = await useCards.nth(0).boundingBox();
      const card2Box = await useCards.nth(1).boundingBox();

      expect(card2Box.y).toBeGreaterThan(card1Box.y + card1Box.height * 0.9);
    }
  });
});

test.describe('No Horizontal Scroll (Mobile)', () => {
  for (const pagePath of ALL_PAGES) {
    test(`${pagePath} has no horizontal overflow on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });
      await page.goto(pagePath);

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);

      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);

      const htmlWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(htmlWidth).toBeLessThanOrEqual(viewportWidth + 1);
    });
  }
});

test.describe('Tablet Breakpoint (768px - 1024px)', () => {
  test('Typography scales appropriately on tablet', async ({ page }) => {
    await page.setViewportSize({ width: TABLET_WIDTH, height: 1024 });
    await page.goto('/');

    const h1 = page.locator('h1').first();
    const h1Size = await h1.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));

    expect(h1Size).toBeGreaterThan(35);
    expect(h1Size).toBeLessThan(60);
  });

  test('Container padding is appropriate on tablet', async ({ page }) => {
    await page.setViewportSize({ width: TABLET_WIDTH, height: 1024 });
    await page.goto('/');

    const container = page.locator('.container').first();
    const padding = await container.evaluate(el => {
      const style = window.getComputedStyle(el);
      return parseFloat(style.paddingLeft);
    });

    expect(padding).toBeGreaterThanOrEqual(24);
  });
});

test.describe('Desktop Layout Preservation (≥1024px)', () => {
  test('Desktop navigation is horizontal and visible', async ({ page }) => {
    await page.setViewportSize({ width: DESKTOP_WIDTH, height: 768 });
    await page.goto('/');

    const menuBtn = page.locator('.mobile-menu-btn');
    const menuBtnVisible = await menuBtn.isVisible();
    expect(menuBtnVisible).toBe(false);

    const mainNav = page.locator('.main-nav');
    await expect(mainNav).toBeVisible();

    const navUl = page.locator('.main-nav ul');
    const flexDirection = await navUl.evaluate(el => window.getComputedStyle(el).flexDirection);
    expect(flexDirection).toBe('row');
  });

  test('Grid layouts remain multi-column on desktop', async ({ page }) => {
    await page.setViewportSize({ width: DESKTOP_WIDTH, height: 768 });
    await page.goto('/');

    const servicesGrid = page.locator('.services-grid').first();
    if (await servicesGrid.count() === 0) {
      test.skip();
    }

    const gridColumns = await servicesGrid.evaluate(el => 
      window.getComputedStyle(el).gridTemplateColumns
    );
    
    const columnCount = gridColumns.split(' ').filter(c => c && c !== 'none').length;
    expect(columnCount).toBeGreaterThan(1);
  });
});

test.describe('Cross-Page Responsive Consistency', () => {
  test('All pages have responsive navigation on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });

    for (const pagePath of ALL_PAGES) {
      await page.goto(pagePath);
      
      const menuBtn = page.locator('.mobile-menu-btn');
      await expect(menuBtn).toBeVisible();
      
      const mainNav = page.locator('.main-nav');
      const navOpacity = await mainNav.evaluate(el => window.getComputedStyle(el).opacity);
      expect(parseFloat(navOpacity)).toBeLessThan(0.1);
    }
  });

  test('All pages have centered footers on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });

    for (const pagePath of ALL_PAGES) {
      await page.goto(pagePath);
      
      const footerGrid = page.locator('.footer-grid');
      if (await footerGrid.count() > 0) {
        const textAlign = await footerGrid.evaluate(el => 
          window.getComputedStyle(el).textAlign
        );
        expect(textAlign).toBe('center');
      }
    }
  });

  test('All pages prevent horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: MOBILE_WIDTH, height: 667 });

    for (const pagePath of ALL_PAGES) {
      await page.goto(pagePath);
      
      const overflowX = await page.evaluate(() => 
        window.getComputedStyle(document.body).overflowX
      );
      expect(overflowX).toBe('hidden');
    }
  });
});
