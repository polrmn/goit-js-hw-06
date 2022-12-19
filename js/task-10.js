const inputRef = document.querySelector('[type=number]');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxRef = document.querySelector('#boxes');
let amount = 0;
let boxesMarkup = [];

inputRef.addEventListener('input', onInputNumber);

createBtnRef.addEventListener('click', createBoxes)

destroyBtnRef.addEventListener('click', removeBoxes);

function onInputNumber(event) {

  amount = Number(event.currentTarget.value);
  
}

function createBoxes() {
  
  let size = 30;
  
  for (let i = 0; i < amount; i += 1) {

    boxesMarkup.push(document.createElement('div'));

    size += 10;

    boxesMarkup[i].style.width = `${size}px`;
    boxesMarkup[i].style.height = `${size}px`;
    boxesMarkup[i].style.backgroundColor = getRandomHexColor();

  }

  boxRef.append(...boxesMarkup);

}

function removeBoxes() {
  boxRef.innerHTML = '';
  boxesMarkup = [];
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
