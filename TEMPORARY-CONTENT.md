# Temporary homepage content — replace with HUP material

Requested by the user for the website preview on 6 November 2026. Real photographs and accounts are expected from HUP later; no automatic date-based replacement is configured.

## Temporary imagery

All stock images are downloaded locally and resized / encoded as WebP; no models or faces were generated. Attribution is available in the footer's Photograph & logo credits dialog. The models are not represented as actual HUP clients or volunteers.

| Local file in dist/assets/stock | Placement | Source and photographer |
| --- | --- | --- |
| hero-portrait.webp / hero-portrait-mobile.webp | Hero and Daniel illustrative card | Dapo Abideen, https://www.pexels.com/photo/cheerful-young-black-man-smiling-at-camera-5984158/ |
| giving-back.webp | We are HUP supporting photo | Gustavo Fring, https://www.pexels.com/photo/people-packing-donations-7156163/ |
| donation-team.webp | Give what you can supporting photo | RDNE Stock project, https://www.pexels.com/photo/food-love-people-africa-6646880/ |
| story-joseph.webp | Joseph illustrative card | AZEEZ HAMZAT, https://www.pexels.com/photo/black-and-white-portrait-of-a-smiling-elderly-man-30280745/ |
| story-michael.webp | Michael illustrative card | Samuel Moses, https://www.pexels.com/photo/smiling-man-in-black-and-white-portrait-outdoors-30663353/ |

These source pages identify the images as free stock photography. Their subjects' personal circumstances, names and association with HUP are not established by the images.

## Temporary stories

Daniel, Joseph and Michael are explicitly labelled fictional / illustrative on every card, in the section introduction and in the story dialogs. They are not quotes, testimonials, statistics or reports of actual HUP outcomes. No review or testimonial structured data has been added.

Replace the three .story-card articles in dist/index.html and the story-daniel / story-joseph / story-michael entries in dist/app.js with HUP-approved real accounts and photographs. Update visible labels, image alt text and credit/source details at the same time. Do not leave fictional text behind a real person's photograph.

## Changes that should remain

- Header: logo and menu only on mobile; name caption removed from header markup.
- Mobile header height 78px (previously 94px); matching menu overlay position and scroll offset.
- Homepage announcement and hero credit overlay removed.
- Street address retained on Contact / Shelter pages; removed from homepage and shared footer.
- We are HUP, Give what you can, Find your way to help and Help with the next step centred on phones.
- What we do section is unchanged.
- Actual community archive photos, captions and gallery are unchanged.

Live screenshot QA was unavailable in this environment. DOM / interaction / link checks were used; responsive CSS is implemented but new rendered screenshots were not inspected.
