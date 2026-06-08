// ---------- Data ----------
const experiences = [
  { title:"Mafia Game Night", tag:"Theatrical", image:"assets/exp-mafia.jpg",   blurb:"Tailored suits, vintage scotch and a script that unfolds across midnight." },
  { title:"Casino Royale",    tag:"High Stakes", image:"assets/exp-casino.jpg",  blurb:"Felt-green tables, gold chips and croupiers under a crystal chandelier." },
  { title:"Luxury Pool Party",tag:"Daytime",     image:"assets/exp-pool.jpg",    blurb:"Sun-soaked Goa villas, infinity pools, champagne towers, curated DJs." },
  { title:"Rooftop Sundowner",tag:"Twilight",    image:"assets/exp-rooftop.jpg", blurb:"Skyline silhouettes, low velvet seating and cocktails at golden hour." },
  { title:"Private Villa",    tag:"Intimate",    image:"assets/exp-villa.jpg",   blurb:"Garden estates, fairy-lit canopies, white florals, a hundred candles." },
  { title:"Yacht Experience", tag:"Open Sea",    image:"assets/exp-yacht.jpg",   blurb:"Teakwood decks off the Arabian Sea, sunset to starlight, vintage wines." },
  { title:"Weekend Getaway",  tag:"Escape",      image:"assets/exp-getaway.jpg", blurb:"Private palaces and lakeside retreats — a weekend, end-to-end curated." },
];

const reasons = [
  { icon:"♛", title:"Exclusive Venues",     text:"Off-market mansions, palaces and rooftops reserved for our circle." },
  { icon:"♦", title:"Curated Guests",       text:"A discreet, vetted community of urban professionals and tastemakers." },
  { icon:"🥂", title:"Premium Hospitality", text:"Private bartenders, sommeliers and chefs — every detail anticipated." },
  { icon:"✦", title:"Luxury Decor",         text:"Florals, lighting and design produced by India's top art directors." },
  { icon:"🔒", title:"Private Security",    text:"Discreet protection and access control — your evening, only yours." },
  { icon:"✓", title:"Personalised Themes",  text:"Every gathering scripted around your mood, guests and intent." },
];

const testimonials = [
  { quote:"Bovana turned an ordinary Saturday into the most talked-about night in Bandra. Every detail — flawless.", name:"Aanya Mehra",    role:"Founder, Atelier 14", image:"assets/testi-1.jpg" },
  { quote:"The Casino Royale evening they curated for my closest 30 felt like stepping into a film. Truly elite.",  name:"Rohan Kapadia",  role:"Managing Partner",    image:"assets/testi-2.jpg" },
  { quote:"Discretion, taste, and theatre. Three things impossible to find — Bovana delivered all of them.",         name:"Ishita Rao",     role:"Creative Director",   image:"assets/testi-3.jpg" },
];

const stats = [
  { n:240, suffix:"+", l:"Nights Curated" },
  { n:98,  suffix:"%", l:"Return Guests" },
  { n:12,  suffix:"",  l:"Indian Cities" },
  { n:35,  suffix:"+", l:"Master Vendors" },
];

const marqueeItems = ["Mumbai","Delhi","Goa","Bengaluru","Udaipur","Hyderabad","By Invitation"];

const upcomingParties = [
  { title:"Casino Royale Night",  date:"Dec 14, 2026", time:"9:00 PM",  venue:"Taj Lands End, Mumbai",   dress:"Black Tie",    price:"₹15,000", status:"Few seats left", image:"assets/exp-casino.jpg" },
  { title:"Mafia Family Affair",  date:"Dec 21, 2026", time:"10:00 PM", venue:"Private Mansion, Delhi",  dress:"1920s Noir",   price:"₹18,000", status:"Selling fast",   image:"assets/exp-mafia.jpg" },
  { title:"NYE Rooftop Sundowner",date:"Dec 31, 2026", time:"7:00 PM",  venue:"Skyhigh, Bengaluru",      dress:"White & Gold", price:"₹22,000", status:"Waitlist",       image:"assets/exp-rooftop.jpg" },
  { title:"Yacht Sunset Soirée",  date:"Jan 10, 2027", time:"5:00 PM",  venue:"Gateway, Mumbai",         dress:"Resort Chic",  price:"₹25,000", status:"Open",           image:"assets/exp-yacht.jpg" },
];

