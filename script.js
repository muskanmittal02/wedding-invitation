/* =========================================================
   EDIT EVERYTHING HERE — names, dates, venues, contacts.
   Times are 24h "HH:MM" in the timezone below.
   A field ending in "Hi" is the Hindi version of the field before it.
   ========================================================= */
const VENUE = {
  venue: "The Langkawi Resort",
  venueHi: "द लंकावी रिज़ॉर्ट",
  address: "Bariatu, Ranchi, 834009",
  addressHi: "बरियातू, राँची 834009",
  map: "https://share.google/zkD2DEFbRsMNBRoNX",
};

const FAMILY_VENUE = {
  venue: "Nand Niwas, Pawan Industries",
  venueHi: "नंद निवास, पवन इंडस्ट्रीज़",
  address: "Radha Marg, Agrasen Path, Upper Bazar, Ranchi, Jharkhand 834001",
  addressHi: "राधा मार्ग, अग्रसेन पथ, अपर बाज़ार, राँची, झारखंड 834001",
  map: "https://www.google.com/maps/place/Shree+Shyam+Mandir,+Agrasen+Marg,+Ranchi/@23.3701995,85.3148425,18.59z/data=!4m14!1m7!3m6!1s0x39f4e16d3eaefb4d:0xb233169bf6a1f09b!2sShree+Shyam+Mandir,+Harmu+Road,+RANCHI!8m2!3d23.3719925!4d85.3128086!16s%2Fg%2F11js_97ntc!3m5!1s0x39f4e102c68f36af:0xb24a68b19ed03ce!8m2!3d23.3709944!4d85.3153848!16s%2Fg%2F1pyqh90_5",
};

const CONFIG = {
  groom: {
    first: "Tarang",
    firstHi: "तरंग",
    full: "Tarang Khetan",
    fullHi: "तरंग खेतान",
    grandparents: "Grandson of — Late Mrs. Sita & Late Mr. Santulal Khetan",
    grandparentsHi: "पौत्र — स्व. श्रीमती सीता एवं स्व. श्री संतूलाल खेतान",
    parents: "Son of — Mrs. Sheela & Mr. Sanjay Khetan",
    parentsHi: "सुपुत्र — श्रीमती शीला एवं श्री संजय खेतान",
  },
  bride: {
    first: "Muskan",
    firstHi: "मुस्कान",
    full: "Muskan Mittal",
    fullHi: "मुस्कान मित्तल",
    grandparents: "Granddaughter of — Late Mrs. Chandrapati & Late Mr. Bishamber Dayal Agarwal",
    grandparentsHi: "पौत्री — स्व. श्रीमती चन्द्रपति एवं स्व. श्री बिशम्बर दयाल अग्रवाल",
    parents: "Daughter of — Mrs. Vinita & Mr. Raj Kumar Agarwal",
    parentsHi: "सुपुत्री — श्रीमती विनीता एवं श्री राज कुमार अग्रवाल",
  },
  initials: "T&M",
  city: "Ranchi, Jharkhand",
  cityHi: "राँची, झारखंड",
  timezone: "Asia/Kolkata",
  tzOffset: "+05:30",
  closingMessage:
    "With hearts full of love and joy, we warmly invite you to celebrate our special day and bless us as we begin our forever together. ❤️",
  closingMessageHi:
    "हर्ष और स्नेह से भरे हृदय से हम आपको इस शुभ अवसर पर सादर आमंत्रित करते हैं। पधारकर नवदम्पति को अपना आशीर्वाद प्रदान करें। ❤️",
  regards: "Bagotiya Mittal Family",
  regardsHi: "बागोतिया मित्तल परिवार",
  instagram: "https://www.instagram.com/soulful_tm/",

  // The countdown runs to this moment (local time in `timezone`); fireworks start once it's reached.
  countdownTo: { date: "2026-12-02", time: "23:00" },

  // The hero date uses the event marked `main: true`.
  events: [
    {
      id: "mayra",
      name: "Mayra",
      nameHi: "मायरा",
      tagline: "Blessings from the maternal family",
      taglineHi: "ननिहाल पक्ष का स्नेहाशीर्वाद",
      date: "2026-12-01",
      start: "11:00",
      ...VENUE,
      theme: { bg1: "#9b3a8c", bg2: "#3b0a3a", accent: "#f5cf7a", ink: "#fdf3fb", card: "rgba(0,0,0,0.25)", btnInk: "#3b0a3a" },
    },
    {
      id: "sangeet",
      name: "Sangeet Evening",
      nameHi: "संगीत संध्या",
      tagline: "An evening of song, dance & celebration",
      taglineHi: "गीत, नृत्य और उल्लास की एक शाम",
      date: "2026-12-01",
      start: "18:00",
      ...VENUE,
      theme: { bg1: "#4b2391", bg2: "#170833", accent: "#f7c873", ink: "#f7efff", card: "rgba(0,0,0,0.28)", btnInk: "#170833" },
    },
    {
      id: "haldi",
      name: "Sunkissed Haldi & Carnival",
      nameHi: "सुनहरी हल्दी एवं कार्निवल",
      tagline: "A splash of turmeric, carnival fun & a lot of laughter",
      taglineHi: "हल्दी का रंग, कार्निवल की मस्ती और ढेर सारी हँसी",
      date: "2026-12-02",
      start: "11:00",
      ...VENUE,
      theme: { bg1: "#fbe06b", bg2: "#f0a020", accent: "#8a4300", ink: "#4a2600", card: "rgba(255,250,235,0.72)", btnInk: "#fff8e6" },
    },
    {
      id: "reception",
      name: "Wedding Ceremony & Reception",
      nameHi: "विवाह संस्कार एवं प्रीतिभोज",
      tagline: "Seven pheras, seven vows, one forever",
      taglineHi: "सात फेरे, सात वचन, जन्मों का साथ",
      date: "2026-12-02",
      start: "19:00",
      main: true,
      ...VENUE,
      theme: { bg1: "#16305e", bg2: "#040a1a", accent: "#d9b45a", ink: "#eef2ff", card: "rgba(255,255,255,0.06)", btnInk: "#040a1a" },
    },
  ],

  // Shown only on the family link (/wedding-invitation/family/), before the main events.
  familyEvents: [
    {
      id: "ganesh-puja",
      name: "Ganesh Puja & Vyah Haath",
      nameHi: "गणेश पूजन एवं ब्याह हाथ",
      tagline: "Seeking Lord Ganesha's blessings to begin",
      taglineHi: "शुभारंभ हेतु श्री गणेश जी का आशीर्वाद",
      date: "2026-11-26",
      start: "11:00",
      ...FAMILY_VENUE,
      theme: { bg1: "#f28c28", bg2: "#8f2d0b", accent: "#ffe2a3", ink: "#fff6e8", card: "rgba(0,0,0,0.22)", btnInk: "#6b1f05" },
    },
    {
      id: "kirtan",
      name: "Shri Shyam Ji Kirtan Evening",
      nameHi: "श्री श्याम जी कीर्तन संध्या",
      tagline: "An evening of bhajans & devotion",
      taglineHi: "भजनों और भक्ति की एक शाम",
      date: "2026-11-29",
      start: "16:00",
      ...FAMILY_VENUE,
      theme: { bg1: "#0f7c7a", bg2: "#053332", accent: "#f3cf6b", ink: "#eefcfa", card: "rgba(0,0,0,0.25)", btnInk: "#053332" },
    },
  ],

  contacts: [
    { name: "Raj Kumar Agarwal", nameHi: "राज कुमार अग्रवाल", phone: "+91 7004576735" },
    { name: "Ritesh Mittal", nameHi: "रितेश मित्तल", phone: "+91 8825397368" },
  ],
};

/* ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const isFamily = document.body.dataset.audience === "family";
const allEvents = isFamily ? [...CONFIG.familyEvents, ...CONFIG.events] : CONFIG.events;
const mainEvent = CONFIG.events.find((e) => e.main) || CONFIG.events[CONFIG.events.length - 1];
const toDate = (date, time) => new Date(`${date}T${time}:00${CONFIG.tzOffset}`);

/* ---------- Language ---------- */
const STRINGS = {
  en: {
    invited: "You are cordially invited",
    families: "Together with their families",
    tapSeal: "Tap the seal to open",
    invocation: "॥ श्री गणेशाय नमः ॥", // shown in Hindi in both languages
    inviteLine: "request the pleasure of your company<br />as they begin their journey together",
    days: "Days", hours: "Hours", mins: "Minutes", secs: "Seconds",
    married: "Just Married!",
    scrollCue: "Scroll for the celebrations",
    elders: "With the blessings of our elders",
    weds: "weds",
    count: (i, n) => `Celebration ${i} of ${n}`,
    date: "Date", time: "Time", venue: "Venue",
    onwards: (hhmm) => `${formatTime(hhmm)} onwards`,
    viewMap: "View on Map",
    venueTitle: "The Venue",
    regardsTitle: "Warm Regards",
    follow: "Follow our journey",
    queries: "For any queries",
    glimpse: "A glimpse of us",
    moments: "Our Moments",
    tapSound: "Tap for sound", soundOn: "Sound on",
    home: "Home", couple: "The Couple",
    title: isFamily ? "Family Invitation" : "Wedding Invitation",
  },
  hi: {
    invited: "आप सादर आमंत्रित हैं",
    families: "सपरिवार शुभ आशीर्वाद सहित",
    tapSeal: "खोलने के लिए मुहर को छुएँ",
    invocation: "॥ श्री गणेशाय नमः ॥",
    inviteLine: "अपने नवजीवन के शुभारंभ पर<br />आपकी गरिमामयी उपस्थिति के आकांक्षी हैं",
    days: "दिन", hours: "घंटे", mins: "मिनट", secs: "सेकंड",
    married: "विवाह बंधन में बंध गए!",
    scrollCue: "उत्सवों के लिए नीचे स्क्रॉल करें",
    elders: "बड़ों के आशीर्वाद से",
    weds: "संग",
    count: (i, n) => `उत्सव ${i} / ${n}`,
    date: "दिनांक", time: "समय", venue: "स्थान",
    onwards: (hhmm) => {
      const [h, m] = hhmm.split(":").map(Number);
      const part = h < 12 ? "सुबह" : h < 16 ? "दोपहर" : "शाम";
      return `${part} ${h % 12 || 12}:${String(m).padStart(2, "0")} बजे से`;
    },
    viewMap: "नक्शे पर देखें",
    venueTitle: "विवाह स्थल",
    regardsTitle: "विनीत",
    follow: "हमारे सफ़र से जुड़े रहें",
    queries: "किसी भी जानकारी हेतु संपर्क करें",
    glimpse: "हमारी एक झलक",
    moments: "हमारे ख़ास पल",
    tapSound: "आवाज़ के लिए छुएँ", soundOn: "आवाज़ चालू",
    home: "मुखपृष्ठ", couple: "वर-वधू",
    title: isFamily ? "पारिवारिक निमंत्रण" : "विवाह निमंत्रण",
  },
};

let lang = "en";
try { if (localStorage.getItem("wedding-lang") === "hi") lang = "hi"; } catch {}
const t = (key) => STRINGS[lang][key];
// The Hindi value of a CONFIG field lives next to it as `<field>Hi`.
const tr = (obj, field) => (lang === "hi" && obj[field + "Hi"]) || obj[field];

function formatDate(date, opts) {
  return toDate(date, "12:00").toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { timeZone: CONFIG.timezone, ...opts });
}

