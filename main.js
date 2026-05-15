/* ============================================================
   PETAL & PASTURE — Main JavaScript
   Liquid Glass Effects, Animations & Interactions
   ============================================================ */

'use strict';

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursor) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  if (cursorFollower) {
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
  }
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Expand cursor on interactive elements
document.querySelectorAll('a, button, .collection-card, .uni-card, .star-card, .social-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursor) cursor.classList.add('cursor-dot-expanded');
    if (cursorFollower) cursorFollower.classList.add('cursor-expanded');
  });
  el.addEventListener('mouseleave', () => {
    if (cursor) cursor.classList.remove('cursor-dot-expanded');
    if (cursorFollower) cursorFollower.classList.remove('cursor-expanded');
  });
});

// ---- NAVIGATION SCROLL BEHAVIOR ----
const nav = document.getElementById('mainNav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Scrolled class for glass effect
  if (scrollY > 60) {
    nav.classList.add('scrolled');
    nav.classList.remove('hero-mode');
  } else {
    nav.classList.remove('scrolled');
    nav.classList.add('hero-mode');
  }

  lastScrollY = scrollY;
}, { passive: true });

// Set initial nav state
if (window.scrollY < 60) {
  nav.classList.add('hero-mode');
}

// ---- HERO SLIDESHOW ----
const heroImgs = document.querySelectorAll('.hero-img');
const heroDots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let heroInterval;

function goToSlide(index) {
  heroImgs.forEach(img => img.classList.remove('active'));
  heroDots.forEach(dot => dot.classList.remove('active'));
  currentSlide = index;
  if (heroImgs[currentSlide]) heroImgs[currentSlide].classList.add('active');
  if (heroDots[currentSlide]) heroDots[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % heroImgs.length);
}

goToSlide(0);
heroInterval = setInterval(nextSlide, 5000);

heroDots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(heroInterval);
    goToSlide(parseInt(dot.dataset.slide));
    heroInterval = setInterval(nextSlide, 5000);
  });
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, parseInt(delay));
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ---- HERO PARALLAX ----
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  if (heroBg && window.scrollY < window.innerHeight) {
    heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  }
}, { passive: true });

// ---- LIQUID GLASS TILT ON CARDS ----
document.querySelectorAll('.star-card, .uni-card, .testimonial-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.6s ease';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease, box-shadow 0.3s ease';
  });
});

// ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- MARQUEE PAUSE ON HOVER ----
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

// ---- AMBIENT PARTICLE SYSTEM (subtle floating petals) ----
function createParticleSystem() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = `
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    opacity: 0.4;
  `;
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Petal particles
  const particles = Array.from({ length: 18 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    size: Math.random() * 4 + 2,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: -Math.random() * 0.5 - 0.2,
    opacity: Math.random() * 0.5 + 0.2,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.02,
    color: Math.random() > 0.5 ? '#e8d5a3' : '#c9a96e'
  }));

  function drawPetal(ctx, x, y, size, rotation, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(0, 0, size, size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      if (p.y < -20) { p.y = H + 20; p.x = Math.random() * W; }
      if (p.x < -20) p.x = W + 20;
      if (p.x > W + 20) p.x = -20;
      drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
    });
    requestAnimationFrame(animate);
  }
  animate();
}
createParticleSystem();

// ---- COLLECTION CARD STAGGER ----
const collectionCards = document.querySelectorAll('.collection-card');
const collectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, (entry.target.dataset.delay || 0));
    }
  });
}, { threshold: 0.1 });

collectionCards.forEach(card => {
  collectionObserver.observe(card);
});

// ---- STAT NUMBER COUNT-UP ----
function countUp(el, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();
  const isPercent = el.textContent.includes('%');
  const isTimes = el.textContent.includes('×');

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    el.textContent = current + (isPercent ? '%' : isTimes ? '×' : '');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent;
      const num = parseInt(text.replace(/[^0-9]/g, ''));
      if (!isNaN(num)) countUp(el, num);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

// ---- GLASS CARD SHIMMER ON SCROLL ----
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelectorAll('.glass-card, .hero-glass-card, .glass-note-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const distance = Math.abs(centerY - viewportCenter) / window.innerHeight;
    const shimmer = Math.max(0, 1 - distance * 2);
    card.style.boxShadow = `0 ${4 + shimmer * 16}px ${30 + shimmer * 30}px rgba(61,43,31,${0.06 + shimmer * 0.08}), inset 0 1px 0 rgba(255,255,255,${0.1 + shimmer * 0.1})`;
  });
}, { passive: true });

// ---- HERO GLASS CARD MOUSE PARALLAX ----
const heroCard = document.getElementById('heroCard');
if (heroCard) {
  document.addEventListener('mousemove', (e) => {
    if (window.scrollY > window.innerHeight * 0.5) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    heroCard.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg)`;
    heroCard.style.transition = 'transform 0.1s ease';
  });
  document.addEventListener('mouseleave', () => {
    heroCard.style.transform = '';
    heroCard.style.transition = 'transform 0.8s ease';
  });
}

// ---- PAGE LOAD ANIMATION ----
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});
