const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', onBntClick);

document.body.style.backgroundColor = getRandomHexColor();
spanRef.textContent = document.body.style.backgroundColor;

function onBntClick() {

  document.body.style.backgroundColor = getRandomHexColor();

  spanRef.textContent = document.body.style.backgroundColor;

}

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}