/* This adds a listener for when we press a key on our
keyboard and calls the function called "moveCarForward" */
document.addEventListener('keydown', moveCarForward);

// We start at 100 because in this case that's the bottom of the page
var positionY = 100;

function moveCarForward(event) {
  /* Every key on the keyboard as a numeric keycode,
  the one for the up arrow is 38 */
  const KEYCODE_UP = 38;

  /* Below is conditional to make sure that
  the key we pressed was the up arrow */
  if (event.keyCode === KEYCODE_UP) {
    // Get our car by looking for an element in our HTML with the ID "car"
    var car = document.getElementById("car");

    // Lower our position since we're starting at the bottom and moving up
    positionY = positionY - 1;

    /* Line below modifies the "top" CSS property on our car,
    we add a "%" because that's the unit we used in our CSS */
    car.style.top = positionY + "%";

    /* The very top of the page is a Y position of 0,
    so here we check if we have crossed the top of
    the page by looking for -1 */

    if (positionY === -1) {
      alert("We did it!!!"); // Popup saying we won!
    }
  }
}
