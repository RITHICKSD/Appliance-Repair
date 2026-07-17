// VoltFix Global JavaScript Manager

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initDirection();
  initDropdowns();
  initMobileMenu();
  initMobileHomeAccordion();
});

// 1. Theme Switcher (Dark/Light)
function initTheme() {
  const currentTheme = localStorage.getItem("voltfix-theme") || "light";
  applyTheme(currentTheme);

  // Wire both header toggle (kept hidden) and mobile drawer toggle
  ["theme-toggle", "mobile-theme-btn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        const activeTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        localStorage.setItem("voltfix-theme", activeTheme);
        applyTheme(activeTheme);
      });
    }
  });
}

function applyTheme(theme) {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const mobileThemeBtn = document.getElementById("mobile-theme-btn");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    const darkIcon = `
        <svg class="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke-width="2"></circle>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"></path>
        </svg>
      `;
    if (themeToggleBtn) themeToggleBtn.innerHTML = darkIcon;
    if (mobileThemeBtn) mobileThemeBtn.innerHTML = darkIcon;
  } else {
    document.documentElement.classList.remove("dark");
    const lightIcon = `
        <svg class="w-5 h-5 text-slate-700 dark:text-slate-300 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      `;
    if (themeToggleBtn) themeToggleBtn.innerHTML = lightIcon;
    if (mobileThemeBtn) mobileThemeBtn.innerHTML = lightIcon;
  }
}

// 2. Direction Switcher (LTR/RTL)
function initDirection() {
  const rtlToggleBtn = document.getElementById("rtl-toggle");
  if (!rtlToggleBtn) return;

  const currentDir = localStorage.getItem("voltfix-dir") || "ltr";
  applyDirection(currentDir);

  rtlToggleBtn.addEventListener("click", () => {
    const activeDir = document.documentElement.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
    localStorage.setItem("voltfix-dir", activeDir);
    applyDirection(activeDir);
  });
}

function applyDirection(dir) {
  const rtlToggleBtn = document.getElementById("rtl-toggle");
  const rtlTextSpan = document.getElementById("rtl-text");
  const mobileRtlText = document.getElementById("mobile-rtl-text");

  document.documentElement.setAttribute("dir", dir);

  if (dir === "rtl") {
    document.documentElement.classList.add("rtl-mode");
    if (rtlTextSpan) rtlTextSpan.textContent = "RTL";
    if (mobileRtlText) mobileRtlText.textContent = "RTL";
  } else {
    document.documentElement.classList.remove("rtl-mode");
    if (rtlTextSpan) rtlTextSpan.textContent = "LTR";
    if (mobileRtlText) mobileRtlText.textContent = "LTR";
  }
}

// 3. Dropdowns Management (Header Nav Dropdown)
function initDropdowns() {
  const homeDropdownBtn = document.getElementById("home-dropdown-btn");
  const homeDropdownMenu = document.getElementById("home-dropdown-menu");

  if (!homeDropdownBtn || !homeDropdownMenu) return;

  homeDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    homeDropdownMenu.classList.toggle("hidden");
    homeDropdownMenu.classList.toggle("opacity-0");
    homeDropdownMenu.classList.toggle("translate-y-2");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
      homeDropdownMenu.classList.add("hidden");
      homeDropdownMenu.classList.add("opacity-0");
      homeDropdownMenu.classList.add("translate-y-2");
    }
  });
}

// 5. Mobile Home Accordion
function initMobileHomeAccordion() {
  const btn = document.getElementById("mobile-home-acc-btn");
  const sub = document.getElementById("mobile-home-acc-sub");
  const icon = document.getElementById("mobile-home-acc-icon");
  if (!btn || !sub) return;

  btn.addEventListener("click", () => {
    const isOpen = !sub.classList.contains("hidden");
    if (isOpen) {
      sub.classList.add("hidden");
      sub.classList.remove("flex");
      if (icon) icon.classList.remove("rotate-90");
    } else {
      sub.classList.remove("hidden");
      sub.classList.add("flex");
      if (icon) icon.classList.add("rotate-90");
    }
  });
}

// 4. Mobile Menu Drawer
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileDrawerOverlay = document.getElementById("mobile-drawer-overlay");

  if (!mobileMenuBtn || !mobileDrawer) return;

  const toggleMobileMenu = () => {
    mobileDrawer.classList.toggle("translate-x-full");
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.toggle("hidden");
  };

  mobileMenuBtn.addEventListener("click", toggleMobileMenu);

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener("click", toggleMobileMenu);
  }

  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener("click", toggleMobileMenu);
  }
}
