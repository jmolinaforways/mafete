// ===========================
// MA FÊTE - LANDING PAGE JS
// ===========================

// ===== STICKY BAR =====
const stickyBar = document.getElementById('stickyBar');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Show sticky bar after scrolling past hero
  if (scrollY > 300) {
    stickyBar.classList.add('visible');
    navbar.style.top = '44px';
  } else {
    stickyBar.classList.remove('visible');
    navbar.style.top = '0';
  }
});

// ===== SMOOTH SCROLL for all anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 100; // account for navbar + sticky bar
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== PLAN TOGGLE =====
function showPlan(plan) {
  const btnEstandar = document.getElementById('btnEstandar');
  const btnMaxima = document.getElementById('btnMaxima');
  const planEstandar = document.getElementById('planEstandar');
  const planMaxima = document.getElementById('planMaxima');

  if (plan === 'estandar') {
    btnEstandar.classList.add('active');
    btnMaxima.classList.remove('active');
    planEstandar.classList.remove('hidden');
    planMaxima.classList.add('hidden');
  } else {
    btnMaxima.classList.add('active');
    btnEstandar.classList.remove('active');
    planMaxima.classList.remove('hidden');
    planEstandar.classList.add('hidden');
  }
}

// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
  const item = btn.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = '0';
  });

  // Open clicked if it wasn't already open
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

// ===== VSL VIDEO PLAY =====
function playVideo() {
  const overlay = document.getElementById('vslOverlay');
  const wrapper = overlay.parentElement;

  // Create iframe dynamically to autoplay
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1';
  iframe.title = 'Ma Fête Parque';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';

  overlay.style.display = 'none';
  wrapper.appendChild(iframe);
}

// ===== INTERSECTION OBSERVER for animations =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .testimonial-card, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Enhanced observer that triggers CSS transitions
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.feature-card, .testimonial-card, .step').forEach(el => {
  revealObserver.observe(el);
});

// ===== GHL IFRAME RESIZER (auto-height) =====
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'iframeSize') {
    const iframe = document.getElementById('LxCNFY123qi4fY2EZysN_1774645115134');
    if (iframe && e.data.height) {
      iframe.style.minHeight = (e.data.height + 40) + 'px';
    }
  }
});

// ===== CONSOLE BRANDING =====
console.log('%c Ma Fête Landing 🎉 ', 'background: #178af6; color: white; font-size: 16px; font-weight: bold; border-radius: 8px; padding: 8px 16px;');
