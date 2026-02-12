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

// After fragments are injected we initialize controls that depend on them
async function initCommon() {
  applyInitialTheme();
  // inject fragments first so elements like #themeToggle / #manageCookies exist
  await Promise.all([
    includeFragment('#site-nav', 'nav.html'),
    includeFragment('#site-footer', 'footer.html')
  ]);

  // Initialize UI behaviors
  initThemeToggle();
  initCookieConsent();
}

// Run when parsed (defer script assumed)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCommon);
} else {
  initCommon();
}
