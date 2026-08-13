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
    cat: "TV Campaign",
    title: "Dodmane Masala — A flavour worth remembering!",
    sub: "A TV campaign for a homegrown masala brand rooted in the warmth of home cooking, featuring Harshika Poonacha. Each film different in story, same in soul.",
    bgClass: "slide-bg-masala",
    w: "DODMANE MASALA",
    f: "tv",
    videos: [
      {
        name: "Biriyani Masala",
        path: "./assets/video/DM Masala/BIRIYANI MASALA.mp4",
        poster: "./assets/img/shot-masala-1.png",
      },
      {
        name: "Chicken Masala",
        path: "./assets/video/DM Masala/CHICKEN MASALA.mp4",
        poster: "./assets/img/shot-masala-2.png",
      },
      {
        name: "Kabab Masala",
        path: "./assets/video/DM Masala/KABAB.mp4",
        poster: "./assets/img/shot-masala-3.png",
      },
      {
        name: "Sambar Masala",
        path: "./assets/video/DM Masala/SAMBAR.mp4",
        poster: "./assets/img/shot-masala-4.png",
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
        poster: "./assets/img/shot-svt-1.png",
      },
      {
        name: "20 Seconds TVC",
        path: "./assets/video/SVT/20 SECONDS.mp4",
        poster: "./assets/img/shot-svt-2.png",
      },
      {
        name: "15 Seconds TVC",
        path: "./assets/video/SVT/15 SECONDS.mp4",
        poster: "./assets/img/shot-svt-3.png",
      },
    ],
  },
  {
    cat: "Digital Campaign",
    title: "HR Construction & Interiors — Every Home is a Story!",
    sub: "A digital campaign for Bengaluru's leading home construction brand featuring Shwetha Prasad and Avanthika Shetty. Built around the feeling of home, not just the structure of it.",
    bgClass: "slide-bg-hr",
    w: "HR",
    f: "digital",
    videos: [
      {
        name: "HR Constructions & Solutions",
        path: "./assets/video/HR construction/Shwetha construction.mp4",
        poster: "./assets/img/shot-hr-1.png",
      },
      {
        name: "HR Interior",
        path: "./assets/video/HR construction/Avanthika Int .mp4",
        poster: "./assets/img/shot-hr-2.png",
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
        poster: "./assets/img/acharya/Screenshot 2026-08-05 at 10.37.21 AM.png",
      },
      {
        name: "B.E. in Aeronautical Engineering",
        path: "./assets/video/Acharya/B.E. in Aeronautical Engineering.mp4",
        poster: "./assets/img/shot-acharya-2.png",
      },
      {
        name: "B.E. in Artificial Intelligence & ML",
        path: "./assets/video/Acharya/B.E. in Artificial Intelligence & Machine Learning.mp4",
        poster: "./assets/img/shot-acharya-3.png",
      },
      {
        name: "B.E. in Mechanical Engineering",
        path: "./assets/video/Acharya/B.E. in Mechanical Engineering.mp4",
        poster: "./assets/img/shot-acharya-4.png",
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
let isTransitioning = false;
function goTo(n) {
  if (isTransitioning) return;
  const nextCur = ((n % slides.length) + slides.length) % slides.length;

  isTransitioning = true;
  const sMI = document.getElementById("sMI");
  const sinfo = document.querySelector(".sinfo");

  if (sMI) sMI.classList.add("slide-transitioning");
  if (sinfo) sinfo.classList.add("text-transitioning");

  setTimeout(() => {
    cur = nextCur;
    const s = slides[cur];
    if (sMI) sMI.className = "smain-img " + s.bgClass + " slide-transitioning";
    document.getElementById("sCC").textContent = s.cat;
    document.getElementById("sCT").textContent = s.title;
    document.getElementById("sCS").textContent = s.sub;
    document.getElementById("slC").textContent = String(cur + 1).padStart(2, "0");
    document.getElementById("slT").textContent = String(slides.length).padStart(2, "0");
    bldT();

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (sMI) sMI.classList.remove("slide-transitioning");
        if (sinfo) sinfo.classList.remove("text-transitioning");
        setTimeout(() => {
          isTransitioning = false;
        }, 350);
      }, 20);
    });
  }, 180);
}
bldT();
document.getElementById("slN").addEventListener("click", () => goTo(cur + 1));
document.getElementById("slP").addEventListener("click", () => goTo(cur - 1));

const slideMainEl = document.getElementById("sM");
if (slideMainEl) {
  let touchStartX = 0;
  let touchEndX = 0;

  slideMainEl.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  slideMainEl.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 40;
      if (touchEndX < touchStartX - swipeThreshold) {
        goTo(cur + 1);
      } else if (touchEndX > touchStartX + swipeThreshold) {
        goTo(cur - 1);
      }
    },
    { passive: true },
  );
}
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
  "Your brand. Our story",
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
      playlistTitle.textContent = (currentSlide.w + " Playlist").toUpperCase();

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
          if (video.poster) modalVideo.poster = video.poster;
          modalVideo.src = video.path;
          modalVideo.play();
        });
        playlistList.appendChild(btn);
      });

      // Load first video
      if (currentSlide.videos[0].poster) {
        modalVideo.poster = currentSlide.videos[0].poster;
      }
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
