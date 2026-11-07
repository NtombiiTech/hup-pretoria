# HUP — Philly House reference implementation

Reference: https://www.phillyhouse.org/ . Inspected and captured in Chromium on 7 November 2026. Nine complete mobile page screenshots: Home, About, Get Help Now, What We Do, Ways to Give, Get Involved, Stories + News, Contact, and Approach to Homelessness. Desktop homepage also captured. Measurement files and captures: `/workspace/work/hup-reference-study-20261107/`.

## Observed design system

| Component | Reference mobile measurement | HUP implementation |
| --- | --- | --- |
| Header | Approximately 63px, logo left, menu right | 64px, HUP wordmark only |
| Content gutters | 20px at 390px viewport | 20px |
| Hero heading | Studio Brush 54px, tightly led | 54px, 46px below 350px |
| Section heading | Studio Brush 28px / 33.6px | Same |
| Introduction heading | 54px / 43.2px | Same |
| Body | Work Sans 18px / 32.4px | Same |
| Hero buttons | Studio Brush 18px, gold, 10px corners | Same scale, HUP green accent |
| Story cards | Square photo, white body, 18px inset, 8px corners | Same; explicit illustrative labels retained |
| Story body | Approximately 13px / 21px | Same |
| Involvement cards | Saturated colour, white icon, stacked, 24px corners | Three HUP green shades |
| Statistics | 200px painted circles | Verified client meal schedule and registration year |

The homepage retains the photographic overlay hero, hand-drawn heading circle, white fade and paper tear. Its section sequence follows the reference: introduction and photograph, support appeal, stories, full-width gallery, need/facts, involvement, connection, closing appeal. HUP's service and partner sections remain in that sequence.

Dedicated page treatments follow their corresponding reference: full-height photo About; painted heading block for Get Help; left-aligned full-height What We Do; white Ways to Give introduction with coloured panels; dark short Stories + News heading; Contact opens directly with a green form section. No reference programme claims, dates, faith statements, clients or impact counts have been presented as HUP facts.

## HUP palette and identity

Header `#205235`; dark sections `#123c29`; footer `#0c2c1d`; green `#39772f`; accent `#84bd00`; light emphasis `#c6e49c`; pale `#f1f4ed`; white. The HUP wordmark is white, with the pink tapered underline from the supplied sign. No house icon or header subtitle.

Studio Brush and Work Sans are hosted locally. Decorative masks copied from the public reference assets are used for shapes only and coloured with HUP CSS:

- `assets/textures/paper-tear.png`: https://images.squarespace-cdn.com/content/v1/62ab6e8a7082fb7765785e76/8a54a6e6-6031-4023-a609-44bf2a3d1fb0/blue-tear.png?format=1500w
- `assets/textures/paint-circle.png`: https://static1.squarespace.com/static/62ab6e8a7082fb7765785e76/t/62e308dad618dc2ef79c461c/1659046106380/blue-circle1.png
- `assets/textures/paint-stroke.png`: https://static1.squarespace.com/static/62ab6e8a7082fb7765785e76/t/62b7317c6bc8b546ca0484d2/1656172924777/gold-brush.png
- `assets/textures/hand-circle.png`: https://static1.squarespace.com/static/62ab6e8a7082fb7765785e76/t/62bf47f25cffd857c138eb6e/1656702962515/gold-circle.png

## Content and photographs

No new photograph generation or AI enhancement was performed in this update. The previously supplied handover and shared-meal versions remain. Their existing provenance and temporary stock/fictional content are recorded in TEMPORARY-CONTENT.md. Fictional Daniel, Joseph and Michael stories are clearly labelled, including in their dialogs. Accurate HUP organisation information is recorded in OFFICIAL-INFO.md; partner provenance in PARTNER-ASSETS.md. No address on the homepage or footer; contact and shelter directions retain it.

The painted circles describe three scheduled meals **for HUP clients** and nonprofit registration on 7 February 2018. Registration year is not described as the founding year. The site does not invent capacity, accommodation fees, banking details or successful client outcomes.

## Verification

Chromium rendered all eight HUP pages at 320, 390, 768 and 1440px (32 page/viewport combinations). No document horizontal overflow, missing images or duplicate/missing H1s. Mobile navigation, Escape dismissal and story dialogs verified in Chromium. Local links/assets/anchors, gallery, consent, donation choices and enquiry handling also passed the existing checks. CSS respects reduced motion.

Browser fixtures served exact local files through Playwright routing; post-publication requests separately check the public deployment. Contact remains honest email-draft mode until HUP supplies an active delivery endpoint. Mock delivery tests cover failures, validation and duplicate prevention without sending real messages.
