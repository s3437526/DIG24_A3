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

// GSAP animate WHAT IS DEMENTIA section
const whatIsDementiaTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger1",
    start: "top top",
    scrub: 1,
    end: "+=20000",
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

gsap.registerPlugin(MotionPathPlugin);

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

const whatIsDementiaT2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger1",
    start: 1000,
    scrub: 1,
    end: "+=2000",
    yoyo: true,
    ease: "power1.inOut",
    motionPath: {
      path: "#path",
      align: "#placeholder1",
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      // end: "+=" + (window.innerHeight * 2),
      pin: true // this breaks svg transparency
    }
  } // looks like it is the opacity of the parallax that is effecting this
}) 

// Common dementia type 1 dialog
const dementiaDialog1 = document.querySelector('#dementiaDialog1');
const openButton1 = dementiaDialog1.nextElementSibling;
const closeButton1 = dementiaDialog1.querySelector('sl-button[slot="footer"]');

openButton1.addEventListener('click', () => dementiaDialog1.show());
closeButton1.addEventListener('click', () => dementiaDialog1.hide());

// // Common dementia type 2 dialog
// const dementiaDialog2 = document.querySelector('#dementiaDialog2');
// const openButton2 = dementiaDialog2.nextElementSibling;
// const closeButton2 = dementiaDialog2.querySelector('sl-button[slot="footer"]');

// openButton2.addEventListener('click', () => dementiaDialog2.show());
// closeButton2.addEventListener('click', () => dementiaDialog2.hide());

// // Common dementia type 3 dialog
// const dementiaDialog3 = document.querySelector('#dementiaDialog3');
// const openButton3 = dementiaDialog3.nextElementSibling;
// const closeButton3 = dementiaDialog3.querySelector('sl-button[slot="footer"]');

// openButton3.addEventListener('click', () => dementiaDialog3.show());
// closeButton3.addEventListener('click', () => dementiaDialog3.hide());

// // Common dementia type 4 dialog
// const dementiaDialog4 = document.querySelector('#dementiaDialog4');
// const openButton4 = dementiaDialog4.nextElementSibling;
// const closeButton4 = dementiaDialog4.querySelector('sl-button[slot="footer"]');

// openButton4.addEventListener('click', () => dementiaDialog4.show());
// closeButton4.addEventListener('click', () => dementiaDialog4.hide());

// Gallery image 1 dialog
const galleryImage1 = document.querySelector('#galleryImage1');
const galleryOpenButton1 = galleryImage1.nextElementSibling;

galleryOpenButton1.addEventListener('click', () => galleryImage1.show());

// Dementia among us animation
const dementiaPrevelanceT1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger2",
    start: "top top",
    scrub: 1,
    end: "+=15000",
    // end: "+=" + (window.innerHeight * 2),
    pin: true // this breaks svg transparency
  } // looks like it is the opacity of the parallax that is effecting this
}) // can be seen on chrome dev tools on iphone4 setting

dementiaPrevelanceT1.to('#prevelance1', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#prevelance2', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#prevelance3', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

dementiaPrevelanceT1.to(".prevelanceContainer", 50, { opacity: 0, autoAlpha: 0, display: "none" });
// dementiaPrevelanceT1.to(".prevelanceContainer", 50, { opacity: 0, display: "none" });

dementiaPrevelanceT1.to('.symptomsContainer', 10, { autoAlpha: 1, opacity: 1, display: "block" });

dementiaPrevelanceT1.to('#symptomsHeading', 300, { autoAlpha: 1, opacity: 1, display: "block" });
dementiaPrevelanceT1.to('#symptom1', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom2', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom3', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom4', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom5', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom6', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom7', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom8', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom9', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom10', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

// dementiaPrevelanceT1.to(".dementiaFact", 100, { opacity: 0, autoAlpha: 0 });
// dementiaPrevelanceT1.to("#factsSlide2", 100, { opacity: 0, display: "none" });