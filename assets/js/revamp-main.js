/* Shankar J — site engine
   Single source of truth: data/stats.json + data/sessions.json
   Numbers also exist as static HTML text (crawlable fallback); JS syncs them on load. */

document.addEventListener('DOMContentLoaded', function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  function closeNav() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(links.classList.contains('open')));
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { closeNav(); toggle.focus(); }
    });
  }

  // Header elevation on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // External links open in a new tab
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (a.hostname && a.hostname !== location.hostname) {
      a.target = '_blank';
      if (!/\bnoopener\b/.test(a.rel)) a.rel = (a.rel ? a.rel + ' ' : '') + 'noopener';
    }
  });

  // Poster lightbox (progressive enhancement: links still open the image without JS)
  var posterLinks = document.querySelectorAll('[data-lightbox]');
  if (posterLinks.length) {
    var ov = document.createElement('div');
    ov.className = 'lightbox';
    ov.setAttribute('aria-hidden', 'true');
    ov.innerHTML = '<button class="lb-close" type="button" aria-label="Close">×</button><img alt="">';
    document.body.appendChild(ov);
    var lbImg = ov.querySelector('img');
    var lastFocused = null;
    function openLightbox(src, alt) {
      lastFocused = document.activeElement;
      lbImg.src = src; lbImg.alt = alt || '';
      ov.classList.add('open'); ov.setAttribute('aria-hidden', 'false');
      ov.querySelector('.lb-close').focus();
    }
    function closeLightbox() {
      ov.classList.remove('open'); ov.setAttribute('aria-hidden', 'true');
      lbImg.src = '';
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }
    posterLinks.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var img = a.querySelector('img');
        openLightbox(a.getAttribute('href'), img ? img.alt : '');
      });
    });
    ov.addEventListener('click', function (e) { if (e.target !== lbImg) closeLightbox(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && ov.classList.contains('open')) closeLightbox();
    });
  }

  // Scroll reveal (progressive enhancement: class only added when JS + IO available)
  if (hasIO && !reduceMotion) {
    var revealEls = document.querySelectorAll('.card,.stat,.talk,.award,.session,.quote,.faq details');
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('rv-in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(function (el, i) {
      el.classList.add('rv');
      el.style.transitionDelay = (i % 3) * 70 + 'ms';
      ro.observe(el);
    });
    // Safety: never leave content hidden if the observer can't run
    setTimeout(function () {
      document.querySelectorAll('.rv:not(.rv-in)').forEach(function (el) { el.classList.add('rv-in'); });
    }, 4000);
  }

  // Count-up for stat tiles. The static fallback text is never blanked;
  // the canonical value always lands even if observers never fire
  // (throttled tabs, prerender crawlers).
  function setStat(el, value, suffix) {
    var target = Number(value);
    var final = target.toLocaleString('en-IN') + suffix;
    var isTile = el.classList.contains('num');
    if (!isTile || reduceMotion || !hasIO || !isFinite(target)) { el.textContent = final; return; }
    var done = false;
    function finish() { if (!done) { done = true; el.textContent = final; } }
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      if (done) return;
      var t0 = null, dur = 1100;
      function step(ts) {
        if (done) return;
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
        if (p < 1) requestAnimationFrame(step); else finish();
      }
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
    setTimeout(finish, 3500);
  }

  var base = document.body.getAttribute('data-base') || '';

  // ---- Stats: fetch canonical values, overwrite static fallbacks ----
  // no-store: this file changes independently of deploys, a stale cached copy would show an outdated number
  fetch(base + 'data/stats.json', { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(function (s) {
      document.querySelectorAll('[data-stat]').forEach(function (el) {
        var key = el.getAttribute('data-stat');
        if (s[key] === undefined || s[key] === null) return;
        var suffix = el.getAttribute('data-suffix');
        if (suffix === null) suffix = s[key + 'Suffix'] || '';
        setStat(el, s[key], suffix);
      });
      // Speaker reel: shown only when a file path is configured
      var reelWrap = document.getElementById('speaker-reel');
      if (reelWrap && s.speakerReel) {
        var v = document.createElement('video');
        v.controls = true; v.preload = 'none'; v.playsInline = true;
        if (s.speakerReelPoster) v.poster = base + s.speakerReelPoster;
        v.src = base + s.speakerReel;
        v.style.width = '100%'; v.style.borderRadius = '16px';
        reelWrap.querySelector('.reel-slot').appendChild(v);
        reelWrap.hidden = false;
      }
    })
    .catch(function () { /* static fallbacks remain */ });

  // ---- Recent sessions feed ----
  var feed = document.getElementById('sessions-feed');
  if (feed) {
    fetch(base + 'data/sessions.json', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var real = (d.sessions || []).filter(function (x) { return !x.sample; }).slice(0, 10);
        var section = document.getElementById('recent-sessions');
        if (!real.length) { if (section) section.hidden = true; return; }
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        feed.innerHTML = real.map(function (x) {
          var dt = new Date(x.date + 'T00:00:00');
          var nice = isNaN(dt) ? x.date : months[dt.getMonth()] + ' ' + dt.getDate() + ', ' + dt.getFullYear();
          var loc = x.location ? ' · ' + esc(x.location) : '';
          return '<article class="session">' +
            '<div class="s-date">' + nice + '</div>' +
            '<h3>' + esc(x.topic) + '</h3>' +
            '<p class="s-host">' + esc(x.event) + ' · ' + esc(x.host) + loc + '</p>' +
            '<span class="s-mode">' + esc(x.mode || '') + '</span>' +
            '</article>';
        }).join('');
        if (section) section.hidden = false;
      })
      .catch(function () {
        var section = document.getElementById('recent-sessions');
        if (section) section.hidden = true;
      });
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  // ---- Booking form → prefilled WhatsApp ----
  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      function val(id) { var el = form.querySelector(id); return el ? el.value.trim() : ''; }
      var msg = 'Hello Shankar,\n\nMy name is ' + val('#f-name') +
        (val('#f-org') ? ' from ' + val('#f-org') : '') + '.\n' +
        'Engagement type: ' + val('#f-type') + '\n' +
        'Event date: ' + val('#f-date') + '\n' +
        'Audience: ' + val('#f-audience') + '\n' +
        'Topic of interest: ' + val('#f-topic') + '\n\n' +
        'I found you via your website and would like to discuss this.';
      window.open('https://api.whatsapp.com/send/?phone=%2B919344775577&text=' + encodeURIComponent(msg) + '&type=phone_number&app_absent=0', '_blank', 'noopener');
    });
  }
});
