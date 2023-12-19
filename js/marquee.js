let marqueeSlider = document.querySelector('.marquee-slider');
let marqueeSlide = document.querySelector('.b-slider__ref');
let mainTicker = new Flickity('.marquee-slider', {
  accessibility: true,
  resize: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  percentPosition: true,
  setGallerySize: true });


// Set initial position to be 0
mainTicker.x = 0;

// Start the marquee animation
play();

// Main function that 'plays' the marquee.
function play() {
  // Set the decrement of position x
  mainTicker.x -= 1.5;

  // Settle position into the slider
  mainTicker.settle(mainTicker.x);

  // Set the requestId to the local variable
  requestId = window.requestAnimationFrame(play);
}

// Main function to cancel the animation.
function pause() {
  if (requestId) {
    // Cancel the animation
    window.cancelAnimationFrame(requestId);

    // Reset the requestId for the next animation.
    requestId = undefined;
  }
}

// Pause on hover/focus
marqueeSlider.addEventListener('mouseenter', () => pause());

// Unpause on mouse out / defocus
marqueeSlider.addEventListener('mouseleave', () => play());