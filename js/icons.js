/* Mindfulness icon + illustration sprite.
   Usage: <svg class="icon"><use href="#i-leaf"/></svg>
          <div class="spot cat cat--nature"><svg viewBox="0 0 96 96"><use href="#s-nature"/></svg></div>
   UI/category icons: 24px grid, 2px round strokes, currentColor.
   Spots: 96px grid, 3px strokes in currentColor (--ink), offset fill (+3,+3) in var(--cat). */
(function () {
  if (document.getElementById("mf-sprite")) return;
  var F = 'transform="translate(3 3)" style="fill:var(--cat,#cfe0c8);stroke:none"';
  var S = 'style="fill:none;stroke:currentColor;stroke-width:3;stroke-linecap:round;stroke-linejoin:round"';
  var D = 'style="fill:currentColor;stroke:none"';
  var spot = function (id, fill, stroke) { return '<symbol id="s-' + id + '" viewBox="0 0 96 96"><g ' + F + '>' + fill + '</g><g ' + S + '>' + stroke + '</g></symbol>'; };
  var sym = function (id, body, vb) { return '<symbol id="' + id + '" viewBox="' + (vb || "0 0 24 24") + '">' + (vb ? body : '<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + body + '</g>') + '</symbol>'; };
  var dot = function (x, y, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 1.1) + '" ' + D + '/>'; };
  var heart = "M48 78S20 62 20 42a14 14 0 0 1 28-6 14 14 0 0 1 28 6c0 20-28 36-28 36z";
  var bigHeart = "M40 76S14 61 14 42a12 12 0 0 1 26-5 12 12 0 0 1 26 5c0 19-26 34-26 34z";
  var smHeart = "M74 40s-11-6-11-13a5.5 5.5 0 0 1 11-2 5.5 5.5 0 0 1 11 2c0 7-11 13-11 13z";
  var leaf = "M22 76c0-34 20-56 56-58-2 36-22 58-56 58z";
  var drop = "M48 14c7 10 10 16 10 21a10 10 0 0 1-20 0c0-5 3-11 10-21z";
  var cloud = "M30 62h36a11 11 0 0 0 1-22 15 15 0 0 0-29 4 9 9 0 0 0-8 18z";
  var cloud2 = "M62 30h14a5 5 0 0 0 0-10 7 7 0 0 0-13 2 4 4 0 0 0-1 8z";
  var gl = "M48 54c0-12-9-18-22-18 0 12 9 18 22 18z", gr = "M48 46c0-12 9-18 22-18 0 12-9 18-22 18z";
  var moon = "M80 52A34 34 0 1 1 44 16a26 26 0 0 0 36 36z";
  var face = '<circle cx="12" cy="12" r="9"/>';
  var sproutT = '<ellipse cx="9" cy="14.6" rx="6.2" ry="2.6"/><path d="M9 12.2V7.6" style="fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round"/><path d="M9 8.6C9 5.8 7 4.2 3.8 4.2c0 2.9 2 4.4 5.2 4.4z"/><path d="M9 7.4C9 4.6 11 3 14.2 3c0 2.9-2 4.4-5.2 4.4z"/>';

  var s = [
    /* UI */
    sym("i-history", '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.2 4.2v4h4"/><path d="M12 8v4.2l2.8 1.8"/>'),
    sym("i-settings", '<circle cx="12" cy="12" r="6.6"/><circle cx="12" cy="12" r="2.4"/><circle cx="12" cy="12" r="9.1" style="stroke-width:2.6;stroke-dasharray:.6 6.55;stroke-linecap:round"/>'),
    sym("i-pause", '<path d="M9 6.5v11M15 6.5v11" style="stroke-width:2.6"/>'),
    sym("i-play", '<path d="M8 5.8v12.4a1 1 0 0 0 1.5.86l9.6-6.2a1 1 0 0 0 0-1.72L9.5 4.94A1 1 0 0 0 8 5.8z"/>'),
    sym("i-next", '<path d="M5 12h13.5M13 6.5l5.5 5.5-5.5 5.5"/>'),
    sym("i-back", '<path d="M14.5 5.5L8 12l6.5 6.5"/>'),
    sym("i-close", '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>'),
    sym("i-moon", '<path d="M20.5 13.3A8.5 8.5 0 1 1 10.7 3.5a6.6 6.6 0 0 0 9.8 9.8z"/>'),
    sym("i-clock", '<circle cx="12" cy="12" r="8.6"/><path d="M12 7.6V12l2.8 1.8"/>'),
    sym("i-check", '<path d="M5.5 12.5l4.2 4.2 8.8-9"/>'),
    sym("i-leaf", '<path d="M5 19C5 10.5 10 5 19.5 4.5 19 14 13.5 19 5 19z"/><path d="M5 19l8-8"/>'),
    sym("i-breathe", '<circle cx="12" cy="12" r="3.4"/><circle cx="12" cy="12" r="8" style="stroke-dasharray:3.5 3"/>'),
    sym("i-mood", face + '<path d="M8.6 14.2c1 1.3 2.1 1.9 3.4 1.9s2.4-.6 3.4-1.9"/>' + dot(9, 10) + dot(15, 10)),
    sym("i-sparkle", '<path d="M12 3.5c.7 4.6 2.9 6.8 7.5 7.5-4.6.7-6.8 2.9-7.5 7.5-.7-4.6-2.9-6.8-7.5-7.5 4.6-.7 6.8-2.9 7.5-7.5z"/>'),
    sym("i-sun", '<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4"/>'),
    sym("i-power", '<path d="M12 3.5v7"/><path d="M7 6.3a7.5 7.5 0 1 0 10 0"/>'),
    /* Categories */
    sym("c-breathing", '<path d="M3 8.5h10a2.5 2.5 0 1 0-2.5-2.5"/><path d="M3 12.5h15a2.5 2.5 0 1 1-2.5 2.5"/><path d="M3 16.5h6"/>'),
    sym("c-gratitude", '<path d="M12 20.5v-8"/><path d="M12 13c0-4-2.8-6-6.8-6 0 4 2.8 6 6.8 6z"/><path d="M12 11c0-4 2.8-6 6.8-6 0 4-2.8 6-6.8 6z"/><path d="M7 20.5h10"/>'),
    sym("c-body-scan", '<circle cx="12" cy="5.6" r="2.5"/><path d="M7.5 20.5v-5a4.5 4.5 0 0 1 9 0v5"/><path d="M3 12.5h2.5M18.5 12.5H21"/>'),
    sym("c-present-moment", dot(12, 12, 2.2) + '<circle cx="12" cy="12" r="5.6"/><path d="M12 3a9 9 0 0 1 9 9M12 21a9 9 0 0 1-9-9"/>'),
    sym("c-compassion", '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>'),
    sym("c-movement", '<path d="M3 15c2.2-3.5 4.3-3.5 6 0s3.8 3.5 6 0 4-3.5 6 0"/><circle cx="16" cy="6.5" r="2.2"/>'),
    sym("c-nature", '<path d="M3 19l6-9 4 6 2.5-3.5L21 19z"/><circle cx="17" cy="6" r="2"/>'),
    sym("c-journaling", '<rect x="5" y="3" width="14" height="18" rx="3.2"/><path d="M9 8h6M9 12h6M9 16h3.5"/>'),
    sym("c-focus", '<ellipse cx="12" cy="18.4" rx="6.4" ry="2.3"/><ellipse cx="12" cy="12.9" rx="4.6" ry="2"/><ellipse cx="12" cy="8" rx="3" ry="1.7"/>'),
    sym("c-letting-go", '<path d="M7.5 18h9.5a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.6 1.5A3.3 3.3 0 0 0 7.5 18z"/>'),
    /* Moods */
    sym("m-neutral", face + dot(9, 10) + dot(15, 10) + '<path d="M9 15h6"/>'),
    sym("m-sad", face + dot(9, 10) + dot(15, 10) + '<path d="M8.8 16.3c1.9-2 4.5-2 6.4 0"/>'),
    sym("m-tired", face + '<path d="M7.8 10.2c.9.8 1.8.8 2.6 0M13.6 10.2c.9.8 1.8.8 2.6 0M10.5 15.5h3"/>'),
    sym("m-anxious", face + dot(9, 10) + dot(15, 10) + '<path d="M8 15.6l1.3-1 1.4 1 1.3-1 1.3 1 1.4-1 1.3 1"/>'),
    sym("m-stressed", face + '<path d="M7.6 8.2l2.8 1.2M16.4 8.2l-2.8 1.2M9 15.4h6"/>' + dot(9.6, 11.2) + dot(14.4, 11.2)),
    sym("m-restless", face + dot(10.2, 10) + dot(16, 10) + '<path d="M8.4 15.2c1-1 2-1 2.6 0s1.7 1 2.6 0 1.7-1 2.4 0"/>'),
    /* Tray glyphs — 18×18 template images (export @1x 18px, @2x 36px) */
    sym("t-leaf", '<mask id="tm-leaf"><rect width="18" height="18" fill="#fff"/><path d="M4 14l7-7" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></mask><path mask="url(#tm-leaf)" d="M3 15.2C3 7.8 7.6 3.1 15.2 2.8 14.9 10.4 10.3 15.2 3 15.2z" ' + D + '/>', "0 0 18 18"),
    sym("t-rings", '<circle cx="9" cy="9" r="3.2" ' + D + '/><circle cx="9" cy="9" r="6.6" style="fill:none;stroke:currentColor;stroke-width:1.6"/>', "0 0 18 18"),
    sym("t-sprout", '<g ' + D + '>' + sproutT + '</g>', "0 0 18 18"),
    sym("t-sprout-paused", '<g style="fill:none;stroke:currentColor;stroke-width:1.3;stroke-linejoin:round"><ellipse cx="9" cy="14.6" rx="5.8" ry="2.3"/><path d="M9 12.2V7.6M9 8.6C9 5.8 7 4.2 3.8 4.2c0 2.9 2 4.4 5.2 4.4zM9 7.4C9 4.6 11 3 14.2 3c0 2.9-2 4.4-5.2 4.4z"/></g>', "0 0 18 18"),
    sym("t-sprout-new", '<mask id="tm-new"><rect width="18" height="18" fill="#fff"/><circle cx="14.6" cy="3.6" r="3.9" fill="#000"/></mask><g mask="url(#tm-new)" ' + D + '>' + sproutT + '</g><circle cx="14.6" cy="3.6" r="2.4" ' + D + '/>', "0 0 18 18"),
    /* "Awake" tray frames: two knocked-out eye dots in the pebble. Shown briefly when a tip arrives, then back to t-sprout */
    sym("t-sprout-awake", '<mask id="tm-awake"><rect width="18" height="18" fill="#fff"/><circle cx="6.9" cy="14.5" r="1" fill="#000"/><circle cx="11.1" cy="14.5" r="1" fill="#000"/></mask><g mask="url(#tm-awake)" ' + D + '><ellipse cx="9" cy="14.5" rx="6.4" ry="3"/>' + sproutT.replace('<ellipse cx="9" cy="14.6" rx="6.2" ry="2.6"/>', '') + '</g>', "0 0 18 18"),
    sym("t-sprout-blink", '<mask id="tm-blink"><rect width="18" height="18" fill="#fff"/><rect x="5.9" y="14.1" width="2" height=".8" rx=".4" fill="#000"/><rect x="10.1" y="14.1" width="2" height=".8" rx=".4" fill="#000"/></mask><g mask="url(#tm-blink)" ' + D + '><ellipse cx="9" cy="14.5" rx="6.4" ry="3"/>' + sproutT.replace('<ellipse cx="9" cy="14.6" rx="6.2" ry="2.6"/>', '') + '</g>', "0 0 18 18"),
    sym("t-sprout-awake-new", '<mask id="tm-awn"><rect width="18" height="18" fill="#fff"/><circle cx="6.9" cy="14.5" r="1" fill="#000"/><circle cx="11.1" cy="14.5" r="1" fill="#000"/><circle cx="14.6" cy="3.6" r="3.9" fill="#000"/></mask><g mask="url(#tm-awn)" ' + D + '><ellipse cx="9" cy="14.5" rx="6.4" ry="3"/>' + sproutT.replace('<ellipse cx="9" cy="14.6" rx="6.2" ry="2.6"/>', '') + '</g><circle cx="14.6" cy="3.6" r="2.4" ' + D + '/>', "0 0 18 18"),
    /* Spot illustrations — 96px */
    spot("breathing", '<circle cx="48" cy="50" r="24"/>', '<circle cx="48" cy="50" r="24"/><path d="M36 48h16a5 5 0 1 0-5-5"/><path d="M40 56h14a4 4 0 1 1-4 4"/><path d="M14 44a34 34 0 0 1 14-22M82 56a34 34 0 0 1-14 22"/>' + dot(20, 70, 2.2) + dot(78, 26, 2.2)),
    spot("gratitude", '<path d="M20 78c6-10 50-10 56 0z"/><path d="' + gl + '"/><path d="' + gr + '"/>', '<path d="M14 78h68M22 78c5-8 47-8 52 0M48 74V40"/><path d="' + gl + '"/><path d="' + gr + '"/><path d="M78 12v8M74 16h8"/>' + dot(18, 24, 2.2)),
    spot("body-scan", '<path d="' + heart + '"/>', '<path d="' + heart + '"/><path d="M28 50h9l4-8 6 14 4-9 4 3h13"/><path d="M10 36a40 40 0 0 1 8-15M86 36a40 40 0 0 0-8-15"/>' + dot(48, 12, 2.2)),
    spot("present-moment", '<ellipse cx="48" cy="68" rx="34" ry="11"/><path d="' + drop + '"/>', '<ellipse cx="48" cy="68" rx="34" ry="11"/><ellipse cx="48" cy="68" rx="17" ry="5"/><path d="' + drop + '"/><path d="M26 52l-4-4M70 52l4-4"/>'),
    spot("compassion", '<path d="' + bigHeart + '"/><path d="' + smHeart + '"/>', '<path d="' + bigHeart + '"/><path d="' + smHeart + '"/><path d="M82 60v6M79 63h6"/>' + dot(20, 22, 2.2)),
    spot("movement", '<circle cx="68" cy="28" r="10"/><path d="M10 78c10-16 24-16 34 0zM40 78c10-22 34-22 46 0z"/>', '<circle cx="68" cy="28" r="10"/><path d="M10 78c10-16 24-16 34 0M40 78c10-22 34-22 46 0M8 78h80"/><path d="M22 50c6-12 16-20 30-22M30 58c4-7 9-11 15-13"/>'),
    spot("nature", '<path d="' + leaf + '"/>', '<path d="' + leaf + '"/><path d="M22 76L58 38M36 62l-1-12M45 53l-1-13M38 60l12 2M47 51l12 1M22 76l-6 6"/>'),
    spot("journaling", '<rect x="26" y="14" width="44" height="64" rx="9"/>', '<rect x="26" y="14" width="44" height="64" rx="9"/><path d="M38 32h20M38 42h20M38 52h11M26 26h-4M26 40h-4M26 54h-4M26 68h-4"/><path d="M60 80l18-18 7 7-18 18h-7zM73 67l7 7"/>'),
    spot("focus", '<ellipse cx="48" cy="72" rx="24" ry="8"/><ellipse cx="48" cy="53" rx="17" ry="7"/><ellipse cx="48" cy="37" rx="10" ry="5.5"/>', '<ellipse cx="48" cy="72" rx="24" ry="8"/><ellipse cx="48" cy="53" rx="17" ry="7"/><ellipse cx="48" cy="37" rx="10" ry="5.5"/><path d="M14 86h18M64 86h18M70 18v6M67 21h6"/>'),
    spot("letting-go", '<path d="' + cloud + '"/><path d="' + cloud2 + '"/>', '<path d="' + cloud + '"/><path d="' + cloud2 + '"/><path d="M14 74h22M44 80h14M66 74h8"/>'),
    spot("moon", '<path d="' + moon + '"/>', '<path d="' + moon + '"/><path d="M68 16v8M64 20h8M82 34v4M80 36h4"/>' + dot(20, 80, 2.2)),
    spot("pot", '<path d="M30 52h36l-5 26H35z"/><rect x="25" y="44" width="46" height="8" rx="3"/>', '<path d="M30 52h36l-5 26H35z"/><rect x="25" y="44" width="46" height="8" rx="3"/><path d="M42 30c2-4 6-4 8 0M48 36v-2"/>' + dot(58, 22, 2.2))
  ];
  var svg = '<svg id="mf-sprite" xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">' + s.join("") + "</svg>";
  var mount = function () { document.body.insertAdjacentHTML("afterbegin", svg); };
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
