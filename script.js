/* CURSOR */
const cD = document.getElementById("cDot"),
  cR = document.getElementById("cRing"),
  cT = document.getElementById("cTxt");
const prefersReducedMotion = globalThis.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
let mx = -100,
  my = -100,
  rx = -100,
  ry = -100;

if (prefersReducedMotion) {
  cD.style.display = "none";
  cR.style.display = "none";
  cT.style.display = "none";
} else {
  function updC() {
    cD.style.transform = "translate(" + (mx - 5) + "px," + (my - 5) + "px)";
    cT.style.transform = "translate(" + (mx + 24) + "px," + (my - 8) + "px)";
  }

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cD.style.opacity = "1";
    cR.style.opacity = "1";
    updC();
  });

  document.addEventListener(
    "touchstart",
    (e) => {
      mx = e.touches[0].clientX;
      my = e.touches[0].clientY;
      rx = mx;
      ry = my;
      cD.style.opacity = "1";
      cR.style.opacity = "1";
      updC();
    },
    { passive: true },
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      mx = e.touches[0].clientX;
      my = e.touches[0].clientY;
      updC();
    },
    { passive: true },
  );

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
      "a,button,.smain,.sthumb,.film-card,.why-card,.svcpill,.social-card,.social-card-in",
    )
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cR.style.width = "52px";
        cR.style.height = "52px";
        cD.style.width = "5px";
        cD.style.height = "5px";
        cR.style.borderColor = "var(--cursor-ring-hover)";
      });
      el.addEventListener("mouseleave", () => {
        cR.style.width = "36px";
        cR.style.height = "36px";
        cD.style.width = "10px";
        cD.style.height = "10px";
        cR.style.borderColor = "var(--cursor-ring)";
      });
    });
}

/* NAV */
const nb = document.getElementById("nb");
window.addEventListener("scroll", () => nb.classList.toggle("sc", scrollY > 60));
document
  .getElementById("hb")
  .addEventListener("click", () => document.getElementById("mm").classList.add("open"));
document.getElementById("mc").addEventListener("click", cm);
function cm() {
  document.getElementById("mm").classList.remove("open");
}
window.cm = cm;

