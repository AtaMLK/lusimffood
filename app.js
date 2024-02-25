"use strict";

const firstPage = document.querySelector(".firstpage");
const secondPage = document.querySelector(".secondpage");
const thirdPage = document.querySelector(".app");
const title = document.querySelector(".title");
const spans = document.querySelectorAll(".title span");
const images = document.querySelectorAll(".firstpage img");
const circle = document.querySelector(".circle");
const scrollShow = document.querySelector(".scroll");
const YOFF_MAX_TRANS_LIMIT = 400;
const YOFF_MIN_TRANS_LIMIT = 100;

document.addEventListener("scroll", function () {
  let Yoff = window.scrollY;

  title.style.color = "#fff";
  title.style.transform = "scale(1)";
  title.style.top = "22%";
  title.style.opacity = "1";
  scrollShow.style.opacity = 1;
  secondPage.style.opacity = 0;
  spans[1].style.opacity = 1;
  spans[0].style.transform = "translate3d(0 , 0 , 0)";
  spans[2].style.transform = "translate3d(0 , 0 , 0)";
  circle.style.opacity = "0";
  circle.style.transform = `scale(1)`;
  circle.style.backgroundColor = "#fff";
  images[1].style.opacity = "0";
  images[2].style.opacity = "0";
  images[3].style.opacity = "0";
  images[4].style.opacity = "0";

  console.log(Yoff);
  if (Yoff >= YOFF_MIN_TRANS_LIMIT) {
    scrollShow.style.opacity = 0;
    images[1].style.opacity = "1";
    images[2].style.opacity = "1";
    images[3].style.opacity = "1";
    images[4].style.opacity = "1";
  }
  if (Yoff >= YOFF_MIN_TRANS_LIMIT && Yoff <= YOFF_MAX_TRANS_LIMIT * 0.85) {
    title.style.top = `${(Yoff / YOFF_MAX_TRANS_LIMIT + 0.7) * 80}%`;
    console.log(title.style.top);
    spans[0].style.transform = "translate3d(1rem , 0 , 0)";
    spans[1].style.opacity = 0;
    spans[2].style.transform = "translate3d(-1rem , 0 , 0)";
  }
  if ((Yoff < YOFF_MAX_TRANS_LIMIT * 1.25, Yoff >= YOFF_MAX_TRANS_LIMIT)) {
    title.style.top = `${(Yoff / YOFF_MAX_TRANS_LIMIT) * 80}%`;
    circle.style.transform = `scale(${Yoff / 6})`;
    circle.style.opacity = "1";
  }

  if (Yoff >= YOFF_MAX_TRANS_LIMIT * 1.5) {
    title.style.transform = "scale(0)";
    circle.style.backgroundColor = "#000";
    spans[0].style.transform = "translate3d(0 , 0 , 0)";
    spans[1].style.opacity = 1;
    spans[2].style.transform = "translate3d(0 , 0 , 0)";
    secondPage.style.opacity = 1;
    secondPage.style.top = `${Yoff}`;
    console.log(images[0]);
  }
  if (Yoff >= YOFF_MAX_TRANS_LIMIT * 4) thirdPage.style.opacity = "1";
});
