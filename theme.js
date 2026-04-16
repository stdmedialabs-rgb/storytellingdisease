/* ── THEME TOGGLE ── */
(function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  if (saved === "light") {
    document.body.classList.add("light-mode");
  }
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    const syncToggle = () => {
      const isLight = document.body.classList.contains("light-mode");
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.setAttribute(
        "title",
        isLight ? "Switch to dark mode" : "Switch to light mode",
      );
      toggle.dataset.theme = isLight ? "light" : "dark";
    };

    syncToggle();
    toggle.addEventListener("click", () => {
      const current = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";
      const next = current === "dark" ? "light" : "dark";
      document.body.classList.toggle("light-mode");
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      syncToggle();
    });
  }
})();
