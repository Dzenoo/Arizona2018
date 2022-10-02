let menu = document.querySelector(".menu ul");

function openMenuHandler() {
  menu.style.visibility = "visible";
}
function closeMenuHandler() {
  menu.style.visibility = "hidden";
}

///////////////

let textTag = document.querySelector(".hero_content h2");
let text = textTag.textContent;

let splittedText = text.split("");

textTag.innerHTML = "";

for (let i = 0; i < splittedText.length; i++) {
  if (splittedText[i] == " ") {
    splittedText[i] = "&nbsp;";
  }

  textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let k = 0;
let interval = setInterval(() => {
  let spanovi = textTag.querySelectorAll("span");
  let singleSpan = spanovi[k];

  singleSpan.className = `fadeMove`;

  k++;

  if (k === spanovi.length) {
    clearInterval(interval);
  }
}, 200);

////////////////////////////////////
//Plain jS

window.onscroll = () => {
  let sectionForAnimation = document.querySelector(".afterHero");
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  let text = document.querySelector(".text");
  let img = document.querySelector(".img img");

  if (sectionPosition < screenPosition) {
    text.classList.add("animated");
    img.classList.add("animated");
  }

  let sectionForAnimation2 = document.querySelector(".services");
  let sectionPosition2 = sectionForAnimation2.getBoundingClientRect().top;
  let screenPosition2 = window.innerHeight;

  let container = document.querySelector(".container");

  if (sectionPosition2 < screenPosition2) {
    container.classList.add("slideFromBottom");
  }
};

//Jquery
$(document).ready(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 20) {
      $(".typing").addClass("slideFrom");
    } else {
      $(".typing").removeClass("slideFrom");
    }

    if ($(window).scrollTop() > 4390) {
      $(".main__container").addClass("slideServices");
    } else {
      $(".main__container").removeClass("slideServices");
    }
  });
});

///////////////////////
