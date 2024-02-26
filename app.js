"use strict";

const firstPage = document.querySelector(".firstpage");
const secondPage = document.querySelector(".secondpage");
const thirdPage = document.querySelector(".app");
const title = document.querySelector(".title");
const spans = document.querySelectorAll(".title span");
const images = document.querySelectorAll(".firstpage img");
const circle = document.querySelector(".circle");
const scrollShow = document.querySelector(".scroll");
const firstPageBottom = document
  .querySelector(".firstpage")
  .getBoundingClientRect().height;
const YOFF_MAX_TRANS_LIMIT = 400;
const YOFF_MIN_TRANS_LIMIT = 100;
const secondPageBottom = document
  .querySelector(".secondpage")
  .getBoundingClientRect().height;

document.addEventListener("scroll", function () {
  let Yoff = window.scrollY;

  secondPage.style.opacity = 0;
  images[(1, 2, 3, 4)].style.opacity = 0;
  spans[1].style.opacity = 1;
  spans[0].style.transform = "translate3d(0 , 0 , 0)";
  spans[2].style.transform = "translate3d(0 , 0 , 0)";

  if (Yoff >= YOFF_MIN_TRANS_LIMIT) {
    scrollShow.style.opacity = `${parseInt(
      YOFF_MAX_TRANS_LIMIT / (1.8 * Yoff) - 1
    )}`;
    images[1].style.opacity = `${(Yoff / YOFF_MAX_TRANS_LIMIT) * 2 - 0.6} `;
    images[2].style.opacity = `${(Yoff / YOFF_MAX_TRANS_LIMIT) * 2 - 0.6} `;
    images[3].style.opacity = `${(Yoff / YOFF_MAX_TRANS_LIMIT) * 2 - 0.6} `;
    images[4].style.opacity = `${(Yoff / YOFF_MAX_TRANS_LIMIT) * 2 - 0.6} `;
  }

  if (Yoff >= YOFF_MIN_TRANS_LIMIT) {
    title.style.top = `${(Yoff / YOFF_MIN_TRANS_LIMIT) * 30}%`;
    spans[0].style.transform = "translate3d(1rem , 0 , 0)";
    spans[1].style.opacity = 0;
    spans[2].style.transform = "translate3d(-1rem , 0 , 0)";
  }

  if (Yoff >= YOFF_MAX_TRANS_LIMIT * 0.8) {
    secondPage.style.opacity = 1;
    secondPage.style.top = `${firstPageBottom + 158}px`; /* 
    firstPage.style.display = "none"; */

    spans[0].style.transform = "translate3d(1rem , 0 , 0)";
    spans[1].style.opacity = 0;
    spans[2].style.transform = "translate3d(-1rem , 0 , 0)";
  }

  if (Yoff >= YOFF_MAX_TRANS_LIMIT * 4)
    console.log(secondPageBottom + firstPageBottom);
  thirdPage.style.opacity = 1;
  thirdPage.style.top = `${secondPageBottom + firstPageBottom - 330}px`; /* 
    firstPage.style.display = "none";
    secondPage.style.display = "none"; */
});
