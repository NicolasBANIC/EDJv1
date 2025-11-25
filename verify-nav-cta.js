const fs = require('fs');
const path = require('path');

console.log('=== NAV-CTA VERIFICATION REPORT ===\n');

const cssPath = path.join(__dirname, 'css', 'style.css');
const css = fs.readFileSync(cssPath, 'utf8');

const htmlFiles = [
  'index.html',
  'contact.html',
  'realisations.html',
  'services/index.html',
  'services/piscines.html',
  'services/containers.html'
];

let allPassed = true;

console.log('✓ STEP 1: Checking CSS for .nav-cta class\n');

if (css.includes('.nav-cta')) {
  console.log('✓ .nav-cta class found in CSS');
  
  const navCtaMatch = css.match(/\.nav-cta\s*{[\s\S]*?}/);
  if (navCtaMatch) {
    console.log('\nCSS .nav-cta block:');
    console.log(navCtaMatch[0]);
    
    const hasInlineFlex = navCtaMatch[0].includes('display: inline-flex');
    const hasAlignItems = navCtaMatch[0].includes('align-items: center');
    const hasJustifyContent = navCtaMatch[0].includes('justify-content: center');
    const hasLineHeight = navCtaMatch[0].includes('line-height: 1');
    
    console.log('\n  ✓ display: inline-flex -', hasInlineFlex ? 'FOUND' : 'MISSING');
    console.log('  ✓ align-items: center -', hasAlignItems ? 'FOUND' : 'MISSING');
    console.log('  ✓ justify-content: center -', hasJustifyContent ? 'FOUND' : 'MISSING');
    console.log('  ✓ line-height: 1 -', hasLineHeight ? 'FOUND' : 'MISSING');
    
    if (!hasInlineFlex || !hasAlignItems || !hasJustifyContent || !hasLineHeight) {
      allPassed = false;
    }
  }
  
  const navCtaHoverMatch = css.match(/\.nav-cta:hover\s*{[\s\S]*?}/);
  if (navCtaHoverMatch) {
    console.log('\nCSS .nav-cta:hover block:');
    console.log(navCtaHoverMatch[0]);
    
    const hasWhiteColor = navCtaHoverMatch[0].includes('color: var(--white)');
    console.log('\n  ✓ color: var(--white) -', hasWhiteColor ? 'FOUND' : 'MISSING');
    
    if (!hasWhiteColor) {
      allPassed = false;
    }
  }
} else {
  console.log('✗ .nav-cta class NOT found in CSS');
  allPassed = false;
}

console.log('\n\n✓ STEP 2: Checking HTML files for .nav-cta class\n');

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    
    const navCtaMatch = html.match(/<a[^>]*class="btn btn-primary nav-cta"[^>]*>Demander une étude<\/a>/);
    
    if (navCtaMatch) {
      console.log(`✓ ${file}: nav-cta class found in navigation`);
    } else {
      console.log(`✗ ${file}: nav-cta class NOT found`);
      allPassed = false;
    }
    
    const heroButtonMatch = html.match(/<a[^>]*class="btn btn-primary"[^>]*>Demander une étude sur-mesure<\/a>/);
    if (heroButtonMatch && heroButtonMatch[0].includes('nav-cta')) {
      console.log(`✗ ${file}: Hero button incorrectly has nav-cta class`);
      allPassed = false;
    } else if (heroButtonMatch) {
      console.log(`  → Hero button correctly NOT styled with nav-cta`);
    }
  }
});

console.log('\n\n=== VERIFICATION RESULT ===');
if (allPassed) {
  console.log('✓ ALL CHECKS PASSED');
  process.exit(0);
} else {
  console.log('✗ SOME CHECKS FAILED');
  process.exit(1);
}
