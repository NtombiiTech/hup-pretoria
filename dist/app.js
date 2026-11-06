'use strict';
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const menu = $('#mobile-nav');
const menuButton = $('.menu-toggle');
function closeMenu() {
 menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
 const open = menu.hidden; menu.hidden = !open;
 menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
$$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
 if (e.key === 'Escape' && !menu.hidden) { closeMenu(); menuButton.focus(); }
});
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); }, {passive:true});
const sources = {
 july:'https://www.citizen.co.za/rekord/news-headlines/2022/07/20/hup-and-its-stakeholders-feed-the-homeless-on-mandela-day/',
 august:'https://www.citizen.co.za/rekord/news-headlines/local-news/2022/08/10/hup-urges-residents-to-help-the-homeless-stand-on-their-own-feet/',
 october:'https://www.citizen.co.za/rekord/news-headlines/2022/10/21/npo-empowers-homeless-people-in-sunnyside/',
 zanele:'https://www.citizen.co.za/rekord/news-headlines/local-news/2022/10/05/giving-homeless-people-money-may-worsen-problem-says-expert/',
 network:'https://homeless.org.za/homeless-network/',
 municipal:'https://www.tshwane.gov.za/wp-admin/admin-ajax.php?action=wpfd&juwpfisadmin=false&task=file.download&wpfd_category_id=502&wpfd_file_id=80068',
 properties:'https://www.tshwane.gov.za/wp-content/uploads/2025/10/10.-Agenda-Council-Community-and-Social-Development-Services-25-09-2025.pdf',
 parliament:'https://www.parliament.gov.za/storage/app/media/Docs/exe_rq_na/00593b0e-c806-4d5c-9767-47ddc0d68675.pdf',
 pen:'https://www.pen.org.za/wp-content/uploads/2021/12/PEN_Resources-list_Apply-for-help.pdf'
};
const link=(u,t)=>`<a href="${u}" target="_blank" rel="noopener noreferrer">${t} ↗</a>`;
const pages={
 privacy:`<h2 id="dialog-title">Privacy information</h2><p>Use the enquiry form to contact HUP about accommodation, donations, volunteering or partnerships. Share only the information needed for a reply. Please do not include identity numbers, documents or detailed medical histories.</p><p>In email mode, this website prepares a draft in your email app. You choose whether to send it, and your email provider handles that message.</p><p>If direct delivery is available, the form identifies Formspree before you submit. Formspree processes the name, contact details and message you provide and forwards the enquiry to HUP. See <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Formspree’s privacy policy ↗</a>.</p><p>HUP uses the details you send to respond to your enquiry. Contact <a href="mailto:hupnpo@gmail.com">hupnpo@gmail.com</a> with questions about your enquiry or to request correction or deletion of information you have shared.</p><p>The donation planner prepares an enquiry; it does not take payments or arrange admission. Your planner text is passed to the contact page in the URL, so avoid sensitive information. This website does not use application cookies, analytics or browser storage.</p><p>External websites and email providers have their own privacy practices. Site hosting is provided by ChatGPT Sites.</p>`,
 credits:`<h2 id="dialog-title">Photograph &amp; logo credits</h2><p>Partner identities were supplied by HUP’s website brief. City of Tshwane, DSD and Gauteng artwork is sourced from their official websites; SAPS badge artwork is a vector transcription on Wikimedia Commons citing an official SAPS publication. The National Homeless Network logo is sourced from its official website, matching the logo supplied by HUP. Marks identify the listed organisations and are not a certification of this website.</p><h3>HUP-supplied giving-back photographs</h3><p>The homepage hero and giving-back photograph underneath are AI-enhanced recreations of photographs supplied by HUP, carrying the Spur Joy of Giving branding. They are not untouched originals; fine details may differ. No event date or new partnership status is inferred from these images.</p><h3>Temporary stock photography and illustrative stories</h3><p>The illustrative story portraits and some supporting images are stock photography. The models are not identified as HUP clients, staff or volunteers. Daniel, Joseph and Michael are fictional examples prepared for this website preview, not testimonials or accounts of HUP outcomes.</p><ul><li>${link('https://www.pexels.com/photo/cheerful-young-black-man-smiling-at-camera-5984158/','Dapo Abideen / Pexels — hero and Daniel portrait')}</li><li>${link('https://www.pexels.com/photo/people-packing-donations-7156163/','Gustavo Fring / Pexels — giving back')}</li><li>${link('https://www.pexels.com/photo/food-love-people-africa-6646880/','RDNE Stock project / Pexels — donation team')}</li><li>${link('https://www.pexels.com/photo/black-and-white-portrait-of-a-smiling-elderly-man-30280745/','AZEEZ HAMZAT / Pexels — Joseph portrait')}</li><li>${link('https://www.pexels.com/photo/smiling-man-in-black-and-white-portrait-outdoors-30663353/','Samuel Moses / Pexels — Michael portrait')}</li></ul><h3>HUP press archive</h3><p>The historical HUP photographs on this website come from press coverage. They do not establish present staff appointments, available services or current capacity.</p><h3>Mandela Day, July 2022</h3><p>Community outreach, food preparation, the park cleanup, Buang Mfumane and Sunnyside police participation. The publisher credits the photographs to Ron Sibiya / Rekord.</p><p>${link(sources.july,'Original article and gallery')}</p><h3>Founder profile, October 2022</h3><p>Buang Mfumane’s photograph is credited to Ron Sibiya / Rekord. ${link(sources.october,'Original profile')}</p><h3>Social-worker profile, October 2022</h3><p>Zanele Mngadi’s photograph is credited to Ron Sibiya / Rekord. ${link(sources.zanele,'Original profile')}</p><h3>Social-worker profile, August 2022</h3><p>Thikhathali Mampokoro’s portrait appears in Rekord. The individual photo credit requires confirmation. ${link(sources.august,'Original reporting')}</p><p>Public image reuse rights and appropriate participant consent remain to be confirmed. The website wordmark transcribes the HUP lettering and pink underline on the supplied sign using crisp website typography; it is not an original vector master. HUP’s supplied sign also gives the slogan “Where Potential Meets Opportunities.” The site retains the green-and-white palette requested by HUP’s website brief.</p>`,
 sources:`<h2 id="dialog-title">Published sources</h2><p>Research checked on 6 November 2026. Publication dates and the periods represented matter: recently retrieved historical reporting is not confirmation of current operations.</p><h3>Information supplied by HUP</h3><p>On-site photographs supplied for this website show the registration certificate (203-254 NPO, entered on 7 February 2018), signage for 577 De Kock Street in Sunnyside, the organisational chart and the daily meal notice. The centre team name is confirmed as Concellia by HUP’s website brief.</p><h3>Organisation and approach</h3><ul><li>${link(sources.october,'Rekord, 21 October 2022')}: founder profile and self-reliance approach.</li><li>${link(sources.network,'National Homeless Network')}: HUP member listing and general email.</li><li>${link(sources.parliament,'National Assembly written reply, 2023')}: identifies HUP among funded organisations at that time.</li></ul><h3>Services and community activity</h3><ul><li>${link(sources.zanele,'Rekord, 5 October 2022')}: Zanele Mngadi’s perspective on individual support needs.</li><li>${link(sources.august,'Rekord, 10 August 2022')}: shelter, counselling, employment guidance and rehabilitation referrals.</li><li>${link(sources.july,'Rekord, 20 July 2022')}: Mandela Day activity and event figures.</li><li>${link(sources.pen,'PEN resource list, December 2021')}: historical men’s shelter listing.</li></ul><h3>Contact information and premises</h3><p>${link(sources.municipal,'City of Tshwane directory, page 48')} lists 068 023 3487, 074 665 7384 and hupnpo@gmail.com, alongside domain-based inboxes. This site uses the Gmail address also listed by the National Homeless Network.</p><p>The on-site signage supplied by HUP identifies 577 De Kock Street, Sunnyside, Pretoria, 0002. Older public records contain other addresses. The directory lists 471 Du Kock Street. ${link(sources.properties,'September 2025 municipal property records')} associate HUP with 319 Steve Biko Street, 301 Walton Jameson Street and 577 De Kock Street. The website uses the address on HUP’s supplied signage. Please call to agree on an arrival time and confirm admission availability.</p><p>The registration certificate confirms 203-254 NPO and the registration date of 7 February 2018. Registration date is not presented as the founding date. Banking details, current annual impact, current bed capacity and tax-deductibility status remain unconfirmed.</p>`
};