function formatTime(hhmm) {
  let [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${suffix}`;
}

function mandalaSVG() {
  let petals = "";
  for (let i = 0; i < 16; i++) {
    const r = i * 22.5;
    petals += `<ellipse cx="100" cy="45" rx="10" ry="40" transform="rotate(${r} 100 100)"/>`;
    petals += `<ellipse cx="100" cy="22" rx="5" ry="16" transform="rotate(${r + 11.25} 100 100)"/>`;
  }
  return `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="0.8">
    ${petals}
    <circle cx="100" cy="100" r="96"/><circle cx="100" cy="100" r="88" stroke-dasharray="2 3"/>
    <circle cx="100" cy="100" r="28"/><circle cx="100" cy="100" r="18"/><circle cx="100" cy="100" r="6" fill="currentColor"/>
  </svg>`;
}

// Family lines stay on one line: a long one (the grandparents) is made a little
// smaller until it fits the screen, instead of wrapping onto a second line.
function fitLines() {
  $$(".person-line").forEach((el) => {
    el.style.fontSize = "";
    const full = parseFloat(getComputedStyle(el).fontSize);
    let size = full;
    while (el.scrollWidth > el.clientWidth + 1 && size > full * 0.62) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  });
}
addEventListener("resize", fitLines);
document.fonts?.ready.then(fitLines);

/* ---------- Render content ---------- */
// Event sections are built once; render() fills in the text and runs
// again whenever the language changes.
// Illustrations behind the event pages (artwork: see README), by event id.
const EVENT_ART = { mayra: "mayra", sangeet: "sangeet", haldi: "haldi", reception: "wedding" };

function buildEvents() {
  $("#events").outerHTML = allEvents
    .map((ev) => {
      const t = ev.theme, art = EVENT_ART[ev.id];
      const style = `--bg1:${t.bg1};--bg2:${t.bg2};--accent:${t.accent};--ink:${t.ink};--card:${t.card};--btn-ink:${t.btnInk}` +
        (art ? `;--art:url('assets/images/art/${art}.jpg')` : "");
      return `
      <section id="${ev.id}" class="section event${art ? " has-art" : ""}" style="${style}">
        <div class="mandala" aria-hidden="true">${mandalaSVG()}</div>
        <article class="event-card reveal"></article>
      </section>`;
    })
    .join("");
}

function render() {
  const { groom, bride, contacts } = CONFIG;
  document.documentElement.lang = lang;
  document.title = `${tr(bride, "first")} & ${tr(groom, "first")}` + (isFamily ? ` · ${t("title")}` : "");
  $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  $$("#langBtn [data-lang]").forEach((el) => el.classList.toggle("active", el.dataset.lang === lang));

  const fill = (attr, text) => $$(`[${attr}]`).forEach((el) => (el.textContent = text));
  fill("data-groom", tr(groom, "first"));
  fill("data-bride", tr(bride, "first"));
  fill("data-groom-full", tr(groom, "full"));
  fill("data-bride-full", tr(bride, "full"));
  // Family lines: the relation ("Son of", "सुपुत्र") in gold on its own line, the names below it.
  const lineage = (attr, text) => {
    const [rel, rest] = text.split(" — ");
    $$(`[${attr}]`).forEach((el) => (el.innerHTML = `<span class="rel">${rel}</span>${rest}`));
  };
  lineage("data-groom-gp", tr(groom, "grandparents"));
  lineage("data-groom-parents", tr(groom, "parents"));
  lineage("data-bride-gp", tr(bride, "grandparents"));
  lineage("data-bride-parents", tr(bride, "parents"));
  fitLines();
  fill("data-initials", CONFIG.initials);
  fill("data-city", tr(CONFIG, "city"));
  fill("data-date-long", formatDate(mainEvent.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" }));
  fill("data-date-short", formatDate(mainEvent.date, { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, " · "));
  fill("data-closing", tr(CONFIG, "closingMessage"));
  fill("data-regards", tr(CONFIG, "regards"));
  $("#instagram").href = CONFIG.instagram;
  fill("data-instagram-handle", "@" + CONFIG.instagram.split("/").filter(Boolean).pop());

  const digits = (p) => p.replace(/\D/g, "");
  $("[data-contacts]").innerHTML = contacts
    .map(
      (c) => `
      <div class="contact">
        <span class="contact-name">${tr(c, "name")}</span>
        <a class="contact-phone" href="tel:+${digits(c.phone)}">${c.phone}</a>
        <a class="call-btn" href="tel:+${digits(c.phone)}" aria-label="Call ${c.name}">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>
        </a>
      </div>`
    )
    .join("");

  const total = allEvents.length;
  allEvents.forEach((ev, i) => {
    const name = tr(ev, "name");
    const section = $(`#${ev.id}`);
    section.dataset.label = name;
    $(".event-card", section).innerHTML = `
          <img class="page-ganesh" src="assets/images/ganesh-gold.png" alt="" width="239" height="503" />
          <p class="event-count">${t("count")(i + 1, total)}</p>
          <h2 class="event-name${name.length > 20 ? " long xlong" : name.length > 10 ? " long" : ""}">${name}</h2>
          <p class="event-tagline">${tr(ev, "tagline")}</p>
          <div class="divider"><span></span></div>
          <ul class="event-details">
            <li><span class="label">${t("date")}</span>${formatDate(ev.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</li>
            <li><span class="label">${t("time")}</span>${t("onwards")(ev.start)}</li>
            ${ev.venue === VENUE.venue ? "" : `<li><span class="label">${t("venue")}</span>${tr(ev, "venue")}<small>${tr(ev, "address")}</small></li>`}
          </ul>
          ${ev.venue === VENUE.venue ? "" : `<div class="actions">
            <a class="btn" href="${ev.map}" target="_blank" rel="noopener">${t("viewMap")}</a>
          </div>`}`;
  });

  // Static sections name themselves for the dot nav.
  $("#home").dataset.label = t("home");
  $("#couple").dataset.label = t("couple");
  $("#closing").dataset.label = t("regardsTitle");
  fill("data-venue-name", tr(VENUE, "venue"));
  fill("data-venue-address", tr(VENUE, "address"));
  $("#venueMap").href = VENUE.map;
  const venueDays = CONFIG.events.filter((e) => e.venue === VENUE.venue).map((e) => e.date);
  const [d1, d2] = [venueDays[0], venueDays[venueDays.length - 1]];
  fill("data-venue-dates", d1 === d2 ? formatDate(d1, { day: "numeric", month: "long", year: "numeric" })
    : `${formatDate(d1, { day: "numeric" })} – ${formatDate(d2, { day: "numeric", month: "long", year: "numeric" })}`);
  $("#moments").dataset.label = t("moments");
  const sections = $$("#scroller .section");
  $$("#dots button").forEach((b, i) => {
    b.dataset.label = sections[i].dataset.label;
    b.setAttribute("aria-label", sections[i].dataset.label);
  });

  const reel = $("#reel");
  if (reel) $("#reelSound span").textContent = reel.muted ? t("tapSound") : t("soundOn");
  if ($("#countdown").classList.contains("married")) $("#countdown").textContent = t("married");
}

