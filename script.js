const revealSelector = ".reveal";
const parallaxSelector = ".parallaxSoft";
const visibleClass = "isVisible";
const openClass = "isOpen";

function initNavigation() {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.classList.toggle(openClass, !isOpen);
    navLinks.classList.toggle(openClass, !isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.classList.remove(openClass);
    navLinks.classList.remove(openClass);
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(revealSelector);

  if (!revealElements.length) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add(visibleClass));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(visibleClass);
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
    revealObserver.observe(element);
  });
}

function initParallax() {
  const parallaxElements = document.querySelectorAll(parallaxSelector);

  if (!parallaxElements.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    parallaxElements.forEach((element) => {
      const speed = Number(element.getAttribute("data-parallax-speed") || 0.06);
      element.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    },
    { passive: true }
  );

  updateParallax();
}

function initExternalCardLinks() {
  document.querySelectorAll("[data-external-link]").forEach((linkElement) => {
    linkElement.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      window.open(linkElement.getAttribute("href"), "_blank", "noopener");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollReveal();
  initParallax();
  initExternalCardLinks();
});
