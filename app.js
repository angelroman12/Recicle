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

const goToElement = function () {
  this.scrollIntoView({ behavior: "smooth" });
};
// Scroll to hero

const logoHeader = document
  .getElementById("logo")
  .addEventListener("click", goToElement.bind(hero));

// About us Btn
const aboutUsBtn = document.getElementById("about-us-btn");
const aboutUsSection = document.querySelector(".section-about-us");
aboutUsBtn.addEventListener("click", goToElement.bind(aboutUsSection));

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

const form = document.querySelector(".contact-form");
const btnContact = document.querySelector(".btn-contact");

btnContact.addEventListener("click", goToElement.bind(form));
