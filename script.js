(function () {
  "use strict";

  /**
   * 主题管理：基于系统偏好与持久化设置
   */
  var THEME_DARK_CLASS = "theme-dark";
  var STORAGE_KEY = "preferred-theme"; // "light" | "dark"

  function getSystemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {
      // 忽略
    }
  }

  function applyTheme(theme) {
    var htmlElement = document.documentElement;
    var isDark = theme === "dark";
    if (isDark) {
      if (!htmlElement.classList.contains(THEME_DARK_CLASS)) {
        htmlElement.classList.add(THEME_DARK_CLASS);
      }
    } else {
      htmlElement.classList.remove(THEME_DARK_CLASS);
    }
    updateToggleIcon(isDark);
  }

  function updateToggleIcon(isDark) {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) return;
    toggle.textContent = isDark ? "🌞" : "🌙";
    toggle.setAttribute("aria-label", isDark ? "切换到浅色" : "切换到深色");
    toggle.setAttribute("title", isDark ? "切换到浅色" : "切换到深色");
  }

  function initTheme() {
    var stored = getStoredTheme();
    var theme = stored || (getSystemPrefersDark() ? "dark" : "light");
    applyTheme(theme);
  }

  function toggleTheme() {
    var isDark = document.documentElement.classList.contains(THEME_DARK_CLASS);
    var next = isDark ? "light" : "dark";
    applyTheme(next);
    storeTheme(next);
  }

  /**
   * 初始化
   */
  document.addEventListener("DOMContentLoaded", function () {
    // 年份
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // 主题
    initTheme();
    var toggle = document.getElementById("theme-toggle");
    if (toggle) toggle.addEventListener("click", toggleTheme);
  });
})();