/* SLIDES */
const slides = [
  {
    cat: "Digital Campaign",
    title: "HR Construction & Interiors — Every Home is a Story!",
    sub: "A digital campaign for Bengaluru's leading home construction brand featuring Shwetha Prasad and Avanthika Shetty. Built around the feeling of home, not just the structure of it.",
    bgClass: "slide-bg-hr",
    w: "HR",
    f: "digital",
    videos: [
      {
        name: "Shwetha Construction",
        path: "./assets/video/HR construction/Shwetha construction.mp4",
      },
      {
        name: "Avanthika Interior",
        path: "./assets/video/HR construction/Avanthika Int .mp4",
      },
    ],
  },
  {
    cat: "TV Campaign",
    title: "Doddmane Masala — A flavour worth remembering!",
    sub: "A TV campaign for a homegrown masala brand rooted in the warmth of home cooking, featuring Harshika Poonacha. Each film different in story, same in soul.",
    bgClass: "slide-bg-masala",
    w: "DODDMANE",
    f: "tv",
    videos: [
      {
        name: "Biriyani Masala",
        path: "./assets/video/DM Masala/BIRIYANI MASALA.mp4",
      },
      {
        name: "Chicken Masala",
        path: "./assets/video/DM Masala/CHICKEN MASALA.mp4",
      },
      {
        name: "Kabab Masala",
        path: "./assets/video/DM Masala/KABAB.mp4",
      },
      {
        name: "Sambar Masala",
        path: "./assets/video/DM Masala/SAMBAR.mp4",
      },
    ],
  },
  {
    cat: "TV Campaign",
    title: "Shri Venkateshwara Textiles — Fabric Has a Feel. We wove it into a story!",
    sub: "A TV campaign for a textile brand rooted in craft and tradition, featuring Chaithra Vasudevan. Films that wore the brand's identity with grace, colour, and quiet pride.",
    bgClass: "slide-bg-svt",
    w: "SVT",
    f: "tv",
    videos: [
      {
        name: "30 Seconds TVC",
        path: "./assets/video/SVT/30 SECONDS.mp4",
      },
      {
        name: "20 Seconds TVC",
        path: "./assets/video/SVT/20 SECONDS.mp4",
      },
      {
        name: "15 Seconds TVC",
        path: "./assets/video/SVT/15 SECONDS.mp4",
      },
    ],
  },
  {
    cat: "Digital Promo",
    title:
      "Acharya Institution & Goutham College — Every course has a future. We gave each one a voice!",
    sub: "A comprehensive digital promo series for Acharya Institution and Goutham College, covering every course they offer, each with its own identity, tone, and story.",
    bgClass: "slide-bg-acharya",
    w: "ACHARYA",
    f: "promo",
    videos: [
      {
        name: "Acharya Intro Promo",
        path: "./assets/video/Acharya/AIT_1 .mp4",
      },
      {
        name: "B.E. in Aeronautical Engineering",
        path: "./assets/video/Acharya/B.E. in Aeronautical Engineering.mp4",
      },
      {
        name: "B.E. in Artificial Intelligence & ML",
        path: "./assets/video/Acharya/B.E. in Artificial Intelligence & Machine Learning.mp4",
      },
      {
        name: "B.E. in Mechanical Engineering",
        path: "./assets/video/Acharya/B.E. in Mechanical Engineering.mp4",
      },
    ],
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
    const img = document.createElement("div");
    img.className = "sthumb-img " + s.bgClass;
    const word = document.createElement("span");
    word.className = "slide-mark";
    word.textContent = s.w;
    img.appendChild(word);
    const lbl = document.createElement("div");
    lbl.className = "thlbl";
    lbl.textContent = s.cat;
    const num = document.createElement("div");
    num.className = "thnum";
    num.textContent = "0" + (idx + 1);
    d.appendChild(img);
    d.appendChild(lbl);
    d.appendChild(num);
    d.addEventListener("click", () => goTo(idx));
    c.appendChild(d);
  });
}
function goTo(n) {
  cur = ((n % slides.length) + slides.length) % slides.length;
  const s = slides[cur];
  document.getElementById("sMI").className = "smain-img " + s.bgClass;
  document.getElementById("sMW").textContent = s.w;
  document.getElementById("sCC").textContent = s.cat;
  document.getElementById("sCT").textContent = s.title;
  document.getElementById("sCS").textContent = s.sub;
  document.getElementById("slC").textContent = String(cur + 1).padStart(2, "0");
  document.getElementById("slT").textContent = String(slides.length).padStart(2, "0");
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

/* SERVICES SECTION */

/* SCROLL REVEAL */
const obs = new IntersectionObserver(
  (e) =>
    e.forEach((x) => {
      if (x.isIntersecting) x.target.classList.add("vis");
    }),
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach((el) => obs.observe(el));

/* HERO TAGLINE ROTATION */
const taglines = [
  "Your Brand Has a Story. We Have the Disease",
  "Cinema For Modern Brands",
  "We Craft Soulful Narratives",
];
let tagIdx = 0;
const tagEl = document.getElementById("hero-tagline");
if (tagEl) {
  setInterval(() => {
    tagIdx = (tagIdx + 1) % taglines.length;
    tagEl.style.opacity = 0;
    setTimeout(() => {
      tagEl.textContent = taglines[tagIdx];
      tagEl.style.opacity = 1;
    }, 400);
  }, 3500);
}

/* VIDEO MODAL CONTROLLER */
const videoModal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const modalClose = document.getElementById("modal-close");
const playlistList = document.getElementById("playlist-list");
const playlistTitle = document.getElementById("playlist-title");
const sM = document.getElementById("sM");

if (sM && videoModal && modalVideo) {
  sM.addEventListener("click", () => {
    const currentSlide = slides[cur];
    if (currentSlide?.videos?.length > 0) {
      // Set playlist header
      playlistTitle.textContent = currentSlide.w + " Playlist";

      // Clear current playlist
      playlistList.innerHTML = "";

      // Populate playlist items
      currentSlide.videos.forEach((video, index) => {
        const btn = document.createElement("button");
        btn.className = "playlist-item" + (index === 0 ? " active" : "");
        btn.textContent = video.name;
        btn.addEventListener("click", (e) => {
          e.stopPropagation(); // Avoid triggering close on clicking inside the modal
          document
            .querySelectorAll(".playlist-item")
            .forEach((el) => el.classList.remove("active"));
          btn.classList.add("active");
          modalVideo.src = video.path;
          modalVideo.play();
        });
        playlistList.appendChild(btn);
      });

      // Load first video
      modalVideo.src = currentSlide.videos[0].path;

      // Show modal
      videoModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Disable scroll

      // Start video playback
      modalVideo.play();
    }
  });

  // Close modal logic
  const closeModal = () => {
    videoModal.classList.remove("active");
    modalVideo.pause();
    modalVideo.src = "";
    document.body.style.overflow = ""; // Re-enable scroll
  };

  if (modalClose) {
    modalClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeModal();
    });
  }

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });
}

/* REEL VIDEO PROGRESS BAR & SEEKING */
const reelVid = document.getElementById("reel-video");
const reelBar = document.getElementById("reel-progress-bar");
const reelWrap = document.getElementById("reel-progress-wrap");

if (reelVid && reelBar) {
  reelVid.addEventListener("timeupdate", () => {
    if (reelVid.duration) {
      const pct = (reelVid.currentTime / reelVid.duration) * 100;
      reelBar.style.width = pct + "%";
    }
  });

  if (reelWrap) {
    reelWrap.addEventListener("click", (e) => {
      e.stopPropagation();
      const rect = reelWrap.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      if (reelVid.duration) {
        reelVid.currentTime = pos * reelVid.duration;
      }
    });
  }

  const reelAudioBtn = document.getElementById("reel-audio-btn");
  if (reelAudioBtn) {
    const updateAudioUI = () => {
      const isMuted = reelVid.muted;
      reelAudioBtn.classList.toggle("unmuted", !isMuted);
      reelAudioBtn.setAttribute("title", isMuted ? "Unmute audio" : "Mute audio");
      reelAudioBtn.setAttribute("aria-label", isMuted ? "Unmute audio" : "Mute audio");
    };

    reelAudioBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      reelVid.muted = !reelVid.muted;
      updateAudioUI();
      if (!reelVid.muted && reelVid.paused) {
        reelVid.play().catch(() => {});
      }
    });

    updateAudioUI();
  }

  const reelContainer = document.getElementById("reel");
  if (reelContainer) {
    reelContainer.addEventListener("click", (e) => {
      if (e.target.closest("#reel-audio-btn") || e.target.closest("#reel-progress-wrap"))
        return;
      if (reelVid.paused) {
        reelVid.play().catch(() => {});
      }
    });
  }
}
