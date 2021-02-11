function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

new Glide('.glide', {
  type: 'carousel',
  autoplay: 8000 | true,
  hoverPause: true,
  animationDuration: 2000
}).mount();

gsap.registerPlugin(ScrollTrigger);

// GSAP animate WHAT IS DEMENTIA section
const whatIsDementiaTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger1",
    start: "top top",
    scrub: 1,
    markers: true,
    anticipatePin: 1,
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

const whatIsDementiaT2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger1",
    start: 1000,
    scrub: 1,
    end: "+=2000",
    yoyo: true,
    anticipatePin: 1,
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

// Dementia among us animation
const dementiaPrevelanceT1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#trigger3",
    start: "top top",
    scrub: 1,
    markers: true,
    anticipatePin: 1,
    end: "+=15000",
    // end: "+=" + (window.innerHeight * 2),
    pin: true // this breaks svg transparency
  } // looks like it is the opacity of the parallax that is effecting this
}) // can be seen on chrome dev tools on iphone4 setting

dementiaPrevelanceT1.to('.prevelanceContainers', 10, { autoAlpha: 1, opacity: 1, display: "block" });

dementiaPrevelanceT1.to('#prevelance1', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#prevelance2', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#prevelance3', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

dementiaPrevelanceT1.to(".prevelanceContainer", 50, { opacity: 0, autoAlpha: 0, display: "none" });

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

// Animation duration (sec)
const duration = 1;

// const tl1 = new TimelineMax({});

// 4 common dementia types animations
const dementiaCard = gsap.utils.toArray(".card-overview");
dementiaCard.forEach((card, i) => {
  card.addEventListener("mouseenter", (e) => {
    gsap.to(e.target, duration / 4, { y: -10, scale: 1.2 });
    gsap.to(e.target, { boxShadow: "0 0 20px rgba(0,0,0,0.06)" });
  });

  card.addEventListener("mouseleave", (e) => {
    gsap.to(e.target, duration / 2, { ease: Bounce.easeOut, y: 0, scale: 1 });
  });
});

// Gallery image dialogs
const galleryImages = document.querySelectorAll('.dialog-overview');
galleryImages.forEach((image, i) => {
  const button = image.nextElementSibling;
  button.addEventListener('click', () => {
    image.show();
  });
});

// Gallery animations
const galleryCard = gsap.utils.toArray(".card-basic");

galleryCard.forEach((card, i) => {
  card.addEventListener("mouseenter", (e) => {
    gsap.to(e.target, duration / 4, { y: -10, scale: 1.2 });
    gsap.to(e.target, { boxShadow: "0 0 20px rgba(0,0,0,0.06)" });
  });

  card.addEventListener("mouseleave", (e) => {
    gsap.to(e.target, duration / 2, { ease: Bounce.easeOut, y: 0, scale: 1 });
  });
});

// Pin each previously unpinned section to top of screen
// const scrollPin = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".pinSection",
//     start: "top top",
//     markers: true,
//     end: "+=500",
//     pin: true
//   }
// }) 

gsap.utils.toArray('.pinSection').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    markers: true,
    refreshPriority: 0,
    pin: true,
    end: "+=500",
  });
});
// With this enabled the DEMANTIA AMONG US section snapt to top of 
//screen from bottom third

// Skipping back up after completing animation of DEMENTUA AMONG US section