function setupLang() {
  const btn = $("#langBtn");
  btn.addEventListener("click", () => {
    lang = lang === "en" ? "hi" : "en";
    try { localStorage.setItem("wedding-lang", lang); } catch {}
    render();
  });
  // Show the switch only while the Home page is on screen.
  new IntersectionObserver(([entry]) => btn.classList.toggle("away", !entry.isIntersecting), {
    root: $("#scroller"),
    threshold: 0.5,
  }).observe($("#home"));
}

/* ---------- Countdown ---------- */
// Add ?celebrate to the URL to preview the after-countdown fireworks.
const celebratePreview = new URLSearchParams(location.search).has("celebrate");

/* ---------- Fireworks (after the countdown ends) ---------- */
// Canvas fireworks over the Home page. They only run while Home is on screen
// and the tab is visible, so they never drain a phone in the background.
const Fireworks = {
  canvas: null,
  started: false,
  running: false,
  start() {
    if (this.started || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    this.started = true;
    const c = (this.canvas = document.createElement("canvas"));
    c.className = "fireworks";
    c.setAttribute("aria-hidden", "true");
    $("#home").appendChild(c);
    this.ctx = c.getContext("2d");
    this.rockets = [];
    this.sparks = [];
    this.nextLaunch = 0;
    const resize = () => {
      const r = c.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
      c.width = r.width * dpr;
      c.height = r.height * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.w = r.width;
      this.h = r.height;
    };
    resize();
    addEventListener("resize", resize);
    let onScreen = true;
    new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; this.toggle(onScreen && !document.hidden); },
      { root: $("#scroller"), threshold: 0.2 }).observe($("#home"));
    document.addEventListener("visibilitychange", () => this.toggle(onScreen && !document.hidden));
    this.toggle(true);
  },
  toggle(on) {
    if (on && !this.running) { this.running = true; this.last = performance.now(); requestAnimationFrame((t) => this.frame(t)); }
    if (!on) this.running = false;
  },
  launch() {
    const hue = [40, 44, 348, 335, 15, 40][Math.floor(Math.random() * 6)];
    this.rockets.push({
      x: this.w * (0.15 + Math.random() * 0.7), y: this.h,
      vx: (Math.random() - 0.5) * 40, vy: -(this.h * (0.9 + Math.random() * 0.35)),
      targetY: this.h * (0.12 + Math.random() * 0.33), hue,
    });
  },
  burst(r) {
    const n = 70 + Math.floor(Math.random() * 40);
    const speed = 90 + Math.random() * 90;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.1;
      const v = speed * (0.6 + Math.random() * 0.4);
      this.sparks.push({
        x: r.x, y: r.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        life: 1, decay: 0.45 + Math.random() * 0.35,
        hue: r.hue + (Math.random() - 0.5) * 16, light: 38 + Math.random() * 18, px: r.x, py: r.y,
      });
    }
  },
  frame(now) {
    if (!this.running) return;
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    if (now > this.nextLaunch) { this.launch(); this.nextLaunch = now + 500 + Math.random() * 900; }
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);
    this.rockets = this.rockets.filter((r) => {
      r.x += r.vx * dt;
      r.y += r.vy * dt;
      r.vy += 220 * dt;
      ctx.fillStyle = `hsla(${r.hue},85%,45%,0.95)`;
      ctx.beginPath(); ctx.arc(r.x, r.y, 2.4, 0, 7); ctx.fill();
      if (r.y <= r.targetY || r.vy >= 0) { this.burst(r); return false; }
      return true;
    });
    this.sparks = this.sparks.filter((p) => {
      p.vx *= 0.985; p.vy = p.vy * 0.985 + 60 * dt;
      p.px = p.x; p.py = p.y;
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.life -= p.decay * dt;
      if (p.life <= 0) return false;
      // short trail + spark head, in rich tones that show on the cream card
      ctx.strokeStyle = `hsla(${p.hue},90%,${p.light}%,${p.life * 0.55})`;
      ctx.lineWidth = 1.6 * p.life + 0.4;
      ctx.beginPath(); ctx.moveTo(p.px - p.vx * 0.05, p.py - p.vy * 0.05); ctx.lineTo(p.x, p.y); ctx.stroke();
      const twinkle = Math.random() < 0.15 ? 1.6 : 1;
      ctx.fillStyle = `hsla(${p.hue},95%,${p.light}%,${p.life})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, (2 * p.life + 0.7) * twinkle, 0, 7); ctx.fill();
      return true;
    });
    requestAnimationFrame((t) => this.frame(t));
  },
};

function startCountdown() {
  const target = toDate(CONFIG.countdownTo.date, CONFIG.countdownTo.time).getTime();
  const box = $("#countdown");
  const els = { d: $("#cd-days"), h: $("#cd-hours"), m: $("#cd-mins"), s: $("#cd-secs") };
  const tick = () => {
    const diff = celebratePreview ? 0 : target - Date.now();
    if (diff <= 0) {
      box.classList.add("married");
      box.textContent = t("married");
      clearInterval(timer);
      Fireworks.start();
      return;
    }
    els.d.textContent = Math.floor(diff / 864e5);
    els.h.textContent = Math.floor((diff / 36e5) % 24);
    els.m.textContent = Math.floor((diff / 6e4) % 60);
    els.s.textContent = Math.floor((diff / 1e3) % 60);
  };
  const timer = setInterval(tick, 1000);
  tick();
}

/* ---------- Background music ---------- */
// Fallback: a gentle music-box melody generated with Web Audio,
// used when assets/music/background.mp3 isn't present.
const Synth = {
  ctx: null,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(ctx.destination);

    // dry bus + soft echo for a little space
    this.bus = ctx.createGain();
    const delay = ctx.createDelay();
    const feedback = ctx.createGain();
    const tone = ctx.createBiquadFilter();
    delay.delayTime.value = 0.36;
    feedback.gain.value = 0.32;
    tone.type = "lowpass";
    tone.frequency.value = 2200;
    this.bus.connect(this.master);
    this.bus.connect(delay);
    delay.connect(tone);
    tone.connect(feedback);
    feedback.connect(delay);
    tone.connect(this.master);

    // D – Bm – G – A arpeggios
    this.chords = [
      [62, 66, 69, 74, 78, 74, 69, 66],
      [59, 62, 66, 71, 74, 71, 66, 62],
      [55, 59, 62, 67, 71, 67, 62, 59],
      [57, 61, 64, 69, 73, 69, 64, 61],
    ];
    this.step = 0;
    this.beat = 0.34;
    this.nextTime = ctx.currentTime + 0.1;
    setInterval(() => this.schedule(), 60);
  },
  note(midi, time, dur, vol, type = "sine") {
    const ctx = this.ctx;
    const freq = 440 * Math.pow(2, (midi - 69) / 12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(vol, time + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    g.connect(this.bus);
    [[1, type, 1], [2, "sine", 0.25]].forEach(([mult, wave, level]) => {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = wave;
      o.frequency.value = freq * mult;
      og.gain.value = level;
      o.connect(og).connect(g);
      o.start(time);
      o.stop(time + dur + 0.05);
    });
  },
  schedule() {
    if (!this.ctx || this.ctx.state !== "running") return;
    while (this.nextTime < this.ctx.currentTime + 0.25) {
      const chord = this.chords[Math.floor(this.step / 8) % this.chords.length];
      const i = this.step % 8;
      this.note(chord[i], this.nextTime, 1.6, 0.12, "triangle");
      if (i === 0) this.note(chord[0] - 24, this.nextTime, this.beat * 8, 0.1);
      if (i === 4) this.note(chord[2] - 12, this.nextTime, this.beat * 4, 0.05);
      this.nextTime += this.beat;
      this.step++;
    }
  },
  play() {
    this.init();
    if (!this.ctx) return;
    this.ctx.resume();
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(0.6, t, 0.6);
  },
  pause() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(0, t, 0.2);
    setTimeout(() => !Music.playing && this.ctx.suspend(), 900);
  },
};

// One song on repeat (the <audio> loops). It fades in when the invitation opens.
// Volume runs through a Web Audio gain node because iPhones ignore <audio>.volume.
const Music = {
  btn: $("#musicBtn"),
  mode: null, // "file" | "synth"
  playing: false,
  ctx: undefined,

  init() {
    this.el = $("#bgm");
  },
  // Must run inside the tap (user gesture).
  setupGraph() {
    if (this.ctx !== undefined) return;
    this.ctx = null;
    // iPhones mute Web Audio when the silent switch is on unless it's marked as playback.
    try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch {}
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      const ctx = new AC();
      this.gain = ctx.createGain();
      this.gain.gain.value = 0;
      ctx.createMediaElementSource(this.el).connect(this.gain).connect(ctx.destination);
      this.ctx = ctx;
    } catch { this.ctx = null; }
  },
  fadeIn(secs) {
    const to = Number(this.el.dataset.vol) || 0.6;
    if (this.ctx) {
      const g = this.gain.gain, t = this.ctx.currentTime;
      g.cancelScheduledValues(t);
      g.setValueAtTime(g.value, t);
      g.linearRampToValueAtTime(to, t + secs);
      return;
    }
    // fallback without Web Audio
    const el = this.el, t0 = performance.now();
    el.volume = 0;
    clearInterval(el._fade);
    el._fade = setInterval(() => {
      const k = Math.min((performance.now() - t0) / (secs * 1000), 1);
      el.volume = to * k;
      if (k >= 1) clearInterval(el._fade);
    }, 50);
  },

  start() {
    // Prime Web Audio synchronously inside the tap (required by Safari/iOS).
    Synth.init();
    this.setupGraph();
    if (this.ctx) this.ctx.resume();
    if (this.el.error) return this.useSynth();
    this.el.currentTime = 0;
    this.el.play().then(
      () => {
        this.mode = "file";
        this.setPlaying(true);
        Synth.ctx && Synth.ctx.suspend();
      },
      () => this.useSynth()
    );
    this.fadeIn(1.5);
  },
  useSynth() {
    this.mode = "synth";
    Synth.play();
    this.setPlaying(true);
  },
  play() {
    if (!this.mode) return this.start();
    if (this.mode === "file") {
      if (this.ctx) this.ctx.resume();
      this.el.play().catch(() => {});
    } else Synth.play();
    this.setPlaying(true);
  },
  pause() {
    this.setPlaying(false);
    if (this.mode === "file") {
      this.el.pause();
      if (this.ctx) this.ctx.suspend();
    } else Synth.pause();
  },
  toggle() { this.playing ? this.pause() : this.play(); },
  setPlaying(on) {
    this.playing = on;
    this.btn.classList.toggle("muted", !on);
    this.btn.setAttribute("aria-label", on ? "Pause music" : "Play music");
  },
};

/* ---------- Petals ---------- */
function startPetals() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const box = $("#petals");
  const count = innerWidth < 600 ? 14 : 24;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "petal" + (Math.random() < 0.35 ? " gold" : "");
    p.style.left = `${Math.random() * 100}%`;
    p.style.setProperty("--size", `${8 + Math.random() * 10}px`);
    p.style.setProperty("--dur", `${9 + Math.random() * 9}s`);
    p.style.setProperty("--delay", `${-Math.random() * 15}s`);
    box.appendChild(p);
  }
}

/* ---------- Scroll: reveal + dot nav ---------- */
function setupScroll() {
  const scroller = $("#scroller");
  const sections = $$(".section", scroller);
  const dots = $("#dots");

  sections.forEach((sec) => {
    const b = document.createElement("button");
    b.dataset.label = sec.dataset.label;
    b.setAttribute("aria-label", `Go to ${sec.dataset.label}`);
    b.addEventListener("click", () => sec.scrollIntoView({ behavior: "smooth" }));
    dots.appendChild(b);
  });
  const dotButtons = $$("button", dots);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const reveal = $(".reveal", entry.target);
        if (entry.isIntersecting) {
          reveal && reveal.classList.add("visible");
          dotButtons.forEach((d, i) => d.classList.toggle("active", sections[i] === entry.target));
        } else if (reveal) {
          reveal.classList.remove("visible"); // replay the animation when scrolling back
        }
      });
    },
    { root: scroller, threshold: 0.55 }
  );
  sections.forEach((s) => io.observe(s));

  document.addEventListener("keydown", (e) => {
    if (document.body.classList.contains("locked")) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") scroller.scrollBy({ top: innerHeight });
    if (e.key === "ArrowUp" || e.key === "PageUp") scroller.scrollBy({ top: -innerHeight });
  });
}

/* ---------- Reel ---------- */
// Plays muted while in view. Turning its sound on pauses the background
// music, which comes back when the reel is muted or scrolled away from.
function setupReel() {
  const video = $("#reel");
  if (!video) return;
  const wrap = $(".reel-wrap");
  const btn = $("#reelSound");
  const fullBtn = $("#reelFull");
  const label = $("span", btn);
  let resumeMusic = false;

  const setMuted = (muted) => {
    video.muted = muted;
    btn.classList.toggle("on", !muted);
    btn.setAttribute("aria-label", muted ? "Turn sound on" : "Turn sound off");
    label.textContent = muted ? t("tapSound") : t("soundOn");
  };
  const unmute = () => {
    resumeMusic = Music.playing;
    if (Music.playing) Music.pause();
    setMuted(false);
    video.play().catch(() => {});
  };
  const mute = () => {
    if (video.muted) return;
    setMuted(true);
    if (resumeMusic) Music.play();
    resumeMusic = false;
  };
  const toggle = () => (video.muted ? unmute() : mute());

  btn.addEventListener("click", toggle);
  video.addEventListener("click", toggle);

  // Full screen: the whole frame where supported (keeps our buttons),
  // otherwise the native player (iPhone). Sound turns on when entering.
  const fsElement = () => document.fullscreenElement || document.webkitFullscreenElement;
  const isFullscreen = () => !!fsElement() || video.webkitDisplayingFullscreen;
  fullBtn.addEventListener("click", () => {
    if (fsElement()) return (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    if (video.muted) unmute();
    if (wrap.requestFullscreen) wrap.requestFullscreen().catch(() => {});
    else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
  });
  const onFsChange = () => {
    const on = fsElement() === wrap;
    wrap.classList.toggle("fs", on);
    fullBtn.setAttribute("aria-label", on ? "Exit full screen" : "Full screen");
  };
  document.addEventListener("fullscreenchange", onFsChange);
  document.addEventListener("webkitfullscreenchange", onFsChange);
  video.addEventListener("webkitendfullscreen", () => video.play().catch(() => {})); // iPhone pauses on exit

  // Background music turned back on by hand: silence the reel.
  Music.btn.addEventListener("click", () => {
    if (Music.playing && !video.muted) { resumeMusic = false; setMuted(true); }
  });

  new IntersectionObserver(
    ([entry]) => {
      if (isFullscreen()) return; // layout shifts while full screen; ignore
      if (entry.isIntersecting) video.play().catch(() => {});
      else { video.pause(); mute(); }
    },
    { root: $("#scroller"), threshold: 0.5 }
  ).observe(video);

  document.addEventListener("visibilitychange", () => document.hidden && video.pause());
}

/* ---------- Envelope artwork ---------- */
// Tone-on-tone ferns, feathery plumes and veined leaves, embossed into the
// envelope paper with a lighting filter. Seeded so it looks the same on every
// visit, and rendered as a background image so it costs nothing while animating.
function botanicalSVG(seed) {
  let state = seed;
  const rnd = () => (state = (state * 16807) % 2147483647) / 2147483647;
  const f = (n) => n.toFixed(1);
  const leaf = (len, w = 0.26) => `M0 0C${f(len * 0.3)} ${f(-len * w)} ${f(len * 0.75)} ${f(-len * w * 0.8)} ${f(len)} 0C${f(len * 0.75)} ${f(len * w * 0.8)} ${f(len * 0.3)} ${f(len * w)} 0 0Z`;
  // point and direction along the quadratic stem M0 0 Q bend,-len/2 0,-len
  const along = (t, len, bend) => ({
    x: 2 * bend * t * (1 - t),
    y: -len * t,
    a: (Math.atan2(-len, 2 * bend * (1 - 2 * t)) * 180) / Math.PI,
  });

  const fern = (len, bend) => {
    let g = `<path d="M0 0Q${f(bend)} ${f(-len / 2)} 0 ${f(-len)}" fill="none" stroke-width="1.2"/>`;
    const pairs = 20 + Math.floor(rnd() * 8);
    for (let k = 1; k <= pairs; k++) {
      const t = k / (pairs + 1), p = along(t, len, bend);
      const size = (1 - t * 0.7) * (26 + rnd() * 10);
      for (const side of [-1, 1]) {
        const rot = p.a + side * (62 + rnd() * 10);
        g += `<g transform="translate(${f(p.x)} ${f(p.y)}) rotate(${f(rot)})"><path d="${leaf(size, 0.16)}"/><path d="M0 0L${f(size * 0.9)} 0" fill="none" stroke-width="0.4"/></g>`;
      }
    }
    return g;
  };

  const plume = (len, bend) => {
    let g = `<path d="M0 0Q${f(bend)} ${f(-len / 2)} 0 ${f(-len)}" fill="none" stroke-width="1"/>`;
    const hairs = 110 + Math.floor(rnd() * 40);
    for (let k = 0; k < hairs; k++) {
      const t = 0.08 + (k / hairs) * 0.92, p = along(t, len, bend);
      const hl = (1 - t * 0.55) * (16 + rnd() * 14);
      for (const side of [-1, 1]) {
        const a = ((p.a + side * (28 + rnd() * 26)) * Math.PI) / 180;
        const ex = p.x + Math.cos(a) * hl, ey = p.y + Math.sin(a) * hl;
        const cx = p.x + Math.cos(a) * hl * 0.5 + side * 1.5, cy = p.y + Math.sin(a) * hl * 0.5;
        g += `<path d="M${f(p.x)} ${f(p.y)}Q${f(cx)} ${f(cy)} ${f(ex)} ${f(ey)}" fill="none" stroke-width="0.55"/>`;
      }
    }
    return g;
  };

  const leafy = (len, bend) => {
    let g = `<path d="M0 0Q${f(bend)} ${f(-len / 2)} 0 ${f(-len)}" fill="none" stroke-width="1.3"/>`;
    const count = 6 + Math.floor(rnd() * 5);
    for (let k = 1; k <= count; k++) {
      const t = k / (count + 1), p = along(t, len, bend);
      const size = (1 - t * 0.45) * (32 + rnd() * 16);
      const side = k % 2 ? 1 : -1;
      let veins = `<path d="M0 0L${f(size * 0.92)} 0" fill="none" stroke-width="0.5"/>`;
      for (let v = 1; v <= 4; v++) {
        const vx = size * (v / 5.2), vl = size * 0.16 * (1 - v / 6);
        veins += `<path d="M${f(vx)} 0l${f(vl)} ${f(-vl)}M${f(vx)} 0l${f(vl)} ${f(vl)}" fill="none" stroke-width="0.35"/>`;
      }
      g += `<g transform="translate(${f(p.x)} ${f(p.y)}) rotate(${f(p.a + side * (48 + rnd() * 18))})"><path d="${leaf(size)}"/>${veins}</g>`;
    }
    return g + `<g transform="translate(0 ${f(-len)}) rotate(-90)"><path d="${leaf(16)}"/></g>`;
  };

  let sprigs = "";
  // one sprig per cell of a loose 3x5 grid, so they spread evenly but look random
  for (let i = 0; i < 15; i++) {
    const x = ((i % 3) + 0.15 + rnd() * 0.7) * (400 / 3);
    const y = (Math.floor(i / 3) + 0.15 + rnd() * 0.7) * (800 / 5);
    const angle = rnd() * 360;
    const len = 210 + rnd() * 230, bend = (rnd() - 0.5) * 110;
    const kind = rnd();
    const body = kind < 0.4 ? fern(len, bend) : kind < 0.7 ? plume(len, bend) : leafy(len, bend);
    sprigs += `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(angle)})">${body}</g>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <defs><filter id="e" x="-5%" y="-5%" width="110%" height="110%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="0.7" result="blur"/>
      <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.6" specularExponent="14" lighting-color="#ffd8cc" result="spec">
        <feDistantLight azimuth="235" elevation="38"/>
      </feSpecularLighting>
      <feComposite in="spec" in2="SourceAlpha" operator="in" result="shine"/>
      <feOffset in="SourceAlpha" dx="0.9" dy="1.2" result="off"/>
      <feGaussianBlur in="off" stdDeviation="0.6" result="offBlur"/>
      <feFlood flood-color="#120003" flood-opacity="0.6"/>
      <feComposite in2="offBlur" operator="in" result="shadow"/>
      <feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/><feMergeNode in="shine"/></feMerge>
    </filter></defs>
    <g fill="rgba(25,0,5,0.16)" stroke="rgba(25,0,5,0.32)" stroke-linecap="round" filter="url(#e)">${sprigs}</g></svg>`;
}

function drawEnvelope() {
  $$("[data-botanical]").forEach((el) => {
    const art = document.createElement("div");
    art.className = "botanical";
    art.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(botanicalSVG(Number(el.dataset.botanical)))}")`;
    el.appendChild(art);
  });
}

