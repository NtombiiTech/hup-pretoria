# HUP content and enquiry handover

Updated 6 November 2026. Keep the approved homepage design and the green-and-white visual system.

## Implemented

- Shelter page: six-point call checklist, admissions FAQs, directions enquiry and downloadable checklist.
- Donation page: money / goods / volunteering routes, item discussion guide, interactive donation planner and group-visit guidance.
- About page: founder story, two dated social-worker profiles, network membership and organisation-document enquiry.
- Contact page: optional phone, consent, task preselection, prepared enquiry text, honest email delivery, and configurable direct Formspree delivery.
- Community and news: ongoing community support, evergreen supporter notices, historic outreach gallery, four dated press stories.

## Updated from HUP’s supplied on-site photographs

The sign and certificate now establish 577 De Kock Street, Sunnyside, Pretoria, 0002; registration 203-254 NPO dated 7 February 2018; the official sign slogan; readable team names including Concellia (confirmed by the user); and client meal windows 06:00–07:00 / 12:00–13:00 / 19:00–20:00. Source boundaries and unresolved labels are recorded in OFFICIAL-INFO.md.

## Earlier research gaps (superseded where noted above)

| Needed | Current public presentation | Where to update once confirmed |
| --- | --- | --- |
| Visitor address and visiting / admission hours | Address updated from supplied signage; Google Maps search link added. Arrival hours still require a call. | contact.html #visit, find-shelter.html directions, shared footer |
| Eligibility, documents, fees, length of stay and house rules | Questions to ask the shelter; no invented policy | find-shelter.html checklist and FAQs |
| Banking details, reference, receipts and any payment link | Request banking details directly | donate.html #money |
| Actual urgent needs, sizes and quantities with a review date | Examples to discuss, not claimed shortages | donate.html #current-needs |
| Registration / current governance and funding | 203-254 NPO and registration date now published from the certificate. Current funding remains unconfirmed. | about.html #organisation |
| Staff names, role titles, portraits and contact routing | Supplied chart names published; unclear role titles withheld. Public 2022 profiles stay labelled as archive. | about.html #people |
| Recent photos, event dates and approved captions | Original dated press archive; no invented recent events or testimonials | community.html, news.html |

## Research and sources

- https://homeless.org.za/homeless-network/ — HUP member listing and hupnpo@gmail.com, retrieved 6 November 2026.
- https://www.citizen.co.za/rekord/news-headlines/2022/10/21/npo-empowers-homeless-people-in-sunnyside/ — Buang Mfumane, founder and approach, 21 October 2022.
- https://www.citizen.co.za/rekord/news-headlines/local-news/2022/08/10/hup-urges-residents-to-help-the-homeless-stand-on-their-own-feet/ — Thikhathali Mampokoro, services and food / clothing donations, 10 August 2022. Its historical three-to-six-month stay is not presented as a current policy.
- https://www.citizen.co.za/rekord/news-headlines/local-news/2022/10/05/giving-homeless-people-money-may-worsen-problem-says-expert/ — Zanele Mngadi and individual support needs, 5 October 2022.
- https://www.citizen.co.za/rekord/news-headlines/2022/07/20/hup-and-its-stakeholders-feed-the-homeless-on-mandela-day/ — July 2022 event, food, clothing, volunteers and partners.
- Historic public funding and municipal directory sources are linked in the site's Published sources dialog.

The old domain www.hupsa.org.za failed DNS resolution on 6 November 2026. Searches did not yield verified current banking, admission policy, reception hours, registration number or recent photographs. Do not use similarly named organisations' banking details.

The user confirmed that community support has happened repeatedly and supplied the four public-sector partner identities. The 2022 event is only one example. Partner artwork provenance remains in PARTNER-ASSETS.md.

## Activate direct enquiries

The deployed form currently prepares an email to hupnpo@gmail.com. The website explicitly says the visitor must send it. No messages were sent during testing.

1. In HUP's Formspree account, create a form and activate / verify the recipient inbox for HUP. Keep ownership with HUP.
2. Obtain the public endpoint, in the format `https://formspree.io/f/<form-id>`. This is a public form identifier; no API key is needed in the browser.
3. Set `formspreeEndpoint` in dist/contact-config.json to that activated endpoint and republish. Do not publish passwords, secret keys or account tokens.
4. The form will show direct-delivery wording and a Formspree privacy notice automatically. It includes consent, an empty honeypot field, loading state, duplicate-click prevention, failure handling, and email fallback. Drafts clear only after an explicit successful JSON response.
5. Complete an authorised real delivery test and confirm receipt with HUP before calling email delivery verified. Automated checks so far used mocked responses only.

Official integration reference: https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax

The site does not process payments, reserve beds, promise availability or display current urgent shortages without HUP's confirmation.
