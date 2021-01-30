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
const aggressionCard = document.querySelector('.aggressionCard');
aggressionCard.addEventListener('click', () => {
  console.log("aggression card clicked");
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