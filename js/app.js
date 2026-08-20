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
  const currentTheme = localStorage.getItem("voltfix-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(currentTheme);

  // Delegate click for any theme toggle button (header desktop, header mobile, drawer toggle)
  document.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest("#theme-toggle, #mobile-theme-btn, .theme-toggle-btn");
    if (toggleBtn) {
      e.preventDefault();
      const activeTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem("voltfix-theme", activeTheme);
      applyTheme(activeTheme);
    }
  });
}

function applyTheme(theme) {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle, #mobile-theme-btn, .theme-toggle-btn");

  const darkIcon = `
    <svg class="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke-width="2"></circle>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"></path>
    </svg>
  `;
  const lightIcon = `
    <svg class="w-5 h-5 text-slate-700 dark:text-slate-300 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
    </svg>
  `;

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  themeToggleBtns.forEach((btn) => {
    const iconSpan = btn.querySelector(".theme-toggle-icon");
    const textSpan = btn.querySelector(".theme-toggle-text");

    if (theme === "dark") {
      if (iconSpan) {
        iconSpan.innerHTML = darkIcon;
      } else {
        btn.innerHTML = darkIcon;
      }
      if (textSpan) textSpan.textContent = "Dark";
      btn.setAttribute("aria-label", "Switch to light mode");
      btn.setAttribute("title", "Switch to light mode");
    } else {
      if (iconSpan) {
        iconSpan.innerHTML = lightIcon;
      } else {
        btn.innerHTML = lightIcon;
      }
      if (textSpan) textSpan.textContent = "Light";
      btn.setAttribute("aria-label", "Switch to dark mode");
      btn.setAttribute("title", "Switch to dark mode");
    }
  });
}

// 2. Direction Switcher (LTR/RTL)
function initDirection() {
  const currentDir = localStorage.getItem("voltfix-dir") || "ltr";
  applyDirection(currentDir);

  document.addEventListener("click", (e) => {
    const rtlBtn = e.target.closest("#rtl-toggle, #mobile-rtl-toggle");
    if (rtlBtn) {
      e.preventDefault();
      const activeDir = document.documentElement.getAttribute("dir") === "rtl" ? "ltr" : "rtl";
      localStorage.setItem("voltfix-dir", activeDir);
      applyDirection(activeDir);
    }
  });
}

function applyDirection(dir) {
  const rtlTextSpan = document.getElementById("rtl-text");
  const mobileRtlText = document.getElementById("mobile-rtl-text");
  const drawer = document.getElementById("mobile-drawer");

  document.documentElement.setAttribute("dir", dir);

  if (dir === "rtl") {
    document.documentElement.classList.add("rtl-mode");
    if (rtlTextSpan) rtlTextSpan.textContent = "RTL";
    if (mobileRtlText) mobileRtlText.textContent = "RTL";
    // In RTL, drawer slides from left
    if (drawer) {
      drawer.style.right = "auto";
      drawer.style.left = "0";
      drawer.style.borderLeft = "none";
      drawer.style.borderRight = "1px solid rgba(226, 232, 240, 0.5)";
    }
  } else {
    document.documentElement.classList.remove("rtl-mode");
    if (rtlTextSpan) rtlTextSpan.textContent = "LTR";
    if (mobileRtlText) mobileRtlText.textContent = "LTR";
    // In LTR, drawer slides from right
    if (drawer) {
      drawer.style.right = "0";
      drawer.style.left = "auto";
      drawer.style.borderRight = "none";
      drawer.style.borderLeft = "1px solid rgba(226, 232, 240, 0.5)";
    }
  }
}

// 3. Dropdowns Management (Header Nav Dropdown)
function initDropdowns() {
  const homeDropdownBtn = document.getElementById("home-dropdown-btn");
  const homeDropdownMenu = document.getElementById("home-dropdown-menu");

  if (!homeDropdownBtn || !homeDropdownMenu) return;

  const chevron = homeDropdownBtn.querySelector(".fa-chevron-down") || document.getElementById("home-chevron");

  homeDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = homeDropdownMenu.classList.contains("hidden");
    if (isHidden) {
      homeDropdownMenu.classList.remove("hidden", "opacity-0", "translate-y-2");
      if (chevron) chevron.classList.add("rotate-180");
    } else {
      homeDropdownMenu.classList.add("hidden");
      if (chevron) chevron.classList.remove("rotate-180");
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
      homeDropdownMenu.classList.add("hidden");
      if (chevron) chevron.classList.remove("rotate-180");
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

// 4. Mobile Menu Drawer Management
function initMobileMenu() {
  const overlay = document.getElementById("mobile-drawer-overlay");
  const drawer  = document.getElementById("mobile-drawer");

  if (!drawer || !overlay) return;

  function openMenu() {
    overlay.classList.remove("hidden");
    drawer.classList.remove("translate-x-full", "-translate-x-full");
    drawer.classList.add("translate-x-0");
    document.body.style.overflow = "hidden"; // prevent background scroll
  }

  function closeMenu() {
    drawer.classList.remove("translate-x-0");
    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    drawer.classList.add(isRtl ? "-translate-x-full" : "translate-x-full");
    setTimeout(() => {
      overlay.classList.add("hidden");
      document.body.style.overflow = "";
    }, 280);
  }

  // Use event delegation on document so the click fires regardless of
  // whether the button is inside a hidden/shown wrapper div.
  document.addEventListener("click", (e) => {
    // Open: any element with id="mobile-menu-btn"
    if (e.target.closest("#mobile-menu-btn")) {
      openMenu();
      return;
    }
    // Close: close button or overlay backdrop
    if (e.target.closest("#mobile-menu-close-btn") || e.target === overlay) {
      closeMenu();
      return;
    }
    // Close: mobile CTA book/subscribe button (navigates away)
    if (e.target.closest("#mobile-book-btn")) {
      closeMenu();
    }
  });
}

