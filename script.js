/** @format */

// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("fa-moon")) {
    darkmode.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("active");
  }
};

// ==================Contact Form=================

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw1U4z_LJjoicciSe0PSSB8MVkm7H3TdXmVVpSdjlppwubQI8FVjf1vPxL-2eFP-XOr/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// ===========Scrollbtn=========

const scrollbtn = document.querySelector(".scrollbtn");

window.addEventListener("scroll", () => {
  scrollbtn.classList.toggle("active", window.scrollY > 500);
});

scrollbtn.addEventListener("click", function () {
  window.scrollTo(0, 0); //top:0 , left: 0,

  // document.body.scrollTop = 0;
  // document.addEventListener.scrollTop = 0;
});

// Prajwal Ramteke
