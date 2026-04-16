/* CURSOR */
const cD = document.getElementById("cDot"), cR = document.getElementById("cRing"), cT = document.getElementById("cTxt");
let mx = -100, my = -100, rx = -100, ry = -100;

function updC() {
  cD.style.transform = "translate(" + (mx - 5) + "px," + (my - 5) + "px)";
  cT.style.transform = "translate(" + (mx + 14) + "px," + (my - 8) + "px)";
}

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cD.style.opacity = "1";
  cR.style.opacity = "1";
  updC();
});

document.addEventListener("touchstart", (e) => {
  mx = e.touches[0].clientX;
  my = e.touches[0].clientY;
  rx = mx;
  ry = my;
  cD.style.opacity = "1";
  cR.style.opacity = "1";
  updC();
}, {passive:true});

document.addEventListener("touchmove", (e) => {
  mx = e.touches[0].clientX;
  my = e.touches[0].clientY;
  updC();
}, {passive:true});

document.addEventListener("touchend", () => {
  cD.style.opacity = "0";
  cR.style.opacity = "0";
  cT.style.opacity = "0";
});

(function ar() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cR.style.transform = "translate(" + (rx - 18) + "px," + (ry - 18) + "px)";
  requestAnimationFrame(ar);
})();
document.querySelectorAll("[data-cursor]").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cT.style.opacity = "1";
    cT.textContent = el.dataset.cursor;
  });
  el.addEventListener("mouseleave", () => {
    cT.style.opacity = "0";
  });
});
document
  .querySelectorAll(
    "a,button,.smain,.sthumb,.film-card,.why-card,.svcpill,.team-card",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cR.style.width = "52px";
      cR.style.height = "52px";
      cD.style.width = "5px";
      cD.style.height = "5px";
      cR.style.borderColor = "rgba(0,0,0,.5)";
    });
    el.addEventListener("mouseleave", () => {
      cR.style.width = "36px";
      cR.style.height = "36px";
      cD.style.width = "10px";
      cD.style.height = "10px";
    });
  });

/* NAV */
const nb = document.getElementById("nb");
window.addEventListener("scroll", () =>
  nb.classList.toggle("sc", scrollY > 60),
);
document
  .getElementById("hb")
  .addEventListener("click", () =>
    document.getElementById("mm").classList.add("open"),
  );
document.getElementById("mc").addEventListener("click", cm);
function cm() {
  document.getElementById("mm").classList.remove("open");
}

/* SLIDES */
const slides = [
  {
    cat: "Ad Film",
    title: "Pothys Swarna Mahal — Jewellery Brand Campaign",
    sub: "Storytelling-led brand film for South India's premier jewellery brand",
    bg: "linear-gradient(135deg,#1a1a1a,#333)",
    w: "POTHYS",
    f: "adfilm",
  },
  {
    cat: "Ad Film",
    title: "Tanishq — Tata Jewellery Campaign",
    sub: "Emotional narrative ad film for India's most trusted jewellery brand",
    bg: "linear-gradient(135deg,#111,#2a2216)",
    w: "TANISHQ",
    f: "adfilm",
  },
  {
    cat: "Corporate",
    title: "Infosys — Corporate Film",
    sub: "Brand documentary showcasing culture and innovation at Infosys",
    bg: "linear-gradient(135deg,#0d0d0d,#1a1a1a)",
    w: "INFOSYS",
    f: "corporate",
  },
  {
    cat: "Ad Film",
    title: "Kalyan Silks — Wedding Season Campaign",
    sub: "High-emotion brand film for the festive and wedding season",
    bg: "linear-gradient(135deg,#111,#222)",
    w: "KALYAN SILKS",
    f: "adfilm",
  },
  {
    cat: "Movie Promo",
    title: "Film Promotion — Kannada Cinema",
    sub: "Promotional content and social strategy for Kannada film releases",
    bg: "linear-gradient(135deg,#0a0a0a,#1e1e14)",
    w: "FILM PROMO",
    f: "promo",
  },
  {
    cat: "Corporate",
    title: "Hitachi — Corporate Video Production",
    sub: "Global brand, local story — corporate film for Hitachi India",
    bg: "linear-gradient(135deg,#0d0d0d,#1a1614)",
    w: "HITACHI",
    f: "corporate",
  },
];
let cur = 0;
function bldT() {
  const c = document.getElementById("tC");
  c.innerHTML = "";
  [0, 1, 2].forEach((i) => {
    const idx = (cur + i) % slides.length,
      s = slides[idx];
    const d = document.createElement("div");
    d.className = "sthumb" + (i === 0 ? " act" : "");
    d.innerHTML = `<div class="sthumb-img" style="background:${s.bg}"><span style="font-family:'Anton',sans-serif;font-size:24px;color:rgba(255,255,255,.15);letter-spacing:2px;text-align:center;padding:8px">${s.w}</span></div><div class="thlbl">${s.cat}</div><div class="thnum">0${idx + 1}</div>`;
    d.addEventListener("click", () => goTo(idx));
    c.appendChild(d);
  });
}
function goTo(n) {
  cur = ((n % slides.length) + slides.length) % slides.length;
  const s = slides[cur];
  document.getElementById("sMI").style.background = s.bg;
  document.getElementById("sMW").textContent = s.w;
  document.getElementById("sMW").style.color = "rgba(255,255,255,.08)";
  document.getElementById("sCC").textContent = s.cat;
  document.getElementById("sCT").textContent = s.title;
  document.getElementById("sCS").textContent = s.sub;
  document.getElementById("slC").textContent = String(cur + 1).padStart(2, "0");
  bldT();
}
bldT();
document.getElementById("slN").addEventListener("click", () => goTo(cur + 1));
document.getElementById("slP").addEventListener("click", () => goTo(cur - 1));
document.querySelectorAll(".fb").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".fb").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    const f = b.dataset.f,
      idx = f === "all" ? 0 : slides.findIndex((s) => s.f === f);
    if (idx >= 0) goTo(idx);
  }),
);

/* SERVICES ACCORDION */
function tSvc(h) {
  const i = h.parentElement,
    o = i.classList.contains("open");
  document.querySelectorAll(".svi").forEach((x) => {
    x.classList.remove("open");
    x.querySelector(".svbody").style.maxHeight = "0";
    x.querySelector(".svh").setAttribute("aria-expanded", "false");
  });
  if (!o) {
    i.classList.add("open");
    i.querySelector(".svbody").style.maxHeight = "200px";
    h.setAttribute("aria-expanded", "true");
  }
}

/* SCROLL REVEAL */
const obs = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) x.target.classList.add("vis");
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach((el) => obs.observe(el));


