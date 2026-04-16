/* ── THEME TOGGLE ── */
(function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  if (saved === "light") {
    document.body.classList.add("light-mode");
  }
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.textContent = saved === "dark" ? "☀️" : "🌙";
    toggle.addEventListener("click", () => {
      const current = document.body.classList.contains("light-mode") ? "light" : "dark";
      const next = current === "dark" ? "light" : "dark";
      document.body.classList.toggle("light-mode");
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      toggle.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }
})();
