/* =========================================================
   NPIT — Behaviour
   1. Mobile navigation
   2. Scroll spy (active nav link)
   3. Scroll reveal
   4. Program filter
   5. FAQ single-open
   6. Application form
   7. Newsletter form
   8. Back to top
   9. Animated stat counters
   10. Current year
   ========================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Mobile navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.getElementById('primary-nav');

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      closeNav();
    });
  }

  /* ---------- 2. Scroll spy ---------- */
  var sections = Array.prototype.slice.call(
    document.querySelectorAll('main section[id], footer[id]')
  );
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 3. Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

    revealEls.forEach(function (el) { revealObs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 4. Program filter ---------- */
  var filters  = Array.prototype.slice.call(document.querySelectorAll('.filter'));
  var programs = Array.prototype.slice.call(document.querySelectorAll('.program'));

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');

      filters.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });

      programs.forEach(function (card) {
        var match = cat === 'all' || card.getAttribute('data-category') === cat;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  /* ---------- 5. FAQ — single-open accordion ---------- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll('.faq__item'));

  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- 6. Application form ---------- */
  var form    = document.getElementById('apply-form');
  var success = document.getElementById('form-success');

  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      success.classList.add('is-visible');
      form.reset();
      success.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'center'
      });

      window.setTimeout(function () {
        success.classList.remove('is-visible');
      }, 9000);
    });
  }

  /* ---------- 7. Newsletter form ---------- */
  var news = document.getElementById('newsletter-form');

  if (news) {
    news.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = news.querySelector('input');
      if (!input.value || !input.checkValidity()) { input.focus(); return; }
      input.value = '';
      input.placeholder = 'Thanks — you are subscribed!';
      window.setTimeout(function () {
        input.placeholder = 'Your email address';
      }, 4000);
    });
  }

  /* ---------- 8. Back to top ---------- */
  var toTop = document.getElementById('to-top');

  if (toTop) {
    var onScroll = function () {
      toTop.classList.toggle('is-visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 9. Animated stat counters ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));

  function animateCount(el) {
    var target  = parseFloat(el.getAttribute('data-count'));
    var decimal = parseInt(el.getAttribute('data-decimal') || '0', 10);
    var suffix  = el.getAttribute('data-suffix') || '';
    var duration = reduceMotion ? 0 : 1400;
    var start    = performance.now();

    function tick(now) {
      var progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      var eased    = 1 - Math.pow(1 - progress, 3);
      var value    = target * eased;

      var display = decimal > 0
        ? value.toFixed(decimal)
        : Math.round(value).toLocaleString();

      el.textContent = display + suffix;

      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (counters.length && 'IntersectionObserver' in window) {
    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        countObs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { countObs.observe(el); });
  } else {
    counters.forEach(function (el) {
      var target  = parseFloat(el.getAttribute('data-count'));
      var decimal = parseInt(el.getAttribute('data-decimal') || '0', 10);
      var suffix  = el.getAttribute('data-suffix') || '';
      el.textContent = (decimal > 0 ? target.toFixed(decimal) : target.toLocaleString()) + suffix;
    });
  }

  /* ---------- 10. Current year ---------- */
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();