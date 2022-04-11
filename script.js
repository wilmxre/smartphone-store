const content = document.querySelector('.content');
const items = document.createElement('div');

const itemsContainer = document.createElement('div');
itemsContainer.classList.add('items');

const total = 120;
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


// go to previous page if not on first page
let prevPage = () => {
  if (currentPage > 1) {
    changePage(--currentPage);
  }
}

// go to next page if not on last one
let nextPage = () => {
  if (currentPage < pages) {
    changePage(++currentPage);
  }
}

// insert specific page to the page container
let insertPage = (ul, index) => {
  ul.innerHTML += `<li id="${index}"onclick="goToPage(${index}, ul)">${index}</li>`
}

// go to selected page
let goToPage = (page, ul) => {
  currentPage = page;
  changePage(page);
}

// add new pages
const ul = document.createElement('ul');
let addPages = () => {
  ul.setAttribute('id', 'pgs');

  if (pages == 2) {
    insertPage(ul, 1);
    insertPage(ul, 2);
  }

  if (pages == 3) {
    insertPage(ul, 1);
    insertPage(ul, 2);
    insertPage(ul, 3);
  }

  if (pages == 4) {
    insertPage(ul, 1);
    insertPage(ul, 2);
    insertPage(ul, 3);
    insertPage(ul, 4);
  }

  if (pages >= 5) {
    insertPage(ul, 1);
    insertPage(ul, 2);
    insertPage(ul, pages - 1);
    insertPage(ul, pages);
  }

  buttons.appendChild(ul);
  content.appendChild(buttons);

  if (pages != 1) {
    buttons.appendChild(next);
  }
}

window.onload = () => {
  addPages();
  changePage(1);

  prev.addEventListener('click', prevPage);
  next.addEventListener('click', nextPage);
}