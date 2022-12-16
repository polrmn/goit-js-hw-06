// ------------------------1----------------------------

const itemsWithClass = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsWithClass.length}`);

// ------------------------2----------------------------

const listWithId = document.querySelector('#categories');
const titlesOfItems = listWithId.querySelectorAll('h2');
const subLists = listWithId.querySelectorAll('ul');

for (let i = 0; i < itemsWithClass.length; i += 1) {
    const numberOfSubItems = subLists[i].childElementCount;

    console.log('');
    console.log(`Category: ${titlesOfItems[i].innerText}`);
    console.log(`Elements: ${numberOfSubItems}`);
}




