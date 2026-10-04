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

function initEventCarousels() {
  document.querySelectorAll("[data-event-carousel]").forEach((carousel) => {
    const viewport = carousel.querySelector("[data-carousel-viewport]");
    const track = carousel.querySelector(".eventCarouselTrack");
    const slides = Array.from(carousel.querySelectorAll(".eventSlide"));
    const previousButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const dotsContainer = carousel.querySelector("[data-carousel-dots]");
    const status = carousel.querySelector("[data-carousel-status]");

    if (!viewport || !track || !slides.length || !previousButton || !nextButton || !dotsContainer || !status) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let currentIndex = 0;
    let scrollFrame = 0;

    const dots = slides.map((slide, index) => {
      const dot = document.createElement("button");
      const title = slide.querySelector("h3")?.textContent || `Event ${index + 1}`;
      dot.className = "eventCarouselDot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Show ${title}`);
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
      return dot;
    });

    function updateControls(index) {
      currentIndex = index;
      previousButton.disabled = index === 0;
      nextButton.disabled = index === slides.length - 1;
      status.textContent = `${index + 1} / ${slides.length}`;
      slides.forEach((slide, slideIndex) => {
        slide.tabIndex = slideIndex === index ? 0 : -1;
      });
      dots.forEach((dot, dotIndex) => {
        dot.setAttribute("aria-current", String(dotIndex === index));
      });
    }

    function goToSlide(index, behavior = reduceMotion.matches ? "auto" : "smooth") {
      const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
      const left = slides[nextIndex].offsetLeft - track.offsetLeft;
      viewport.scrollTo({ left, behavior });
      updateControls(nextIndex);
    }

    function syncControlsToScroll() {
      const closestIndex = slides.reduce((bestIndex, slide, index) => {
        const bestDistance = Math.abs(slides[bestIndex].offsetLeft - track.offsetLeft - viewport.scrollLeft);
        const slideDistance = Math.abs(slide.offsetLeft - track.offsetLeft - viewport.scrollLeft);
        return slideDistance < bestDistance ? index : bestIndex;
      }, 0);

      updateControls(closestIndex);
      scrollFrame = 0;
    }

    previousButton.addEventListener("click", () => goToSlide(currentIndex - 1));
    nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));

    viewport.addEventListener(
      "scroll",
      () => {
        if (scrollFrame) return;
        scrollFrame = window.requestAnimationFrame(syncControlsToScroll);
      },
      { passive: true }
    );

    viewport.addEventListener(
      "wheel",
      (event) => {
        if (event.ctrlKey || event.shiftKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

        const page = document.scrollingElement;
        if (!page) return;

        const scrollUnit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
        event.preventDefault();
        page.scrollTop += event.deltaY * scrollUnit;
      },
      { passive: false }
    );

    viewport.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      goToSlide(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
    });

    window.addEventListener("resize", () => goToSlide(currentIndex, "auto"), { passive: true });
    updateControls(0);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollReveal();
  initParallax();
  initExternalCardLinks();
  initEventCarousels();
});