/* ---------- Hidden hearts ---------- */
// Tap the couple's names three times on the Home page for a shower of hearts and
// flowers that fall and pile up along the bottom of the page. Each shower adds to
// the heap. Pure CSS transform animation, so it stays smooth on phones.
function setupHearts() {
  const home = $("#home");
  const names = $("#home .names");
  const pile = document.createElement("div");
  pile.className = "heart-pile";
  pile.setAttribute("aria-hidden", "true");
  home.appendChild(pile);
  const glyphs = ["❤", "❤", "❥", "✿", "❀"];
  const colors = ["#c9184a", "#e05780", "#b8862b", "#d9b45a", "#8a1c2b"];
  const heights = new Array(24).fill(0); // how high the heap already is in each column
  let taps = [];

  names.addEventListener("click", () => {
    const now = Date.now();
    taps = taps.filter((t) => now - t < 1200).concat(now);
    if (taps.length < 3) return;
    taps = [];
    const h = home.clientHeight, w = home.clientWidth;
    const batch = document.createDocumentFragment();
    for (let i = 0; i < 40; i++) {
      const el = document.createElement("i");
      const size = 14 + Math.random() * 20;
      const x = Math.random() * (w - size);
      // land on top of whatever has already piled up in this column
      const col = Math.min(heights.length - 1, Math.floor((x / w) * heights.length));
      const land = h - 8 - size - heights[col] + 40;
      heights[col] = Math.min(heights[col] + size * 0.55, h * 0.2);
      el.textContent = glyphs[i % glyphs.length];
      el.style.left = `${x}px`;
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
      el.style.fontSize = `${size}px`;
      el.style.setProperty("--dur", `${2.6 + Math.random() * 1.4}s`);
      el.style.setProperty("--delay", `${Math.random() * 1.1}s`);
      el.style.setProperty("--drift", `${(Math.random() - 0.5) * 50}px`);
      el.style.setProperty("--spin", `${(Math.random() - 0.5) * 360}deg`);
      el.style.setProperty("--land", `${land}px`);
      batch.appendChild(el);
    }
    pile.appendChild(batch);
    // keep the page light: drop the oldest once the heap gets very big
    while (pile.children.length > 240) pile.firstChild.remove();
  });
}

