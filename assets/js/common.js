// assets/js/common.js — inject header/footer, init theme & cookie consent

// Lightweight include helper
async function includeFragment(selector, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed: ' + url);
    const html = await res.text();
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  } catch (err) {
    // no-op: fail silently but log for debugging
    console.warn('includeFragment:', url, err);
  }
}

// Theme initialization (run as soon as this script executes)
function applyInitialTheme() {
  try {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    /* ignore */
  }
}

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    if (isDark) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    }
  });
}

// Cookie consent
function initCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  const cookieAccept = document.getElementById('cookieAccept');
  const cookieReject = document.getElementById('cookieReject');
  const manageCookies = document.getElementById('manageCookies');
  if (!cookieConsent || !cookieAccept || !cookieReject) return;

  function isConsentValid() {
    const consentDate = localStorage.getItem('cookieConsentDate');
    if (!consentDate) return false;
    const sixMonths = 6 * 30 * 24 * 60 * 60 * 1000;
    return (Date.now() - parseInt(consentDate, 10)) < sixMonths;
  }

  function saveConsent(value) {
    localStorage.setItem('cookieConsent', value);
    localStorage.setItem('cookieConsentDate', Date.now().toString());
  }

  if (!localStorage.getItem('cookieConsent') || !isConsentValid()) {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
    cookieConsent.classList.remove('hidden');
  }

  cookieAccept.addEventListener('click', () => {
    saveConsent('accepted');
    cookieConsent.classList.add('hidden');
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
  });

  cookieReject.addEventListener('click', () => {
    saveConsent('rejected');
    cookieConsent.classList.add('hidden');
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { 'analytics_storage': 'denied' });
    }
  });

  manageCookies?.addEventListener('click', (e) => {
    e?.preventDefault();
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
    cookieConsent.classList.remove('hidden');
  });
}

// Mobile menu initialization (moved here so it runs after fragments are injected)
function initMobileMenu() {
  const btn = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  const setClosed = () => {
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.add('scale-y-0');
    menu.classList.add('opacity-0');
  };

  const setOpen = () => {
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.remove('scale-y-0');
    menu.classList.remove('opacity-0');
  };

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) setClosed(); else setOpen();
  });

  // Close menu when any link inside the mobile menu is clicked (common mobile UX)
  menu.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
      // short delay to allow navigation to start, then close
      setClosed();
    });
  });
}

// After fragments are injected we initialize controls that depend on them
async function initCommon() {
  applyInitialTheme();
  // inject fragments first so elements like #themeToggle / #manageCookies exist
  await Promise.all([
    includeFragment('#site-nav', 'nav.html'),
    includeFragment('#site-footer', 'footer.html')
  ]);

  // Retry injection for footer if it ended up empty (simple resilience)
  const footerEl = document.querySelector('#site-footer');
  if (footerEl && !footerEl.innerHTML.trim()) {
    try {
      const res = await fetch('footer.html');
      if (res.ok) footerEl.innerHTML = await res.text();
    } catch (e) {
      console.warn('footer injection retry failed', e);
    }
  }

  // Initialize UI behaviors
  initThemeToggle();
  initCookieConsent();
  initMobileMenu();
}

// Run when parsed (defer script assumed)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCommon);
} else {
  initCommon();
}