const previousParties = [
  { title:"Pool Party · Villa Aurora", date:"Oct 12, 2026", venue:"Goa",     guests:"120 guests", image:"assets/exp-pool.jpg" },
  { title:"Mafia Night · The Cartel",  date:"Sep 07, 2026", venue:"Delhi",   guests:"60 guests",  image:"assets/exp-mafia.jpg" },
  { title:"Secret Mansion Soirée",     date:"Aug 24, 2026", venue:"Mumbai",  guests:"80 guests",  image:"assets/exp-villa.jpg" },
  { title:"Udaipur Royal Weekend",     date:"Jul 18, 2026", venue:"Udaipur", guests:"40 guests",  image:"assets/exp-getaway.jpg" },
];

// ---------- Render ----------
document.getElementById("year").textContent = new Date().getFullYear();

// Marquee
const mTrack = document.getElementById("marquee-track");
const mHTML = [...marqueeItems, ...marqueeItems, ...marqueeItems]
  .map(it => `<span>${it}<span class="sep">✦</span></span>`).join("");
mTrack.innerHTML = mHTML;

// Experiences
document.getElementById("exp-grid").innerHTML = experiences.map(e => `
  <article class="exp-card reveal">
    <div class="img-wrap">
      <img src="${e.image}" alt="${e.title}" loading="lazy" />
      <span class="exp-tag">${e.tag}</span>
      <div class="exp-body">
        <h3>${e.title}</h3>
        <div class="gold-divider"></div>
        <p>${e.blurb}</p>
        <span class="reserve">Reserve →</span>
      </div>
    </div>
  </article>
`).join("");

// Reasons
// Upcoming
document.getElementById("upcoming-grid").innerHTML = upcomingParties.map(p => `
  <article class="up-card reveal">
    <div class="up-media">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
      <span class="up-status">${p.status}</span>
      <span class="up-date">${p.date.split(",")[0]}</span>
    </div>
    <div class="up-body">
      <h3>${p.title}</h3>
      <div class="gold-divider"></div>
      <ul class="up-meta">
        <li><span class="ic">▦</span>${p.date}</li>
        <li><span class="ic">◷</span>${p.time}</li>
        <li><span class="ic">◉</span>${p.venue}</li>
        <li><span class="ic">✦</span>${p.dress}</li>
      </ul>
      <div class="up-foot">
        <span class="up-price">${p.price}</span>
        <a href="#contact" class="up-cta">Reserve →</a>
      </div>
    </div>
  </article>
`).join("");

// Previous
document.getElementById("previous-grid").innerHTML = previousParties.map(p => `
  <article class="pv-card reveal">
    <div class="pv-media">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
      <span class="pv-tag"><span class="dot">✓</span>Hosted</span>
      <div class="pv-body">
        <h3>${p.title}</h3>
        <div class="gold-divider"></div>
        <div class="pv-meta">
          <span><span class="ic">▦</span>${p.date}</span>
          <span><span class="ic">◉</span>${p.venue}</span>
          <span><span class="ic">♟</span>${p.guests}</span>
        </div>
      </div>
    </div>
  </article>
`).join("");

document.getElementById("reasons-grid").innerHTML = reasons.map(r => `
  <div class="reason reveal">
    <div class="reason-icon">${r.icon}</div>
    <h3>${r.title}</h3>
    <div class="gold-divider"></div>
    <p>${r.text}</p>
  </div>
`).join("");

