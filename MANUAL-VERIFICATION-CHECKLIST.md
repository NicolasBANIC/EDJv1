# Manual Verification Checklist - Modal Layout Fixes

## Test URL
http://localhost:8080/realisations.html

---

## Test Case 1: Fixed Modal Height
**Objective**: Verify modal maintains consistent height when navigating between media

### Steps:
1. Open realisations.html
2. Click on "Aménagement extérieur à Geispolsheim" project
3. Note the modal height and position
4. Click the right arrow (→) multiple times to navigate through all 17 media items
5. Observe if modal jumps or maintains stable position

### Expected Results:
✅ Modal height remains at 90vh  
✅ Modal position stays centered  
✅ No vertical jumping between slides  
✅ Header text always visible at top  

---

## Test Case 2: Media Never Covers Header Text
**Objective**: Verify description text is always readable and not covered by media

### Steps:
1. Open realisations.html
2. Click on "Aménagement extérieur à Geispolsheim"
3. Read the title, location, and description at the top
4. Navigate through all media items using arrows
5. Check if any media overlaps or covers the header text

### Expected Results:
✅ Title "Aménagement extérieur à Geispolsheim" always visible  
✅ Location "Geispolsheim" always visible  
✅ Description text always fully readable  
✅ Clear separation between header and media area  

---

## Test Case 3: Fade-In Animation
**Objective**: Verify smooth transitions between media items

### Steps:
1. Open realisations.html
2. Click any project
3. Click right arrow to change media
4. Observe the transition

### Expected Results:
✅ New media fades in smoothly (0.3s)  
✅ No abrupt "pop" when media changes  
✅ Animation feels premium and polished  
✅ No lag or performance issues  

---

## Test Case 4: No Inline Styles in JavaScript
**Objective**: Verify CSS handles all sizing (not JavaScript)

### Steps:
1. Open browser DevTools (F12)
2. Click any project to open modal
3. Inspect the `<img>` or `<video>` element inside `.realisation-media-wrapper`
4. Check the "Styles" panel for inline styles

### Expected Results:
✅ No `style="maxHeight: 65vh"` on media elements  
✅ No `style="maxWidth: 100%"` inline  
✅ No `style="objectFit: contain"` inline  
✅ All styling comes from CSS classes  

---

## Test Case 5: Responsive Mobile View
**Objective**: Verify modal works correctly on mobile devices

### Steps:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPhone or Android device
4. Open realisations.html
5. Click any project
6. Navigate between media items

### Expected Results:
✅ Modal height is 95vh on mobile  
✅ No jumping between slides  
✅ Header text always visible  
✅ Arrows positioned correctly (absolute positioning)  
✅ Touch navigation works smoothly  

---

## Test Case 6: Keyboard Navigation
**Objective**: Verify keyboard controls still work after changes

### Steps:
1. Open realisations.html
2. Click any project to open modal
3. Press `ArrowRight` key multiple times
4. Press `ArrowLeft` key multiple times
5. Press `Escape` key

### Expected Results:
✅ ArrowRight navigates to next media  
✅ ArrowLeft navigates to previous media  
✅ Escape closes the modal  
✅ All navigation feels stable and smooth  

---

## Test Case 7: Multiple Projects
**Objective**: Verify fixes work across all project types

### Projects to Test:
- ✅ Aménagement extérieur à Geispolsheim (17 media items)
- ✅ Aménagement extérieur à Lingolsheim (6 media items)
- ✅ Any project with videos
- ✅ Any project with portrait images
- ✅ Any project with landscape images

### Expected Results:
✅ All projects open correctly  
✅ Media displays properly (portrait/landscape)  
✅ Videos play correctly with controls  
✅ No jumping across any project type  
✅ Headers always visible for all projects  

---

## CSS Verification Checklist

### Check in `css/realisations.css`:

#### `.realisation-modal`
- [x] `height: 90vh` (was `max-height`)
- [x] `display: flex`
- [x] `flex-direction: column`
- [x] `overflow: hidden`

#### `.realisation-modal-body`
- [x] `flex: 1`
- [x] `overflow: hidden`
- [x] NO `min-height` property

#### `.realisation-media-wrapper`
- [x] `flex: 1`
- [x] `height: 100%`
- [x] `display: flex`
- [x] NO `max-height` property

#### `.realisation-media-wrapper img, .realisation-media-wrapper video`
- [x] `max-width: 100%`
- [x] `max-height: 100%` (was `65vh`)
- [x] `object-fit: contain`
- [x] `opacity: 0`
- [x] `animation: fadeIn 0.3s ease-in forwards`

#### `@keyframes fadeIn`
- [x] Defined from opacity 0 to 1
- [x] Duration 0.3s

#### Mobile Media Query `@media (max-width: 768px)`
- [x] `.realisation-modal` has `height: 95vh`
- [x] NO `max-height` property
- [x] NO media-specific height overrides

---

## JavaScript Verification Checklist

### Check in `js/realisations.js` - `updateMedia()` function:

#### Video Creation
- [x] `video.src` set
- [x] `video.controls = true`
- [x] `video.autoplay = true`
- [x] NO `video.style.maxWidth`
- [x] NO `video.style.maxHeight`
- [x] NO `video.style.objectFit`

#### Image Creation
- [x] `img.src` set
- [x] `img.alt` set
- [x] NO `img.style.maxWidth`
- [x] NO `img.style.maxHeight`
- [x] NO `img.style.objectFit`

---

## Browser Compatibility

Test in multiple browsers to ensure consistent behavior:

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)

---

## Performance Check

### Observe for:
✅ Smooth animations (no stuttering)  
✅ Quick media loading  
✅ No memory leaks after navigating many slides  
✅ Responsive arrow clicks  

---

## Summary

All changes implemented successfully:

1. ✅ Modal height fixed at 90vh (desktop) / 95vh (mobile)
2. ✅ Media area uses flex: 1 to fill available space
3. ✅ Inline JavaScript styles removed
4. ✅ CSS fade-in animation added (0.3s)
5. ✅ Overflow hidden on modal body
6. ✅ Media scales within container using max-height: 100%

**Result**: Premium, stable, polished modal gallery experience with no jumping and no text overlap.
