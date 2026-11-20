/* Pausa companion — "Pip"
   1) Static sprite symbols (#pet-calm, #pet-hello, #pet-inhale, #pet-hold, #pet-exhale, #pet-focused,
      #pet-proud, #pet-sleepy, #pet-waiting, #pet-cheering) for static use:
        <svg class="companion-static" viewBox="0 0 120 120"><use href="#pet-calm"/></svg>
   2) <pausa-companion state="calm" size="120" stage="3" pattern="box"> renders one inline rig with every
      part; CSS in mindfulness.css (§16) shows parts per state and animates them. Only attributes change,
      so state changes cross-fade. React port: render RIG once, set data-* on the wrapper.          */
(function () {
  var F = function (d, leaf) { return '<path d="' + d + '" transform="translate(3 3)" class="pp-fill' + (leaf ? ' pp-lf' : '') + '"/>'; };
  var S = function (d, c) { return '<path d="' + d + '" class="' + (c || "pp-line") + '"/>'; };
  var P = {
    body: "M26 84c0-17 15-30 34-30s34 13 34 30c0 13-14 20-34 20s-34-7-34-20z",
    leafL: "M60 44c0-12-8-19-22-19 0 12 8 19 22 19z",
    leafR: "M60 38c0-12 8-19 22-19 0 12-8 19-22 19z",
    leafC: "M60 37c-5-7-4-15 2-20 5 7 4 15-2 20z",
    stem: "M60 55V38",
    bud: "M60 55c-4-4-3-9 1-11 4 3 3 8-1 11z"
  };
  var eye = function (rx, ry, h, dx) { dx = dx || 0; return '<ellipse cx="' + (49 + dx) + '" cy="78" rx="' + rx + '" ry="' + ry + '" class="pp-eye"/><ellipse cx="' + (71 + dx) + '" cy="78" rx="' + rx + '" ry="' + ry + '" class="pp-eye"/><circle cx="' + (50.3 + dx) + '" cy="76.2" r="' + h + '" class="pp-hl"/><circle cx="' + (72.3 + dx) + '" cy="76.2" r="' + h + '" class="pp-hl"/>'; };
  var spark = function (x, y, s) { return '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0-6c.6 3.4 2.6 5.4 6 6-3.4.6-5.4 2.6-6 6-.6-3.4-2.6-5.4-6-6 3.4-.6 5.4-2.6 6-6z" class="pp-spk"/>'; };
  var z = function (x, y, s) { return '<path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 0h7l-7 8h7" class="pp-zline"/>'; };
  var flower = '<circle cx="60" cy="20" r="5" class="pp-petal"/><circle cx="66.7" cy="24.9" r="5" class="pp-petal"/><circle cx="64.1" cy="32.8" r="5" class="pp-petal"/><circle cx="55.9" cy="32.8" r="5" class="pp-petal"/><circle cx="53.3" cy="24.9" r="5" class="pp-petal"/><circle cx="60" cy="27" r="3.6" class="pp-core"/>';
  var X = {
    eyesOpen: eye(3.4, 4.2, 1.2),
    eyesBright: eye(4, 5, 1.7),
    eyesGlance: eye(3.4, 4.2, 1.2, 2),
    eyesHappy: S("M45 80c1.5-4 6.5-4 8 0M67 80c1.5-4 6.5-4 8 0", "pp-face"),
    eyesClosed: S("M45 78c1.5 3 6.5 3 8 0M67 78c1.5 3 6.5 3 8 0", "pp-face"),
    eyesSleep: S("M45 79.5h8M67 79.5h8", "pp-face"),
    mSmile: S("M56 87.5c1.6 2 6.4 2 8 0", "pp-face"),
    mOpen: '<path d="M55 86.5h10c0 5.5-10 5.5-10 0z" class="pp-mouth"/>',
    mIn: '<ellipse cx="60" cy="88.5" rx="2.6" ry="3.2" class="pp-face"/>',
    mHold: S("M57 88.5h6", "pp-face"),
    mOut: '<ellipse cx="60" cy="88.6" rx="3.4" ry="2" class="pp-face"/>',
    blush: '<circle cx="41" cy="87" r="4.5" class="pp-blush"/><circle cx="79" cy="87" r="4.5" class="pp-blush"/>',
    puff: '<ellipse cx="40" cy="86.5" rx="6.5" ry="5.5" class="pp-blush"/><ellipse cx="80" cy="86.5" rx="6.5" ry="5.5" class="pp-blush"/>',
    zz: z(88, 44, .8) + z(98, 30, 1) + z(108, 14, 1.2),
    sparks: spark(18, 46, 1) + spark(102, 54, .8) + spark(96, 16, .65),
    flower: flower
  };
  var base = function (stage) {
    var leaves = stage === 1 ? F(P.bud) + S(P.bud) : F(P.leafL, 1) + F(P.leafR, 1) + S(P.stem) + S(P.leafL) + S(P.leafR) + (stage >= 4 ? F(P.leafC, 1) + S(P.leafC) : "");
    return leaves + F(P.body) + S(P.body);
  };
  /* Static symbols: only the parts each state needs (< 3 KB each) */
  var STATES = {
    calm: X.eyesOpen + X.mSmile + X.blush,
    waiting: X.eyesGlance + X.mSmile + X.blush,
    hello: X.eyesBright + X.mOpen + X.blush,
    inhale: X.eyesClosed + X.mIn + X.blush,
    hold: X.eyesClosed + X.mHold + X.puff,
    exhale: X.eyesClosed + X.mOut + X.blush,
    focused: X.eyesClosed + X.mSmile + X.blush,
    proud: X.eyesHappy + X.mOpen + X.blush + X.flower + X.sparks,
    sleepy: X.eyesSleep + X.mOut + X.blush + X.zz,
    cheering: X.eyesHappy + X.mOpen + X.blush + X.sparks
  };
  var inl = function (s) { return s
      .replace(/class="pp-fill pp-lf"/g, 'style="fill:var(--pet-leaf);stroke:none"').replace(/class="pp-fill"/g, 'style="fill:var(--pet-body);stroke:none"')
      .replace(/class="pp-line"/g, 'style="fill:none;stroke:var(--pet-ink);stroke-width:var(--pet-sw);stroke-linecap:round;stroke-linejoin:round"')
      .replace(/class="pp-face"/g, 'style="fill:none;stroke:var(--pet-eye);stroke-width:calc(var(--pet-sw)*.8);stroke-linecap:round;stroke-linejoin:round"')
      .replace(/class="pp-eye"/g, 'style="fill:var(--pet-eye)"').replace(/class="pp-hl"/g, 'style="fill:var(--pet-hl)"')
      .replace(/class="pp-mouth"/g, 'style="fill:var(--pet-eye);stroke:var(--pet-eye);stroke-width:1.5;stroke-linejoin:round"')
      .replace(/class="pp-blush"/g, 'style="fill:var(--pet-blush);opacity:.75"')
      .replace(/class="pp-petal"/g, 'style="fill:var(--pet-petal);stroke:var(--pet-ink);stroke-width:1.6"').replace(/class="pp-core"/g, 'style="fill:var(--pet-core);stroke:var(--pet-ink);stroke-width:1.6"')
      .replace(/class="pp-spk"/g, 'style="fill:var(--pet-spark)"')
      .replace(/class="pp-zline"/g, 'style="fill:none;stroke:var(--pet-ink);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round"'); };
  var sym = Object.keys(STATES).map(function (k) { return '<symbol id="pet-' + k + '" viewBox="0 0 120 120" class="pp-sym">' + base(3) + STATES[k] + "</symbol>"; }).join("")
    + [1, 2, 3, 4, 5].map(function (n) { return '<symbol id="pet-stage-' + n + '" viewBox="0 0 120 120" class="pp-sym">' + (n === 2 ? '<g transform="translate(60 47) scale(.62) translate(-60 -47)">' + F(P.leafL, 1) + F(P.leafR, 1) + S(P.stem) + S(P.leafL) + S(P.leafR) + "</g>" + F(P.body) + S(P.body) : base(n)) + X.eyesOpen + X.mSmile + X.blush + (n === 5 ? X.flower : "") + "</symbol>"; }).join("");
  if (!document.getElementById("pet-sprite")) {
    sym = inl(sym);
    var svg = '<svg id="pet-sprite" xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">' + sym + "</svg>";
    var mount = function () { document.body.insertAdjacentHTML("afterbegin", svg); };
    if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
  }
  /* Animatable rig — every part present, CSS decides visibility */
  var g = function (c, inner) { return '<g class="' + c + '">' + inner + "</g>"; };
  var RIG = '<svg class="companion__svg" viewBox="0 0 120 120" focusable="false">'
    + g("companion__rig", g("companion__squash",
        g("companion__leaves", g("companion__leaf companion__leaf--l", F(P.leafL, 1) + S(P.leafL)) + g("companion__leaf companion__leaf--r", F(P.leafR, 1) + S(P.leafR)) + g("pp-leafC", F(P.leafC, 1) + S(P.leafC)) + S(P.stem, "pp-line pp-stem"))
        + g("pp-bud", F(P.bud) + S(P.bud))
        + g("companion__body", F(P.body) + S(P.body))
        + g("companion__face",
            g("companion__eyes", g("pp-o pp-eyes-open", X.eyesOpen) + g("pp-o pp-eyes-bright", X.eyesBright) + g("pp-o pp-eyes-glance", X.eyesGlance))
            + g("pp-o pp-eyes-happy", X.eyesHappy) + g("pp-o pp-eyes-closed", X.eyesClosed) + g("pp-o pp-eyes-sleep", X.eyesSleep)
            + g("pp-o pp-m-smile", X.mSmile) + g("pp-o pp-m-open", X.mOpen) + g("pp-o pp-m-in", X.mIn) + g("pp-o pp-m-hold", X.mHold) + g("pp-o pp-m-out", X.mOut)
            + g("pp-o pp-blush", X.blush) + g("pp-o pp-puff", X.puff))
        + g("pp-o pp-flower", X.flower)))
    + g("pp-o pp-zz", '<g class="pp-z1">' + z(88, 44, .8) + '</g><g class="pp-z2">' + z(98, 30, 1) + '</g><g class="pp-z3">' + z(108, 14, 1.2) + "</g>")
    + g("pp-o pp-sparks", '<g class="pp-s1">' + spark(18, 46, 1) + '</g><g class="pp-s2">' + spark(102, 54, .8) + '</g><g class="pp-s3">' + spark(96, 16, .65) + "</g>")
    + "</svg>";
  window.PAUSA_COMPANION_RIG = RIG;
  if (customElements.get("pausa-companion")) return;
  class PausaCompanion extends HTMLElement {
    static get observedAttributes() { return ["state", "size", "stage", "pattern", "react"]; }
    connectedCallback() { if (!this._w) { this.innerHTML = '<div class="companion" aria-hidden="true">' + RIG + "</div>"; this._w = this.firstElementChild; } this._sync(); }
    attributeChangedCallback() { if (this._w) this._sync(); }
    _sync() {
      var w = this._w, size = parseFloat(this.getAttribute("size") || this._size || 120);
      w.dataset.state = this.getAttribute("state") || this._state || "calm";
      w.dataset.stage = this.getAttribute("stage") || this._stage || "3";
      var pat = this.getAttribute("pattern") || this._pattern; if (pat) w.dataset.pattern = pat; else delete w.dataset.pattern;
      var re = this.getAttribute("react") || this._react; if (re) w.dataset.react = re; else delete w.dataset.react;
      w.dataset.size = size <= 32 ? "tiny" : size <= 64 ? "inline" : "hero";
      w.style.setProperty("--size", size + "px");
    }
    set state(v) { this._state = v; if (this._w) this._sync(); } get state() { return this._state; }
    set size(v) { this._size = v; if (this._w) this._sync(); } get size() { return this._size; }
    set stage(v) { this._stage = v; if (this._w) this._sync(); } get stage() { return this._stage; }
    set pattern(v) { this._pattern = v; if (this._w) this._sync(); } get pattern() { return this._pattern; }
    set react(v) { this._react = v; if (this._w) this._sync(); } get react() { return this._react; }
  }
  customElements.define("pausa-companion", PausaCompanion);
})();
