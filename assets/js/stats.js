/* Stats loader for pages that do not load revamp-main.js (links/, ieeewieils2025/).
   On every page load it reads data/stats.json (never cached) and writes each value into the
   elements tagged data-stat="<key>". The text already in the HTML stays as the fallback for
   crawlers and for visitors without JavaScript; website/tools/sync_stats.py keeps it current. */
(function () {
  var script = document.currentScript;
  var url = new URL('../../data/stats.json', script ? script.src : location.href);
  function run() {
    fetch(url, { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (s) {
        document.querySelectorAll('[data-stat]').forEach(function (el) {
          var key = el.getAttribute('data-stat');
          var v = Number(s[key]);
          if (s[key] === undefined || s[key] === null || !isFinite(v)) return;
          var suffix = el.getAttribute('data-suffix');
          if (suffix === null) suffix = s[key + 'Suffix'] || '';
          el.textContent = v.toLocaleString('en-IN') + suffix;
        });
      })
      .catch(function () { /* static fallbacks remain */ });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
