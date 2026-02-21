/* ============================================
   X-Maxx RC Car Blog — Core Application JS
   Sidebar, Theme, TOC, Accordion
   ============================================ */

(function () {
  'use strict';

  // --- Theme Toggle ---
  const THEME_KEY = 'xmaxx-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드';
    }
  }

  function initTheme() {
    const theme = getPreferredTheme();
    setTheme(theme);

    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.theme-toggle');
      if (!btn) return;
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // --- Sidebar Toggle (Mobile) ---
  function initSidebar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (!menuToggle || !sidebar) return;

    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('visible');
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
      });
    }

    // Close sidebar on navigation (mobile)
    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('.sidebar-link') && window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('visible');
      }
    });
  }

  // --- Sidebar Section Collapse ---
  function initSidebarSections() {
    const SIDEBAR_STATE_KEY = 'xmaxx-sidebar-sections';
    let savedState = {};
    try {
      savedState = JSON.parse(localStorage.getItem(SIDEBAR_STATE_KEY) || '{}');
    } catch (e) { /* ignore */ }

    document.querySelectorAll('.sidebar-section-title').forEach(function (title) {
      const sectionId = title.getAttribute('data-section');
      const items = title.nextElementSibling;
      const arrow = title.querySelector('.arrow');
      if (!items || !sectionId) return;

      // Restore saved state
      if (savedState[sectionId] === 'collapsed') {
        items.classList.add('collapsed');
        if (arrow) arrow.classList.add('collapsed');
      } else {
        items.style.maxHeight = items.scrollHeight + 'px';
      }

      title.addEventListener('click', function () {
        const isCollapsed = items.classList.contains('collapsed');

        if (isCollapsed) {
          items.classList.remove('collapsed');
          items.style.maxHeight = items.scrollHeight + 'px';
          if (arrow) arrow.classList.remove('collapsed');
          savedState[sectionId] = 'expanded';
        } else {
          items.style.maxHeight = items.scrollHeight + 'px';
          // Force reflow
          items.offsetHeight;
          items.classList.add('collapsed');
          if (arrow) arrow.classList.add('collapsed');
          savedState[sectionId] = 'collapsed';
        }

        localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify(savedState));
      });
    });
  }

  // --- Mark Active Sidebar Link ---
  function initActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-link').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
        // Expand parent section if collapsed
        const section = link.closest('.sidebar-section-items');
        if (section && section.classList.contains('collapsed')) {
          section.classList.remove('collapsed');
          section.style.maxHeight = section.scrollHeight + 'px';
          const arrow = section.previousElementSibling?.querySelector('.arrow');
          if (arrow) arrow.classList.remove('collapsed');
        }
      }
    });
  }

  // --- Auto-generate TOC ---
  function initTOC() {
    const tocList = document.querySelector('.toc-list');
    const content = document.querySelector('.content');
    if (!tocList || !content) return;

    const headings = content.querySelectorAll('h2, h3');
    if (headings.length === 0) {
      const tocEl = document.querySelector('.toc');
      if (tocEl) tocEl.style.display = 'none';
      return;
    }

    headings.forEach(function (heading, index) {
      // Ensure heading has an id
      if (!heading.id) {
        heading.id = 'section-' + index;
      }

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = heading.textContent;
      a.className = 'toc-link' + (heading.tagName === 'H3' ? ' toc-h3' : '');
      a.setAttribute('data-target', heading.id);

      a.addEventListener('click', function (e) {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + heading.id);
      });

      li.appendChild(a);
      tocList.appendChild(li);
    });

    // Scroll spy
    let ticking = false;
    function updateActiveHeading() {
      const scrollY = window.scrollY + 100;
      let activeId = '';

      headings.forEach(function (heading) {
        if (heading.offsetTop <= scrollY) {
          activeId = heading.id;
        }
      });

      tocList.querySelectorAll('.toc-link').forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('data-target') === activeId);
      });

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateActiveHeading);
        ticking = true;
      }
    });

    updateActiveHeading();
  }

  // --- Accordion / Toggle ---
  function initToggles() {
    document.querySelectorAll('.toggle-header').forEach(function (header) {
      header.addEventListener('click', function () {
        const body = this.nextElementSibling;
        const isActive = this.classList.contains('active');

        if (isActive) {
          this.classList.remove('active');
          body.style.maxHeight = null;
        } else {
          this.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  // --- FAQ Toggle (same as accordion but auto-open first) ---
  function initFAQ() {
    document.querySelectorAll('.faq-list .toggle-header').forEach(function (header, index) {
      if (index === 0) {
        header.classList.add('active');
        const body = header.nextElementSibling;
        if (body) {
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      }
    });
  }

  // --- Checklist ---
  function initChecklist() {
    document.querySelectorAll('.checklist-checkbox').forEach(function (cb) {
      cb.addEventListener('change', function () {
        const item = this.closest('.checklist-item');
        if (item) {
          item.classList.toggle('checked', this.checked);
        }
      });
    });
  }

  // --- DB Table Sorting ---
  function initDBSort() {
    document.querySelectorAll('.db-table th[data-sort]').forEach(function (th) {
      th.addEventListener('click', function () {
        const table = this.closest('.db-table');
        const tbody = table.querySelector('tbody');
        const colIndex = Array.from(this.parentNode.children).indexOf(this);
        const sortKey = this.getAttribute('data-sort');
        const isAsc = !this.classList.contains('sort-asc');

        // Remove sort classes from siblings
        this.parentNode.querySelectorAll('th').forEach(function (h) {
          h.classList.remove('sort-asc', 'sort-desc');
        });
        this.classList.add(isAsc ? 'sort-asc' : 'sort-desc');

        const rows = Array.from(tbody.querySelectorAll('tr'));
        rows.sort(function (a, b) {
          const aVal = a.children[colIndex]?.textContent.trim() || '';
          const bVal = b.children[colIndex]?.textContent.trim() || '';

          // Try numeric sort
          const aNum = parseFloat(aVal.replace(/[^0-9.-]/g, ''));
          const bNum = parseFloat(bVal.replace(/[^0-9.-]/g, ''));
          if (!isNaN(aNum) && !isNaN(bNum)) {
            return isAsc ? aNum - bNum : bNum - aNum;
          }
          return isAsc ? aVal.localeCompare(bVal, 'ko') : bVal.localeCompare(aVal, 'ko');
        });

        rows.forEach(function (row) { tbody.appendChild(row); });
      });
    });
  }

  // --- Init All ---
  function init() {
    initTheme();
    initSidebar();
    initSidebarSections();
    initActiveLink();
    initTOC();
    initToggles();
    initFAQ();
    initChecklist();
    initDBSort();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
