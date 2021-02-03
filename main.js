function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  console.log("triggered scroll");
}

// document.querySelector('.rttFlower').addEventListener('click', () => {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// console.log("triggered scroll");
// })

// Aggression cart events
const dementiaTypeCard = document.querySelector('.dementiaTypeCard');
dementiaTypeCard.addEventListener('click', () => {
  console.log("dementiaTypeCard card clicked");
});

new Glide('.glide', {
  type: 'carousel',
  autoplay: 8000 | true,
  hoverPause: true,
  animationDuration: 2000
}).mount();

const imageCard = document.querySelector('.card-basic')
imageCard.addEventListener('mouseover', () => {
  console.log("anything");
});


let test = document.querySelector('.card-basic')
test.addEventListener("click", () => {
  console.log("You knocked?");
});

document.querySelector('.dementiaFact').addEventListener('click', () => {
  console.log("clicked")
});

// GSAP animate WHAT IS DEMENTIA section
const whatIsDementiaTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger1",
    start: "top top",
    scrub: 1,
    end: "+=8000",
    // end: "+=" + (window.innerHeight * 2),
    pin: true // this breaks svg transparency
  } // looks like it is the opacity of the parallax that is effecting this
}) // can be seen on chrome dev tools on iphone4 setting
whatIsDementiaTl.to('#fact1', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact2', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact3', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact4', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact5', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact6', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact7', 10, { autoAlpha: 1, opacity: 1, display: "flex" });

whatIsDementiaTl.to(".dementiaFact", 5, { opacity: 0, display: "none" });

whatIsDementiaTl.to('#fact8', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact9', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact10', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact11', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact12', 10, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact13', 10, { autoAlpha: 1, opacity: 1, display: "flex" });