const content = document.querySelector('.content');
const items = document.createElement('div');

const itemsContainer = document.createElement('div');
itemsContainer.classList.add('items');

const total = 35;
const titleText = 'Product #';
const buttonText = 'Add to cart';

const prev = document.createElement('button');
prev.classList.add('btn-prev');
prev.textContent = '<< Previous Page';
const next = document.createElement('button');
next.classList.add('btn-next');
next.textContent = 'Next Page >>';

const buttons = document.createElement('div');
buttons.classList.add('buttons');

const footer = document.querySelector('.footer');
footer.classList.add('footer');

let createItems = (total) => {
  for (let i = 0; i < total; i++) {
    const item = document.createElement('div');
    item.classList.add('block-item');

    const img = document.createElement('div');
    img.classList.add('item-img');
    item.appendChild(img);

    const title = document.createElement('p');
    title.classList.add('item-title');
    title.textContent = titleText + (i + 1);
    item.appendChild(title);

    const btn = document.createElement('button');
    btn.classList.add('item-btn');
    btn.textContent = buttonText;
    item.appendChild(btn);

    items.appendChild(item);

  }
  return items;
}

itemsArr = Array.from(createItems(total).children);

let savedIndex = 0;

let printItems = (start, end) => {
  if (end > total || end < 0 || start < 0 || start > total || end == total || start > end) {
    return itemsContainer;
  }
  let i = start;

  while (i < total) {
    if (i == end) return itemsContainer;
    itemsContainer.appendChild(itemsArr[i])
    savedIndex = i++;
  }

  return itemsContainer;
}

const itemsPerPage = 4;

content.appendChild(printItems(0, itemsPerPage + 1));

console.log(savedIndex);

if (savedIndex >= itemsPerPage) {
  buttons.appendChild(prev);
  buttons.appendChild(next);
  footer.appendChild(buttons);
}

