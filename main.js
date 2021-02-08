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
    end: "+=12000",
    // end: "+=" + (window.innerHeight * 2),
    pin: true // this breaks svg transparency
  } // looks like it is the opacity of the parallax that is effecting this
}) // can be seen on chrome dev tools on iphone4 setting
whatIsDementiaTl.to('#fact1', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact2', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact3', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact4', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact5', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact6', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact7', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

whatIsDementiaTl.to(".dementiaFact", 50, { opacity: 0, autoAlpha: 0 });
whatIsDementiaTl.to("#factsSlide1", 50, { opacity: 0, display: "none" });
 
whatIsDementiaTl.to('#factsSlide2', 10, { autoAlpha: 1, opacity: 1, display: "block" });

whatIsDementiaTl.to('#fact8', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact9', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact10', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact11', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact12', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact13', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

whatIsDementiaTl.to(".dementiaFact", 100, { opacity: 0, autoAlpha: 0 });
whatIsDementiaTl.to("#factsSlide2", 100, { opacity: 0, display: "none" });

whatIsDementiaTl.to("#brainContentSectionImageContainer", 100, { display: "block", opacity: 1, autoAlpha: 1 });
whatIsDementiaTl.to('#commonType1', 500, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#commonType2', 500, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#commonType3', 500, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#commonType4', 500, { autoAlpha: 1, opacity: 1, display: "flex" });

// gsap.registerPlugin(MotionPathPlugin);

// gsap.from("#commonType4", {
//   duration: 5, 
//   repeat: 12,
//   repeatDelay: 3,
//   yoyo: true,
//   ease: "power1.inOut",
//   motionPath:{
//     path: "#path",
//     align: "self",
//     autoRotate: true,
//     alignOrigin: [0.5, 0.5]
//   }
// });

// const whatIsDementiaTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#commonType4",
//     start: "top top",
//     scrub: 1,
//     end: "+=2000",
//     // end: "+=" + (window.innerHeight * 2),
//     pin: true // this breaks svg transparency
//   } // looks like it is the opacity of the parallax that is effecting this
// }) 