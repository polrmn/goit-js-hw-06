let counterValue = 0;
const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

const countSub = () => {
    counterValue -= 1;
    valueSpan.innerHTML = `${counterValue}`;
}

const countAdd = () => {
    counterValue += 1;
    valueSpan.innerHTML = `${counterValue}`;
}

decButton.addEventListener('click', countSub);
incButton.addEventListener('click', countAdd);
