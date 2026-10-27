(function () {
  var url = (window.SITE_CONFIG && window.SITE_CONFIG.allegroUrl || "").trim();
  var ok = /^https:\/\/([a-z0-9-]+\.)?allegro\.pl\//i.test(url);
  document.querySelectorAll("a[data-allegro]").forEach(function (a) {
    if (ok) { a.href = url; }
    else { a.href = "#"; a.setAttribute("aria-disabled", "true"); a.addEventListener("click", function (e) { e.preventDefault(); }); }
  });
  if (!ok && window.console) console.warn("Brak poprawnego allegroUrl w /config.js");
})();
