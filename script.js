/* ===== Page Loader ===== */
const loader = document.getElementById('pageLoader');
const loaderText = document.getElementById('loaderText');
const name = 'RIFDI.AR';

name.split('').forEach((ch, i) => {
  const s = document.createElement('span');
  s.textContent = ch === ' ' ? ' ' : ch;
  s.style.setProperty('--i', i);
  loaderText.appendChild(s);
});

window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('done'), 900);
});

/* ===== Custom Cursor ===== */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .skill-tag, .stat-card, .contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
});

/* ===== Navbar scroll ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ===== Typewriter ===== */
const phrases = [
  'Software Engineer',
  'Mobile Developer',
  'Fullstack Builder',
  'AI Automation Lead',
  '7+ Years Experience',
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const titleEl = document.getElementById('heroTitle');

function typeWriter() {
  const current = phrases[phraseIdx];
  const cursor  = '<span class="typewriter-cursor"></span>';

  if (!deleting) {
    charIdx++;
    titleEl.innerHTML = current.slice(0, charIdx) + cursor;
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1800);
      return;
    }
    setTimeout(typeWriter, 70);
  } else {
    charIdx--;
    titleEl.innerHTML = current.slice(0, charIdx) + cursor;
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeWriter, 300);
      return;
    }
    setTimeout(typeWriter, 35);
  }
}

// Start typewriter after hero animation delay
if (titleEl) setTimeout(typeWriter, 1800);

/* ===== Scroll-reveal ===== */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ===== Stat counter animation ===== */
function animateCounter(el) {
  const target  = parseInt(el.dataset.count);
  const suffix  = el.dataset.suffix || '';
  const numEl   = el.querySelector('.stat-number');
  const duration = 1400;
  const start   = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    numEl.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      statObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card[data-count]').forEach(el => statObs.observe(el));

/* ===== Skill tags staggered pop-in ===== */
const skillGroupObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const tags = e.target.querySelectorAll('.skill-tag');
      tags.forEach((tag, i) => {
        setTimeout(() => tag.classList.add('popped'), i * 60);
      });
      skillGroupObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-group').forEach(el => skillGroupObs.observe(el));

/* ===== Timeline: slide-in + dot activate + line fill ===== */
const timelineItems   = document.querySelectorAll('.timeline-item');
const timelineFill    = document.getElementById('timelineFill');
const timelineTrack   = document.querySelector('.timeline-track');

function updateTimelineLine() {
  if (!timelineTrack) return;
  const trackTop    = timelineTrack.getBoundingClientRect().top + window.scrollY;
  const trackHeight = timelineTrack.offsetHeight;
  const scrolled    = window.scrollY + window.innerHeight * 0.75;
  const progress    = Math.max(0, Math.min(1, (scrolled - trackTop) / trackHeight));
  timelineFill.style.height = (progress * 100) + '%';
}

const timelineObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

timelineItems.forEach((item, i) => {
  item.style.transitionDelay = (i * 40) + 'ms';
  timelineObs.observe(item);
});

window.addEventListener('scroll', updateTimelineLine, { passive: true });
updateTimelineLine();

/* ===== Active nav on scroll ===== */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObs.observe(s));
