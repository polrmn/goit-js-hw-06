const inputRef = document.querySelector('[type=number]');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const boxRef = document.querySelector('#boxes');
let amount = 0;
let count = 0;
let newBoxesArr = [];
let boxesMarkup = [];
let size = 30;

inputRef.addEventListener('input', onInputNumber);

createBtnRef.addEventListener('click', createBoxes)

destroyBtnRef.addEventListener('click', removeBoxes);

function onInputNumber(event) {

  amount = Number(event.currentTarget.value);
  
}

function createBoxes() {
    
  for (let i = 0; i < amount; i += 1) {

    boxesMarkup.push(document.createElement('div'));

    size += 10;

    boxesMarkup[i + count].style.width = `${size}px`;
    boxesMarkup[i + count].style.height = `${size}px`;
    boxesMarkup[i + count].style.backgroundColor = getRandomHexColor();

  }

  boxRef.append(...boxesMarkup);
  count += amount;

}

function removeBoxes() {
  boxRef.innerHTML = '';
  boxesMarkup = [];
  count = 0;
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