/* ---------- Auto-advance ---------- */
// Moves to the next page every 8 s, stopping at the last one. Any touch, scroll
// wheel or key press pauses it; it restarts 3.5 s after the guest stops.
const AutoAdvance = {
  DELAY: 8000,
  IDLE: 3500, // wait after the guest stops touching before the 8 s bar restarts
  timer: null,
  idleTimer: null,
  start() {
    this.scroller = $("#scroller");
    this.sections = $$(".section", this.scroller);
    this.bar = $("#autoBar");
    this.bar.style.setProperty("--auto-ms", `${this.DELAY}ms`);
    const pause = () => this.pauseForUser();
    ["touchstart", "wheel", "mousedown", "keydown"].forEach((ev) =>
      addEventListener(ev, pause, { passive: true }));
    document.addEventListener("visibilitychange", () => (document.hidden ? this.stop() : this.schedule()));
    this.schedule();
  },
  currentIndex() {
    const top = this.scroller.scrollTop;
    let best = 0;
    this.sections.forEach((sec, i) => {
      if (Math.abs(sec.offsetTop - top) < Math.abs(this.sections[best].offsetTop - top)) best = i;
    });
    return best;
  },
  schedule() {
    this.stop();
    if (document.hidden || this.idleTimer) return;
    if (this.currentIndex() >= this.sections.length - 1) return; // last page: stay
    // restart the progress bar
    this.bar.hidden = false;
    this.bar.classList.remove("run");
    void this.bar.offsetWidth;
    this.bar.classList.add("run");
    this.timer = setTimeout(() => {
      const next = this.sections[this.currentIndex() + 1];
      if (next) next.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => this.schedule(), 900); // after the scroll settles
    }, this.DELAY);
  },
  stop() {
    clearTimeout(this.timer);
    this.timer = null;
    this.bar.classList.remove("run");
    this.bar.hidden = true;
  },
  pauseForUser() {
    this.stop();
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => { this.idleTimer = null; this.schedule(); }, this.IDLE);
  },
};

