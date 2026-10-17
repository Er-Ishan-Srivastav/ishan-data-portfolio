(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  const progress = document.querySelector('#scroll-progress');
  const year = document.querySelector('#year');
  const role = document.querySelector('#typed-role');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (year) year.textContent = String(new Date().getFullYear());

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const updateProgress = () => {
    if (!progress) return;
    const root = document.documentElement;
    const maximum = root.scrollHeight - window.innerHeight;
    const percent = maximum > 0 ? (window.scrollY / maximum) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  if ('IntersectionObserver' in window && links.length) {
    const lookup = new Map(links.map((link) => [link.getAttribute('href').slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.remove('is-active'));
        lookup.get(entry.target.id)?.classList.add('is-active');
      });
    }, { rootMargin: '-32% 0px -58% 0px', threshold: 0.01 });
    sections.forEach((section) => observer.observe(section));
  }

  const revealItems = document.querySelectorAll('.section, .timeline-row, .skill-card, .project-card, .featured-project, .research-row, .education-grid article');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    revealItems.forEach((item) => item.classList.add('will-reveal'));
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  if (role && !reduceMotion) {
    const words = ['Data Engineering', 'Python / SQL ETL', 'Backend Systems', 'Applied AI Research'];
    let wordIndex = 0, charIndex = words[0].length, deleting = true;
    const tick = () => {
      const current = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      role.textContent = current.slice(0, Math.max(0, charIndex));
      let delay = deleting ? 42 : 76;
      if (!deleting && charIndex >= current.length) { deleting = true; delay = 1350; }
      else if (deleting && charIndex <= 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; delay = 240; }
      window.setTimeout(tick, delay);
    };
    window.setTimeout(tick, 1750);
  }
})();