Object.assign(pages, {
 'story-daniel': `<h2 id="dialog-title">Daniel: one step at a time</h2><p class="story-modal-note">Fictional concept story · Stock portrait. This is not a real HUP client account.</p><p>Daniel wants a routine he can rely on. A place to sleep means he can wake up, get ready and decide what needs to happen that day.</p><p>He begins with small tasks: putting his experience into a CV, keeping track of opportunities and asking for help when he gets stuck. There is no sudden transformation, just a little more room to plan.</p><p>This illustrative story explores how temporary accommodation and practical support can help someone take their next step.</p><p><a href="find-shelter.html">Find out about shelter at HUP →</a></p>`,
 'story-joseph': `<h2 id="dialog-title">Joseph: room to breathe</h2><p class="story-modal-note">Fictional concept story · Stock portrait. This is not a real HUP client account.</p><p>For Joseph, having somewhere to sit down and talk makes a difference. He does not need every answer at once. He needs time to explain what is happening and work through one concern at a time.</p><p>Rest and regular conversations give him a way to think about his options. His next step may be a referral, a call or another conversation with someone who can help.</p><p>This illustrative story explores the value of listening and connecting people with appropriate support.</p><p><a href="services.html">Explore HUP’s services →</a></p>`,
 'story-michael': `<h2 id="dialog-title">Michael: putting skills to use</h2><p class="story-modal-note">Fictional concept story · Stock portrait. This is not a real HUP client account.</p><p>Michael knows he has something to offer. What he needs is a chance to take stock of his experience and work out where to look next.</p><p>He starts by writing down the work he has done, talking through his options and setting a few realistic tasks for the week. Progress comes from having a plan he can keep returning to.</p><p>This illustrative story explores how guidance and practical support can help someone prepare for work. It does not describe a job placement or an actual HUP outcome.</p><p><a href="services.html">Read about work support →</a></p>`
});

