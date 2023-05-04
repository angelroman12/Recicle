"use strict";

// Implement Sticky nav

const header = document.querySelector(".header");
const hero = document.querySelector(".section-hero");
const headerheight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerheight}px`,
});

headerObserver.observe(hero);

// Scroll to hero

const logoHeader = document
  .getElementById("logo")
  .addEventListener("click", function () {
    hero.scrollIntoView({ behavior: "smooth" });
  });

// About us Btn

const aboutUsBtn = document.getElementById("about-us-btn");
const aboutUsSection = document.querySelector(".section-about-us");

aboutUsBtn.addEventListener("click", function () {
  aboutUsSection.scrollIntoView({ behavior: "smooth" });
});

//  Navigation LINKS
const listItems = document.querySelector(".list-items");
const links = listItems.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
