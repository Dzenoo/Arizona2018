//Plain jS

window.onscroll = () => {
  let sectionForAnimation = document.querySelector(".hero_main");
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  let text = document.querySelector(".text2");
  let img = document.querySelector(".image img");

  if (sectionPosition < screenPosition) {
    text.classList.add("animated");
    img.classList.add("animated");
  }
};
