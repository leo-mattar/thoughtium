// --------------- GSAP ---------------
gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

// --------------- LENIS ---------------
window.lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add(time => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// --------------- GLOBAL - RELOAD AT THE TOP ---------------
window.addEventListener("beforeunload", function () {
  history.scrollRestoration = "manual";
});

// --------------- CLIENT STORIES NUMBERS ---------------
function clientStoriesNum() {
  const wrapper = document.querySelector(".portfolio20_list-wrapper");

  if (!wrapper) return;

  const items = document.querySelectorAll(".heading-style-h1.case-title");
  items.forEach((item, index) => {
    const num = item.querySelector(".cs-num");
    num.textContent = index + 1;
  });
}

// --------------- EPISODES FILTER ---------------
function episodesFilter() {
  const wrapper = document.querySelector(".c-episodes-filter");
  if (!wrapper) return;

  const allBtn = wrapper.querySelector(".c-episodes-filter-all-btn");
  const list = wrapper.querySelector(".category-filter-menu");

  list.prepend(allBtn);
}

// --------------- GLOBAL FADE ---------------
function fade() {
  const fadeElements = document.querySelectorAll("[fade]");

  gsap.set(fadeElements, { opacity: 0, y: "5em" });

  ScrollTrigger.batch("[fade]", {
    once: true,
    onEnter: batch =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
      }),
  });
}

// --------------- INITIALIZATION ---------------
function init() {
  clientStoriesNum();
  episodesFilter();
  fade();
}

init();
