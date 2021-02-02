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
        scrub: 1
    }
})
whatIsDementiaTl.to('#fact1', { autoAlpha: 1, opacity: 1, display: "flex" });
whatIsDementiaTl.to('#fact2', 5, { autoAlpha: 1, opacity: 1, display: "flex" });