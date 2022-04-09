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

let itemsPerPage = 3;
let currentPage = 1;

// how many pages are needed
let numPages = (itemsArray) => {
  return Math.ceil(itemsArray.length / itemsPerPage);
}

let pages = numPages(itemsArr);

// page is in the right interval
let changePage = (page) => {
  if (page < 1) {
    page = 1;
  }
  if (page > pages) {
    page = pages;
  }

  itemsContainer.textContent = '';

  // for every item in the current page's interval
  for (let i = (page - 1) * itemsPerPage; i < (page * itemsPerPage); i++) {
    if (i < itemsArr.length) {
      itemsContainer.appendChild(itemsArr[i]);
    }
  }

  content.appendChild(itemsContainer);
}