/* ---------- Opening sequence ---------- */
function setupIntro() {
  const intro = $("#intro");
  const envelope = $("#envelope");
  let opened = false;

  // `auto`: opened by the timer, not a tap. Browsers only allow sound after the guest
  // touches the page, so the music then starts on their first tap or key press.
  const open = (auto) => {
    if (opened) return;
    opened = true;
    if (auto !== true) Music.start();
    else {
      const go = () => { if (!Music.mode) Music.start(); };
      ["pointerdown", "touchend", "keydown"].forEach((ev) => document.addEventListener(ev, go, { once: true }));
    }
    intro.classList.add("opening");
    envelope.classList.add("open");

    setTimeout(() => intro.classList.add("zoom"), 1550);
    setTimeout(() => {
      intro.classList.add("done");
      document.body.classList.remove("locked");
      $("#scroller").setAttribute("aria-hidden", "false");
      $("#dots").hidden = false;
      Music.btn.hidden = false;
      startPetals();
      AutoAdvance.start();
    }, 2650);
    setTimeout(() => intro.remove(), 3700);
  };

  envelope.addEventListener("click", open);
  setTimeout(() => open(true), 6000);
  envelope.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
}

/* ---------- Boot ---------- */
setupHearts();
drawEnvelope();
$(".hero-mandala").innerHTML = mandalaSVG();
$(".rsvp-mandala").innerHTML = mandalaSVG();
buildEvents();
render();
setupLang();
startCountdown();
setupScroll();
setupIntro();
Music.init();
Music.btn.addEventListener("click", () => Music.toggle());
setupReel();

// Pause when the tab is hidden, resume when it comes back.
let resumeOnShow = false;
document.addEventListener("visibilitychange", () => {
  if (document.hidden && Music.playing) { resumeOnShow = true; Music.pause(); }
  else if (!document.hidden && resumeOnShow) { resumeOnShow = false; Music.play(); }
});
