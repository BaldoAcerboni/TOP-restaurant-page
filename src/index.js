import "./css/home.css";
import "./css/menu.css";
import "./css/contacts.css";

import "./images/dollar.svg";
import "./images/imagination.jpg";
import "./images/kitchen.jpg";
import "./images/naruto-run.jpg";
import "./images/question.svg";

import { displayHomeSection } from "./home";
import { displayMenuSection } from "./menu";
import { displayContactsSection } from "./contacts";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");
const navBtns = document.getElementsByClassName("nav-btn");

function buttonHighlight(e) {
  if (!e.target.classList.contains("current")) {
    Array.from(navBtns).forEach((btn) => {
      btn.classList.remove("current");
    });
    e.target.classList.add("current");
  } else return;
}

homeBtn.addEventListener("click", displayHomeSection);
menuBtn.addEventListener("click", displayMenuSection);
contactBtn.addEventListener("click", displayContactsSection);

Array.from(navBtns).forEach((btn) => {
  btn.addEventListener("click", buttonHighlight);
});

displayHomeSection();
homeBtn.classList.add("current");
