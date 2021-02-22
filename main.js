/*jshint esversion: 6 */

// Back to top function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Carousel CSS animation
new Glide('.glide', {
    type: 'carousel',
    autoplay: 8000 | true,
    hoverPause: true,
    animationDuration: 2000
}).mount();

// Register GSAP components
gsap.registerPlugin(ScrollTrigger);

// GSAP animate WHAT IS DEMENTIA section
// Set up the behaviour of the "WHAT IS DEMENTIA" section
// animations and its parameters
const whatIsDementiaTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#trigger1",
        start: "top top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        end: "+=20000",
    }
});

// For each dementia fact slowly animate them into view as the user scrolls
// When the text reaches the scroll prompting arrow make it disappear so as to 
// not clash with the content
whatIsDementiaTl.to('#fact1', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact2', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact3', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact4', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact5', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('.downArrow', 300, { autoAlpha: 1, opacity: 0, display: "none" });
whatIsDementiaTl.to('#fact6', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact7', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

// On completion of the first slide presentation hide the container and ready for the
// next presentation
whatIsDementiaTl.to(".dementiaFact", 50, { opacity: 0, autoAlpha: 0 });
whatIsDementiaTl.to("#factsSlide1", 50, { opacity: 0, display: "none" });

// Prepare view for next slide presentation by making the content container and
// scroll prompting arrow appear
whatIsDementiaTl.to('#factsSlide2', 10, { autoAlpha: 1, opacity: 1, display: "block" });
whatIsDementiaTl.to('.downArrow', 300, { autoAlpha: 1, opacity: 1, display: "block" });

// Animate through the remainder of the slide presentation and when the content reaches
// the scrolling arrow, make it disappear so as to not obsutrct the content
whatIsDementiaTl.to('#fact8', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact9', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact10', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact11', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact12', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('.downArrow', 300, { autoAlpha: 1, opacity: 0, display: "none" });
whatIsDementiaTl.to('#fact13', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

// On completion of the slides make the slide content disappear for the next presentation
whatIsDementiaTl.to(".dementiaFact", 100, { opacity: 0, autoAlpha: 0 });
whatIsDementiaTl.to("#factsSlide2", 100, { opacity: 0, display: "none" });

// Animate the brain image into view and illustrate the four main dementia types 
// overlayed over the brain image
whatIsDementiaTl.to("#brainContentSectionImageContainer", 100, { display: "block", opacity: 1, autoAlpha: 1 });
whatIsDementiaTl.to('#commonType1', 500, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#commonType2', 500, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#commonType3', 500, { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#commonType4', 500, { autoAlpha: 1, opacity: 1, display: "flex" });

// Declare and bind the common dementia type dialogs and their actions
const dementiaDialog = document.querySelector('.dialog-overview');
const openButton = dementiaDialog.nextElementSibling;
const closeButton = dementiaDialog.querySelector('sl-button');

openButton.addEventListener('click', () => dementiaDialog.show());
closeButton.addEventListener('click', () => dementiaDialog.hide());

// Dementia among us animation
// Set up the behaviour of the "DEMENTIA AMONG US" section
// animations and its parameters
const dementiaPrevelanceT1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#trigger3",
        start: "top top",
        scrub: 1,
        anticipatePin: 1,
        end: "+=15000",
        pin: true
    }
});

// Animate the content sections into view and for each dementia prevelance slowly 
// animate them into view as the user scrolls. 
dementiaPrevelanceT1.to('.downArrow', 300, { autoAlpha: 1, opacity: 1, display: "block" });
dementiaPrevelanceT1.to('.prevelanceContainers', 10, { autoAlpha: 1, opacity: 1, display: "block" });
dementiaPrevelanceT1.to('#prevelance1', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#prevelance2', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#prevelance3', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

// On completion of the prevelance display hide the content area and prepare for the symptoms of 
// dementia display by making their container become visible
dementiaPrevelanceT1.to(".prevelanceContainer", 50, { opacity: 0, autoAlpha: 0, display: "none" });
dementiaPrevelanceT1.to('.symptomsContainer', 10, { autoAlpha: 1, opacity: 1, display: "block" });

// Animate through the common dementia sympmtoms and when the text reaches the scroll primpting
// arrow make the arrow disappear so as to not impede the presentation
dementiaPrevelanceT1.to('#symptomsHeading', 300, { autoAlpha: 1, opacity: 1, display: "block" });
dementiaPrevelanceT1.to('#symptom1', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom2', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom3', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom4', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom5', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom6', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('.downArrow', 300, { autoAlpha: 1, opacity: 0, display: "none" });
dementiaPrevelanceT1.to('#symptom7', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom8', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom9', 300, { autoAlpha: 1, opacity: 1, display: "flex" });
dementiaPrevelanceT1.to('#symptom10', 300, { autoAlpha: 1, opacity: 1, display: "flex" });

// Set animation duration (sec)
const duration = 1;

// 4 common dementia types animations
// Dynamically add event listeners to the common dementia type cards
// to allow them to detect mouseenter and mouseleave events and animate them
const dementiaCard = gsap.utils.toArray(".card-overview");
dementiaCard.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
        gsap.to(e.target, duration / 4, { y: -10, scale: 1.2 });
        gsap.to(e.target, { boxShadow: "0 0 20px rgba(0,0,0,0.06)" });
    });

    card.addEventListener("mouseleave", (e) => {
        gsap.to(e.target, duration / 2, { ease: Bounce.easeOut, y: 0, scale: 1 });
    });
});

// Gallery image dialogs
// Dynamically add event listeners to the gallery image cards
// to allow them to detect the click event to trigger the display of
// its respective image content
const galleryImages = document.querySelectorAll('.dialog-overview');
galleryImages.forEach((image) => {
    const button = image.nextElementSibling;
    button.addEventListener('click', () => {
        image.show();
    });
});

// Gallery animations
// Dynamically add event listeners to the gallery image cards
// to allow them to detect mouseenter and mouseleave events and animate them
const galleryCard = gsap.utils.toArray(".card-basic");
galleryCard.forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
        gsap.to(e.target, duration / 4, { y: -10, scale: 1.2 });
        gsap.to(e.target, { boxShadow: "0 0 20px rgba(0,0,0,0.06)" });
    });

    card.addEventListener("mouseleave", (e) => {
        gsap.to(e.target, duration / 2, { ease: Bounce.easeOut, y: 0, scale: 1 });
    });
});

// Content section pinning
// Set up the pinning of each respective content section so that
// it does not overshoot when scrolling up, rather rests at the top of the page
// for a short amount of scroll time
gsap.utils.toArray('.pinSection').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        refreshPriority: 0,
        pin: true,
        end: "+=500",
    });
});

// SVG arrow animation
// Animate the SVG scrolling prompt arrow for user's viewing pleasure
gsap.to(".downArrow", 0.5, { y: 10, repeat: -1, yoyo: true });