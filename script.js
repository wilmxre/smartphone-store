const content = document.querySelector('.content');
const items = document.createElement('div');

const itemsContainer = document.createElement('div');
itemsContainer.classList.add('items');

const total = 15;
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
    item.classList.add(`item-${i}`);

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