const infoDialog=$('#info-dialog');
$$('[data-dialog]').forEach(button=>button.addEventListener('click',()=>{
 $('#dialog-content').innerHTML=pages[button.dataset.dialog];infoDialog.showModal();infoDialog.scrollTop=0;
}));
$('.dialog-close').addEventListener('click',()=>infoDialog.close());
const gallery=[
 {src:'assets/food.webp',caption:'Food preparation at HUP’s Mandela Day outreach, July 2022. Photo: Ron Sibiya / Rekord.'},
 {src:'assets/cleanup.webp',caption:'Park cleanup in Gezina, July 2022. Photo: Ron Sibiya / Rekord.'},
 {src:'assets/volunteers.webp',caption:'Sunnyside police assisting at HUP, July 2022. Photo: Ron Sibiya / Rekord.'},
 {src:'assets/meal.webp',caption:'Meal distribution in Gezina, July 2022. Photo: Ron Sibiya / Rekord.'},
 {src:'assets/outreach.webp',caption:'Buang Mfumane at the community outreach event, July 2022. Photo: Ron Sibiya / Rekord.'}
];
let galleryIndex=0;
const lightbox=$('#lightbox');
function showGallery(index){
 galleryIndex=(index+gallery.length)%gallery.length;
 const photo=gallery[galleryIndex];$('#lightbox-image').src=photo.src;$('#lightbox-image').alt=photo.caption;
 $('#lightbox-caption').textContent=`${galleryIndex+1} / ${gallery.length} — ${photo.caption}`;
}
$$('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{showGallery(Number(button.dataset.gallery));lightbox.showModal();}));
$('#gallery-prev').addEventListener('click',()=>showGallery(galleryIndex-1));
$('#gallery-next').addEventListener('click',()=>showGallery(galleryIndex+1));
$('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('keydown',e=>{
 if(e.key==='ArrowRight'){e.preventDefault();showGallery(galleryIndex+1);}
 if(e.key==='ArrowLeft'){e.preventDefault();showGallery(galleryIndex-1);}
});
[lightbox,infoDialog].forEach(dialog=>dialog.addEventListener('click',e=>{
 if(e.target!==dialog)return;
 const b=dialog.getBoundingClientRect();
 if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();
}));
// Public Formspree form IDs require an activated recipient inbox; no API key belongs in the browser.
let formspreeEndpoint = '';
function validFormEndpoint(value) {
 try {
  const url = new URL(value);
  return url.origin === 'https://formspree.io' && /^\/f\/[a-zA-Z0-9]+$/.test(url.pathname) && !url.search && !url.hash ? url.href : '';
 } catch { return ''; }
}
function emailDraftURL(form) {
 const fields = new FormData(form);
 const subject = `HUP enquiry: ${fields.get('interest')}`;
 const phone = String(fields.get('phone') || '').trim();
 const body = `Hello HUP,\n\n${fields.get('message')}\n\nFrom: ${fields.get('name')}\nReply email: ${fields.get('email')}${phone ? `\nPhone: ${phone}` : ''}`;
 return `mailto:hupnpo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function updateDeliveryUI() {
 if (!$('#contact-form')) return;
 $('#delivery-description').textContent = formspreeEndpoint ? 'Send your enquiry to HUP. For accommodation today, please call the shelter.' : 'Your email app will open with your message ready to review and send.';
 $('#contact-submit').textContent = formspreeEndpoint ? 'Send enquiry ↗' : 'Prepare email ↗';
 $('#delivery-note').textContent = formspreeEndpoint ? 'For urgent accommodation, please call.' : 'Review and send it in your email app.';
 $('#delivery-privacy').textContent = formspreeEndpoint ? 'Your enquiry will be processed by Formspree and sent to HUP. Please share only the details needed for a reply.' : '';
}
const contactForm = $('#contact-form');
let deliveryReady = Promise.resolve();
if (contactForm) {
 $('#contact-submit').disabled = true;
 deliveryReady = (async () => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
   const response = await fetch('contact-config.json', {signal:controller.signal, cache:'no-store'});
   if (response.ok) formspreeEndpoint = validFormEndpoint((await response.json()).formspreeEndpoint);
  } catch { /* Email remains available if direct delivery is not configured or settings cannot load. */ }
  finally { clearTimeout(timer); updateDeliveryUI(); $('#contact-submit').disabled = false; }
 })();
 let submitting = false;
 contactForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (submitting || !contactForm.reportValidity()) return;
  if (String(new FormData(contactForm).get('_gotcha') || '').trim()) return;
  submitting = true;
  const submit = $('#contact-submit');
  const status = $('#form-status');
  status.textContent = '';
  submit.disabled = true;
  await deliveryReady;
  submit.disabled = true;
  const fallback = $('#email-fallback');
  fallback.href = emailDraftURL(contactForm);
  fallback.hidden = false;
  if (!formspreeEndpoint) {
   status.textContent = 'Your email draft is ready. Review and send it in your email app. If the app does not open, use the email link above or write to hupnpo@gmail.com. This website has not sent your message.';
   submitting = false; submit.disabled = false;
   window.location.href = fallback.href;
   return;
  }
  submit.textContent = 'Sending…';
  contactForm.setAttribute('aria-busy', 'true');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
   const fields = new FormData(contactForm);
   fields.set('_subject', `HUP enquiry: ${fields.get('interest')}`);
   const response = await fetch(formspreeEndpoint, {method:'POST',body:fields,headers:{Accept:'application/json'},signal:controller.signal});
   const result = await response.json();
   if (!response.ok || result.ok !== true) {
    status.textContent = response.status === 429 ? 'Too many enquiries have been submitted. Please try again later or call HUP. Your message is still in the form.' : 'Your enquiry could not be submitted. Check your details and try again, or use the email link above. Your message is still in the form.';
    return;
   }
   contactForm.reset();
   fallback.hidden = true;
   status.textContent = 'Your enquiry has been submitted to HUP. Thank you. If you need accommodation today, please call the shelter.';
  } catch {
   status.textContent = 'We could not confirm that your enquiry was sent. Your message is still in the form. You can try again or use the email link above.';
  } finally {
   clearTimeout(timer); submitting = false; submit.disabled = false;
   contactForm.removeAttribute('aria-busy'); updateDeliveryUI();
  }
 });
}
function donationEnquiryURL(form) {
 const fields = new FormData(form);
 const offers = fields.getAll('offer');
 if (!offers.length) return null;
 const details = String(fields.get('details') || '').trim().slice(0,1200);
 const message = `I would like to offer: ${offers.join(', ')}.${details ? `\n\n${details}` : ''}\n\nPlease let me know what is needed and how to arrange the donation.`;
 const enquiry = offers.length === 1 && offers[0] === 'A financial contribution' ? 'donation' : offers.length === 1 && offers[0] === 'Time or skills' ? 'volunteer' : 'items';
 return `contact.html?${new URLSearchParams({enquiry,message})}#contact-form`;
}
$('#donation-planner-form')?.addEventListener('submit', event => {
 event.preventDefault();
 const url = donationEnquiryURL(event.currentTarget);
 if (!url) { $('#planner-status').textContent = 'Please choose at least one way you would like to help.'; return; }
 window.location.href = url;
});

