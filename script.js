const beforeAfterWrapper = document.querySelector('.before-after-wrapper');
const afterImage = document.querySelector('.after-image');
const slider = document.querySelector('.slider');

let isSliding = false;

beforeAfterWrapper.addEventListener('mousedown', () => {
  isSliding = true;
});

window.addEventListener('mouseup', () => {
  isSliding = false;
});

window.addEventListener('mousemove', (event) => {
  if (!isSliding) return;

  let containerRect = beforeAfterWrapper.getBoundingClientRect();
  let offsetX = event.clientX - containerRect.left;
  let width = containerRect.width;

  if (offsetX < 0) offsetX = 0;
  if (offsetX > width) offsetX = width;

  // Ajustamos el clip-path para que la imagen de "After" se revele
  afterImage.style.clipPath = `inset(0 ${width - offsetX}px 0 0)`;

  // Mover el slider con el mouse
  slider.style.left = `${offsetX - 15}px`;
});
