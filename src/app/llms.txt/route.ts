import { NextResponse } from "next/server";

const content = `# Tesla Model Guy

> Tesla Model Guy is an independent Tesla accessories review site run by a real Model Y Juniper owner. We provide hands-on, unbiased reviews and comparisons of aftermarket accessories for the 2025-2026 Tesla Model Y Juniper (refresh). Based in the US, all products are personally tested.

## Reviews

- [Best Floor Mats for Tesla Model Y Juniper](https://www.teslamodelguy.com/reviews/floor-mats/best-tesla-model-y-juniper-floor-mats): Hands-on comparison of 4 floor mat options — 3D MAXpider Kagu, WeatherTech, 3W Vigormold, and Tuxmat. Includes fitment details, pros/cons, and pricing.
- [Best Screen Protector for Tesla Model Y Juniper](https://www.teslamodelguy.com/reviews/screen-protectors/best-tesla-model-y-juniper-screen-protector): Comparison of screen protectors for the new 15.4" center display. Covers matte vs glossy, installation difficulty, and clarity.
- [Best Mud Flaps for Tesla Model Y Juniper](https://www.teslamodelguy.com/reviews/exterior/best-tesla-model-y-juniper-mud-flaps): 4 no-drill mud flap options tested and compared for fitment, durability, and aesthetics.
- [Best Roof Sunshade for Tesla Model Y Juniper](https://www.teslamodelguy.com/reviews/sunshades/best-tesla-model-y-juniper-sunshade): 4 sunshade options compared for heat reduction, fitment, and ease of installation.
- [Best Phone Mount / Wireless Charger for Tesla Model Y Juniper](https://www.teslamodelguy.com/reviews/charging/best-tesla-model-y-juniper-phone-mount): Wireless charger and phone mount comparison for the refreshed Model Y center console.

## Guides

- [First 7 Things to Do After Getting Your Tesla Model Y Juniper](https://www.teslamodelguy.com/guides/first-things-to-do-tesla-model-y-juniper): Essential setup guide for new Juniper owners — software settings, accessories, and common mistakes to avoid.
- [Tesla Model Y Juniper Delivery Checklist](https://www.teslamodelguy.com/guides/tesla-model-y-juniper-delivery-checklist): Comprehensive checklist of what to inspect when picking up your new Model Y at delivery.
- [Tesla Model Y Juniper vs Old Model Y: Every Difference](https://www.teslamodelguy.com/guides/tesla-model-y-juniper-vs-old-differences): Complete comparison of the 2025-2026 Juniper refresh vs previous generation Model Y.
- [Tesla Model Y Ceramic Tint Cost Guide](https://www.teslamodelguy.com/guides/tesla-model-y-ceramic-tint-cost-guide): Complete cost breakdown for ceramic window tinting — brands, pricing tiers, and what to expect.

## Best Picks

- [10 Must-Have Accessories for Tesla Model Y Juniper](https://www.teslamodelguy.com/best/tesla-model-y-juniper-accessories): Curated ranked list of the most recommended accessories for new Juniper owners, with links and pricing.

## About

- [About Tesla Model Guy](https://www.teslamodelguy.com/about): Real owner, real reviews. Every product is personally tested on our own 2025 Model Y Juniper.
`;

export async function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
