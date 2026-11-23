/* Analytics for shankar-jayaraj.github.io: GA4 property "landing", stream "My landing page",
 * measurement ID G-04MPNZV7JT. (Despite the stream's /landing/ label, it collects the whole site.)
 *
 * Every tagged page loads this file instead of the inline gtag snippet each page used to carry:
 *   <script defer src="assets/js/analytics.js?v=..."></script>
 *
 * What it does
 * 1. Reports from the live site only. Local previews (localhost, file://, a server started in the
 *    parent folder) and copies on any other host send nothing, so they stop counting as visitors.
 * 2. Lets a browser opt itself out. Open any page once with ?notrack and that browser stops
 *    reporting; open a page with ?track to turn it back on. The flag is one localStorage key,
 *    "sj-notrack", and nothing else is stored. Use it on Shankar's own phone and laptop.
 * 3. Counts enquiries, which GA could not see before:
 *      generate_lead  method=booking_form  booking form sent (it opens WhatsApp with the message)
 *      generate_lead  method=whatsapp      a WhatsApp chat link clicked
 *      contact_click  method=topmate       Topmate (1:1 bookings) link clicked
 *      contact_click  method=linkedin      LinkedIn profile link clicked
 *    Every event carries cta_location: the id of the nearest enclosing element (other than
 *    "main"), or header, footer or nav. Link clicks also carry cta_text, the link's own words
 *    (site copy, at most 60 characters). The booking form also sends engagement_type, the value
 *    of its fixed dropdown. No name, organisation, date, audience or topic is ever sent.
 *    A link marked data-track="off" is ignored. The booking form's fallback "Open WhatsApp"
 *    button carries it, so a single enquiry is not counted twice.
 *
 * Checking it: gtag() always queues into window.dataLayer, even where nothing is sent. On a
 * local preview, click a WhatsApp link, then run  dataLayer.filter(e => e[0] === 'event')
 * in the console. window.sjAnalyticsLive says whether this browser is reporting.
 *
 * GA side (Admin): mark generate_lead as a key event, and register method, cta_location,
 * cta_text and engagement_type as event-scoped custom dimensions so they appear in reports.
 */
(function () {
  'use strict';

  var GA_ID = 'G-04MPNZV7JT';
  var LIVE_HOST = 'shankar-jayaraj.github.io';

  window.dataLayer = window.dataLayer || [];
  var gtag = window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  function optedOut() {
    try {
      var q = location.search;
      if (/[?&]notrack(?:[=&]|$)/.test(q)) localStorage.setItem('sj-notrack', '1');
      if (/[?&]track(?:[=&]|$)/.test(q)) localStorage.removeItem('sj-notrack');
      return localStorage.getItem('sj-notrack') === '1';
    } catch (e) {
      return false; // storage blocked (private mode, strict settings): report as normal
    }
  }

  var onLiveHost = location.hostname === LIVE_HOST;
  var live = onLiveHost && !optedOut();
  window.sjAnalyticsLive = live;

  if (live) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  } else if (onLiveHost && window.console) {
    console.info('Analytics is off in this browser (?notrack). Open any page with ?track to turn it back on.');
  }

  gtag('js', new Date());
  gtag('config', GA_ID);

  // Where on the page the click happened: the nearest id (other than the page-wide "main"),
  // or the landmark it sits in.
  function where(el) {
    for (var n = el; n && n !== document.body; n = n.parentNode) {
      if (n.id && n.id !== 'main') return n.id;
      var t = n.tagName ? n.tagName.toLowerCase() : '';
      if (t === 'header' || t === 'footer' || t === 'nav') return t;
    }
    return 'main';
  }

  // The button's own words, so two links in the same section can be told apart.
  function label(a) {
    return (a.textContent || a.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 60);
  }

  // Called by the booking form in revamp-main.js.
  window.sjLead = function (method, params) {
    var p = { method: method, cta_location: 'main' };
    for (var k in params) if (Object.prototype.hasOwnProperty.call(params, k)) p[k] = params[k];
    gtag('event', 'generate_lead', p);
  };

  var RULES = [
    // WhatsApp chat links only. Group invites (chat.whatsapp.com) are not enquiries.
    [/^https?:\/\/(api\.whatsapp\.com\/send|wa\.me\/)/i, 'generate_lead', 'whatsapp'],
    [/^https?:\/\/(www\.)?topmate\.io\//i, 'contact_click', 'topmate'],
    [/^https?:\/\/([a-z]{2,3}\.)?linkedin\.com\/in\//i, 'contact_click', 'linkedin']
  ];

  function onLinkClick(ev) {
    if (ev.type === 'auxclick' && ev.button !== 1) return; // middle-click only
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!a || a.getAttribute('data-track') === 'off') return;
    for (var i = 0; i < RULES.length; i++) {
      if (RULES[i][0].test(a.href)) {
        gtag('event', RULES[i][1], { method: RULES[i][2], cta_location: where(a), cta_text: label(a) });
        return;
      }
    }
  }

  // Capture phase, so a handler elsewhere that stops propagation cannot hide the click.
  document.addEventListener('click', onLinkClick, true);
  document.addEventListener('auxclick', onLinkClick, true);
})();
