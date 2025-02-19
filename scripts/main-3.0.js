// --------------- GSAP ---------------
gsap.registerPlugin(ScrollTrigger, CustomEase);

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

// --------------- CUSTOM EASE ---------------
CustomEase.create("ease-out-1", "0.25, 1, 0.5, 1");

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

  const items = document.querySelectorAll(".portfolio20_item-link");
  items.forEach((item, index) => {
    const num = item.querySelector(".cs-num");
    const displayNumber = index + 1 < 10 ? `0${index + 1}` : index + 1;
    num.textContent = displayNumber;
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
        ease: "ease-out-1",
        stagger: 0.15,
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
