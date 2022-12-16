const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let elements = [];

for (let i = 0; i < ingredients.length; i +=1) {
  let el = document.createElement("li");
  el.textContent = ingredients[i];
  elements.push(el);
}

const list = document.querySelector('#ingredients');
list.append(...elements);