# HUP — Philly House reference redesign

Reference: https://www.phillyhouse.org/ . Source inspected 6 November 2026: public HTML, Squarespace site CSS, custom CSS, homepage section markup and get-help page. Three mobile screenshots supplied by the user were visually inspected. Firecrawl refused capture because credits were exhausted; an additional desktop screenshot and live animation states could not be captured. Desktop column structure is supported by source markup rather than an observed desktop screenshot. Exact pixel fidelity is therefore not claimed.

## Extracted reference design

- Header: navy `#002864` / dark navy `#0c2760`, centred logo and two navigation groups on desktop; logo left and three-line accent menu on mobile. Main source CSS uses Work Sans 18px / 1.8 body copy.
- Headings, navigation and buttons: Studio Brush regular, uppercase. Heading font is explicitly declared by reference custom CSS at https://static1.squarespace.com/static/custom-css/62ab6e8a7082fb7765785e76/62ab6e8a7082fb7765785e90/1/custom.css . Body Work Sans also appears in the site's main CSS.
- Reference primary buttons: gold `#f1a83b`, dark navy type, 10px radius, approximately 20px 35px padding; .home-hero-button source. White/transparent secondary treatments.
- Hero: monochrome portrait, centred brush lettering, outlined hand-drawn word circle, two side-by-side action buttons; supplied mobile screenshot establishes this arrangement.
- Section sequence: hero; white organisation intro; current campaign split; dark story-card area with torn top; full-width photo gallery; white need / approach section; dark involvement section; image-backed connection section with rounded white card; closing refuge / donation appeal; logo / contact footer.
- Stories: three columns in desktop markup; stacked cards in supplied mobile screenshot. Square portraits, white text panel, 12–24px rounded treatment, small initial shadow increasing on hover (custom CSS specifies shadow transition .3s).
- Motion evidence: source declares 480ms opacity loading and a 2s headline fade; card hover shadow and image transitions appear in CSS. Parallax configuration is present, but live movement was not observed. HUP uses modest opacity/translate entry and image/hover transitions, with reduced-motion support.

## HUP mapping

| Role | HUP value |
| --- | --- |
| Header / primary green | `#205235` |
| Dark story sections | `#123c29` |
| Footer | `#0c2c1d` |
| Existing brand green | `#39772f` |
| Existing accent green | `#84bd00` |
| Light green emphasis | `#c6e49c` |
| White / pale sections | `#ffffff` / `#f1f4ed` |
| Headings | Studio Brush regular |
| Body | Work Sans 400–700, locally hosted |

The reference's navy/gold roles are mapped to HUP's existing green-and-white palette. The original HUP house symbol and name are retained. Header, buttons, cards, spacing and forms are restyled across all eight pages.

Home adds HUP's actual four service areas and public-sector partners to the reference sequence. The network membership stays a compact logo row. The connection card links to the functioning contact page rather than displaying an unconfigured newsletter signup. The need section describes shelter/support rather than reusing Philly House's statistics. Profiles are identified as 2022 reporting, with no invented testimonials or outcomes. No Philly House client photographs, logo, geographic illustration, programme claims, founding date or faith statements are used as HUP content.

## Local assets

- Hero / founder card: assets/founder.webp — Buang Mfumane, Ron Sibiya / Rekord, October 2022.
- Campaign / gallery: assets/food.webp, meal.webp, volunteers.webp, outreach.webp — HUP outreach, July 2022.
- Story cards: assets/zanele.webp and counselling.webp — published HUP social-worker profiles, 2022.
- Partners: assets/partners/; original provenance in PARTNER-ASSETS.md.
- Studio Brush reference file: https://static1.squarespace.com/static/62ab6e8a7082fb7765785e76/t/62b0ec663621fe3b10e1d4ce/1655762022665/studio-brush-regular.woff2 . Loaded locally as assets/studio-brush.woff2.
- Work Sans: Google Fonts CSS https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap . Local files declared in assets/philly-fonts.css.

## Responsive decisions and validation limits

Desktop navigation switches to mobile at 960px. Story cards become one column at 640px; full-width photographs stack. Primary hero actions remain side by side, matching the supplied screenshot. Cards, forms and partner grids have explicit small-screen layouts, with 320px overrides. Font glyph metrics were checked for narrow hero headings and buttons; this is not a browser layout test.

Public-site screenshots and local browser QA remain unavailable for this version because Firecrawl credits are exhausted and the Sites-managed browser tool is absent. Source/interaction checks cover all eight pages and the existing donation / enquiry flows. Real form delivery remains pending activation of HUP's Formspree endpoint as documented in CONTENT-HANDOVER.md.

## Supplied HUP identity and operational information

On-site photographs supplied after this redesign replace the proposed house symbol with a white HUP / pink underline typographic website mark. Slogan, registration, street address, team names and client meal timetable are now integrated without changing the Philly House layout. See OFFICIAL-INFO.md for exact transcription, provenance and limitations.
