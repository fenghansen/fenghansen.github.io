(function() {
  'use strict';

  const STORAGE_KEY = 'site-lang-pref';
  const DEFAULT_LANG = 'en';

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function applyLang(lang) {
    // Toggle all elements with data-lang (except buttons)
    document.querySelectorAll('[data-lang]').forEach(function(el) {
      if (el.classList.contains('lang-btn')) return;

      if (el.dataset.lang === lang) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });

    // Update navigation hrefs
    document.querySelectorAll('a[data-href-zh]').forEach(function(a) {
      if (lang === 'zh') {
        a.setAttribute('href', a.dataset.hrefZh);
      } else {
        a.setAttribute('href', a.dataset.hrefEn || a.getAttribute('href'));
      }
    });

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update html lang attribute for SEO/accessibility
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function switchLang(lang) {
    setStoredLang(lang);
    applyLang(lang);
  }

  function init() {
    // Store original EN hrefs
    document.querySelectorAll('a[data-href-zh]').forEach(function(a) {
      if (!a.dataset.hrefEn) {
        a.dataset.hrefEn = a.getAttribute('href');
      }
    });

    var lang = getStoredLang();
    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        switchLang(btn.dataset.lang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