if('IntersectionObserver'in window){
 if(!reducedMotion.matches){
  document.documentElement.classList.add('motion-ready');
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}
  }),{threshold:.06,rootMargin:'0px 0px -12px 0px'});
  $$('.reveal').forEach(el=>reveal.observe(el));
 }

}
reducedMotion.addEventListener('change',()=>{
 if(reducedMotion.matches)document.documentElement.classList.remove('motion-ready');
});

// Preserve the visitor's chosen task and draft between donation planning and contact.
const enquiryParams = new URLSearchParams(window.location.search);
const enquiry = enquiryParams.get('enquiry');
const enquiryTopics = {donation:'Financial contributions',items:'Food and clothing donations',volunteer:'Volunteering',partnership:'Partnerships',organisation:'Organisation documents',visit:'Directions and visiting',shelter:'Shelter and admission'};
const enquiryDrafts = {donation:'Please send me HUP’s current banking details, the payment reference to use and donation acknowledgement arrangements.',organisation:'Please let me know how to obtain HUP’s registration documents and information for a donation or partnership.',visit:'I would like to arrange a visit to HUP at 577 De Kock Street, Sunnyside. Please help me with directions and confirm a suitable arrival time.',shelter:'I am looking for accommodation. Please let me know how to speak to the team about admission and availability.'};
const knownEnquiry = Object.hasOwn(enquiryTopics, enquiry) ? enquiry : '';
if ($('#interest') && knownEnquiry) $('#interest').value = enquiryTopics[knownEnquiry];
if ($('#message')) $('#message').value = (enquiryParams.get('message') || (knownEnquiry ? enquiryDrafts[knownEnquiry] : '') || '').slice(0,3000);
// Dropdown menus work on click and keyboard, and close outside the navigation.
const dropdowns = $$('.nav-dropdown');
dropdowns.forEach(dropdown => {
 dropdown.addEventListener('toggle', () => {
  if (dropdown.open) dropdowns.forEach(other => { if (other !== dropdown) other.open = false; });
 });
 dropdown.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dropdown.open) {
   event.preventDefault(); dropdown.open = false; dropdown.querySelector('summary').focus();
  }
 });
});
document.addEventListener('click', event => {
 dropdowns.forEach(dropdown => { if (!dropdown.contains(event.target)) dropdown.open = false; });
});

// Reference-style notice is dismissible for this page visit, without browser storage.
$('.notice-close')?.addEventListener('click', () => {
 $('#shelter-notice').hidden = true;
});
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
$$('.site-header nav a').forEach(anchor => {
 const target = new URL(anchor.href, window.location.href);
 if (target.pathname.split('/').pop() === currentPage && !target.hash) anchor.setAttribute('aria-current', 'page');
});
