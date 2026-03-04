# Link Fix Task

## Goal
Fix all broken/lazy product links across the Tesla Model Guy website. Every "Check Price" / "Shop on" button must link to a REAL product page, not a search page or category page.

## Rules
1. Amazon links MUST use direct ASIN format: `https://www.amazon.com/dp/{ASIN}?tag=teslamodelguy-20`
2. Yeslak links MUST use `/products/...` URLs with affiliate param `sca_ref=10733389.GHD3wW8fWH`
3. EV Bandit links MUST use `/products/...` URLs with affiliate param `sca_ref=10733634.pROAnZ9F8x`
4. If a store doesn't sell that specific product, REMOVE the link (don't link to category)
5. Tesla Shop link that returns 403 must be removed or replaced

## Already Verified ASINs (confirmed working 2026-03-04)
- B0CHV4WP2C — Spigen EZ Fit 15.4" screen protector (matte)
- B0GFC9WTYB — Wigoo 16" screen protector
- B0CS1DQPR9 — Spigen 8" rear screen protector
- B0F8PPNW49 — 3D MAXpider Kagu floor mats (Juniper)
- B0F2FFNT3X — 3W floor mats (Juniper)
- B0F4SWTMM8 — TuxMat floor mats (Juniper)
- B0874XN4D8 — Samsung T7 SSD 500GB
- B0FTFZ5XJD — Jowua Active Cooling phone mount
- B0FDGLLQYK — Generic Tesla phone mount charger
- B0C7LLK826 — phone mount
- B0D3FQ679M — phone mount (budget)

## Known Yeslak Product URLs (confirmed working)
- /products/tempered-glass-screen-protector-for-new-model-3-model-y-2025
- /products/model-y-juniper-floor-mats-liners-full-coverage-9pcs
- /products/mud-flaps-for-2025-tesla-model-y-juniper
- /products/tesla-model-y-model-3-windshield-glass-sunshade
- /products/2025-tesla-model-y-juniper-rear-console-storage-organizer
- /products/phone-holder-mount-for-tesla-3-y-cybertruck

## Known EV Bandit Product URLs (confirmed working)
- /products/3d-maxpider-floor-mats-tesla-model-y-2026-juniper
- /products/tesla-model-y-windshield-sunshade-2026-juniper-...
- /products/spigen-non-slide-center-console-organizer-expanded-...
- /products/tesla-model-y-juniper-2025-2026-model-3-highland-...-screen-protector
- /products/3y-phone-mount-tesla-model-3-y

## Pages to Fix (priority order)

### P0: Best Accessories page
File: `src/app/best/tesla-model-y-juniper-accessories/page.tsx`
- 10 products, ALL Yeslak/EV Bandit links go to collections (WRONG)
- 8/10 Amazon links use search instead of ASIN
- Need: per-product Yeslak/EV Bandit URLs, or remove if product not available
- Need: find real ASINs for: screen protector, console organizer, sunshade, mud flaps, rear screen protector, performance pedals, trunk organizer, tire inflator

### P1: First Things To Do guide
File: `src/app/guides/first-things-to-do-tesla-model-y-juniper/page.tsx`
- 3 products, Yeslak/EV Bandit all go to collections
- Amazon ASINs are OK
- SSD doesn't exist on Yeslak/EV Bandit — remove those links for SSD

### P1: Console Organizer detail
File: `src/app/reviews/organizers/best-tesla-model-y-juniper-center-console-organizer/page.tsx`
- Yeslak → /collections/ (should be /products/)
- Jowua → /collections/ (should be /products/ or specific item)
- Tesla Shop → 403 (remove or fix)
- 2 Amazon search links, 0 ASINs

### P2: Sunshade detail
File: `src/app/reviews/sunshades/best-tesla-model-y-juniper-sunshade/page.tsx`
- 3 Amazon search links, need ASINs for: REEVAA, Wigoo, VION sunshades

### P2: Mud Flaps detail
File: `src/app/reviews/exterior/best-tesla-model-y-juniper-mud-flaps/page.tsx`
- 4 Amazon search links, need ASINs for: REEVAA, Basenor, HALOBLK mud flaps

### P2: Screen Protector detail
File: `src/app/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector/page.tsx`
- 3 Amazon search links, 2 ASIN links OK

### P2: Floor Mats detail + comparison pages
File: `src/app/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats/page.tsx`
- WeatherTech search link needs ASIN
- LASFIT search link needs ASIN (new section in latest code)
File: `src/app/reviews/floor-mats/3d-maxpider-vs-weathertech-tesla-model-y/page.tsx`
- WeatherTech search link needs ASIN

### P3: Accessories You Don't Need
File: `src/app/guides/tesla-model-y-juniper-accessories-you-dont-need/page.tsx`
- 6 Amazon search links, 0 ASINs

### P3: Category pages (sunshades/page.tsx, exterior/page.tsx, floor-mats/page.tsx, organizers/page.tsx, screen-protectors/page.tsx)
- Various search links that should be ASINs

## How to Find ASINs
Search Amazon for exact product names. The ASIN is in the URL: /dp/{ASIN}
For products you can't find an exact match, use the most relevant ASIN for that product type + Tesla Model Y Juniper.

## How to Find Yeslak/EV Bandit Product URLs
Search their sites for the specific product. Use /products/ URLs only, never /collections/.
Always append the affiliate tracking params.

## Commit
After fixing, commit with message: "fix: replace all search/category links with real product links"