// Testimonials
document.getElementById("testi-grid").innerHTML = testimonials.map(t => `
  <figure class="testi reveal">
    <div class="quote-mark">“</div>
    <blockquote>${t.quote}</blockquote>
    <div class="gold-divider"></div>
    <figcaption>
      <img src="${t.image}" alt="${t.name}" loading="lazy" />
      <div>
        <div class="name">${t.name}</div>
        <div class="role">${t.role}</div>
      </div>
    </figcaption>
  </figure>
`).join("");

// Stats
document.getElementById("stats-grid").innerHTML = stats.map((s,i)=>`
  <div class="counter reveal">
    <div class="counter-n" data-target="${s.n}" data-suffix="${s.suffix}">0${s.suffix}</div>
    <div class="counter-l">${s.l}</div>
  </div>
`).join("");

// Theme select
const themeSel = document.getElementById("theme-select");
experiences.forEach(e => {
  const o = document.createElement("option");
  o.textContent = e.title;
  themeSel.appendChild(o);
});

// Particles
function makeParticles(container, count){
  if(!container) return;
  let html = "";
  for(let i=0;i<count;i++){
    const size = 6 + (i%4)*4;
    html += `<span class="particle" style="left:${(i*73)%100}%;top:${(i*47)%100}%;width:${size}px;height:${size}px;animation-delay:${i*0.6}s;animation-duration:${5+(i%5)}s"></span>`;
  }
  container.innerHTML = html;
}
makeParticles(document.getElementById("hero-particles"), 14);
makeParticles(document.getElementById("book-particles"), 10);

// ---------- Header scroll ----------
const header = document.getElementById("site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive:true });
onScroll();

// ---------- Mobile menu ----------
const menuBtn = document.getElementById("menu-toggle");
const mobile = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobile.classList.toggle("open");
});
mobile.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menuBtn.classList.remove("open"); mobile.classList.remove("open");
}));

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold:0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ---------- Animated counters ----------
const counterIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if(!en.isIntersecting) return;
    const el = en.target;
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || "";
    const start = performance.now();
    const dur = 1800;
    const tick = t => {
      const p = Math.min(1, (t-start)/dur);
      const v = Math.floor(target * (1 - Math.pow(1-p,3)));
      el.textContent = v + suffix;
      if(p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
}, { threshold:0.4 });
document.querySelectorAll(".counter-n").forEach(el => counterIO.observe(el));

// ---------- Booking form (Google Sheets via Apps Script) ----------
// 1. Open your Google Sheet → Extensions → Apps Script.
// 2. Paste the doPost() snippet from the README and Deploy → New deployment →
//    type "Web app", access "Anyone". Copy the /exec URL it gives you.
// 3. Replace the placeholder below with that URL.
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzdhTzDT3l6CNFHU_Qefns34X9spfgcmIkEBjm3pBujt3DTmg9L9cQxSra_S-4dBcX/exec";

document.getElementById("booking-form").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.currentTarget;
  const btn  = form.querySelector('button[type="submit"]');
  const fd   = new FormData(form);
  const payload = {
    timestamp: new Date().toISOString(),
    name:   fd.get("name")   || "",
    phone:  fd.get("phone")  || "",
    theme:  fd.get("theme")  || "",
    guests: fd.get("guests") || "",
    date:   fd.get("date")   || "",
  };

  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.startsWith("PASTE_")) {
    alert("Form is not yet connected. Add your Apps Script URL in script.js.");
    return;
  }

  if (btn) { btn.disabled = true; btn.dataset._t = btn.textContent; btn.textContent = "Sending…"; }
  try {
    // text/plain avoids a CORS preflight against Apps Script.
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    form.reset();
    alert("Thank you. Our concierge will be in touch shortly.");
  } catch (err) {
    console.error(err);
    alert("Sorry — something went wrong sending your request. Please try again.");
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = btn.dataset._t || "Request Invitation →"; }
  }
});
