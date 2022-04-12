// wilmxre - 2022 
const content = document.querySelector('.content');
const items = document.createElement('div');

const itemsContainer = document.createElement('div');
itemsContainer.classList.add('items');

vw = window.innerWidth;
let itemsPerPage = 24;

const total = 555;
const titleText = 'Product #';
const buttonText = 'Add to cart';

const prev = document.createElement('button');
prev.classList.add('btn-prev');
prev.innerHTML = '&laquo; Previous Page';
const next = document.createElement('button');
next.classList.add('btn-next');
next.innerHTML = 'Next Page &raquo;';

const buttons = document.createElement('div');
buttons.classList.add('buttons');

const footer = document.querySelector('.footer');
footer.classList.add('footer');

let createItems = (total) => {
  for (let i = 0; i < total; i++) {
    const item = document.createElement('div');
    item.classList.add('block-item');
    // item.classList.add(`item-${i}`);

    const img = document.createElement('img');
    img.classList.add('item-img');
    item.appendChild(img);

    const title = document.createElement('p');
    title.classList.add('item-title');
    title.textContent = titleText + (i + 1);
    item.appendChild(title);

    const price = document.createElement('p');
    price.classList.add('item-price');
    price.textContent = 1000.99;
    item.appendChild(price);

    const btn = document.createElement('button');
    btn.classList.add('item-btn');
    btn.textContent = buttonText;
    item.appendChild(btn);

    items.appendChild(item);

  }
  return items;
}

itemsArr = Array.from(createItems(total).children);

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

  const topDiv = document.querySelector('.top');
  topDiv.style.visibility = 'visible';
  topDiv.addEventListener('click', goToTop);
  content.appendChild(itemsContainer);
  buttons.appendChild(prev)
  buttons.appendChild(ul);
  buttons.appendChild(next);
  content.appendChild(buttons);
}

let goToTop = () => window.scrollTo(0, 0);

// go to previous page if not on first page
let prevPage = () => {
  if (currentPage > 1) {
    changePage(--currentPage);
    shiftPages(currentPage);
    goToTop();
  }
}

// go to next page if not on last one
let nextPage = () => {
  if (currentPage < pages) {
    changePage(++currentPage);
    shiftPages(currentPage);
    goToTop();
  }
}
// insert specific page to the page container
let insertPage = (ul, index) => {
  ul.innerHTML += `<li id="${index}"onclick="goToPage(${index}, ul)">${index}</li>`
}

const ellipsis = document.createElement('div');
ellipsis.classList.add('ellipsis');
ellipsis.innerHTML = '&hellip;';

let shiftPages = (page) => {
  switch (pages) {
    case 2:
      ul.textContent = '';
      insertPage(ul, 1);
      ul.appendChild(ellipsis);
      insertPage(ul, 2);
      break;
    case 3:
      ul.textContent = '';
      insertPage(ul, 1);
      ul.appendChild(ellipsis);
      insertPage(ul, 2);
      ul.appendChild(ellipsis);
      insertPage(ul, 3);
      break;
    case 4:
      ul.textContent = '';
      insertPage(ul, 1);
      ul.appendChild(ellipsis);
      insertPage(ul, 2);
      insertPage(ul, 3);
      ul.appendChild(ellipsis);
      insertPage(ul, 4);
      break;
    default:
      switch (page) {
        case 1:
          ul.textContent = '';
          insertPage(ul, 1);
          ul.appendChild(ellipsis);
          insertPage(ul, 2);
          ul.appendChild(ellipsis);
          insertPage(ul, pages)
          break;
        case 2:
          ul.textContent = '';
          insertPage(ul, 1);
          ul.appendChild(ellipsis);
          insertPage(ul, 2);
          insertPage(ul, 3);
          ul.appendChild(ellipsis);
          insertPage(ul, pages);
          break
        case 3:
          ul.textContent = '';
          insertPage(ul, 1);
          ul.appendChild(ellipsis);
          insertPage(ul, 2);
          insertPage(ul, 3);
          insertPage(ul, 4);
          ul.appendChild(ellipsis);
          insertPage(ul, pages);
          break;
        case 4:
          ul.textContent = '';
          insertPage(ul, 1);
          ul.appendChild(ellipsis);
          insertPage(ul, 3);
          insertPage(ul, 4);
          if (pages != 5) {
            insertPage(ul, 5);
          }
          ul.appendChild(ellipsis);
          insertPage(ul, pages);
          break;
        case pages:
          ul.textContent = '';
          insertPage(ul, 1);
          ul.appendChild(ellipsis);
          insertPage(ul, pages - 1);
          ul.appendChild(ellipsis);
          insertPage(ul, pages);
          break;
        default:
          ul.textContent = '';
          insertPage(ul, 1);
          ul.appendChild(ellipsis);
          insertPage(ul, page - 1);
          insertPage(ul, page);
          if (pages != page + 1) {
            insertPage(ul, page + 1);
          }
          ul.appendChild(ellipsis);
          insertPage(ul, pages);
      }
  }
}

// go to selected page
let goToPage = (page, ul) => {
  currentPage = page;
  changePage(page);
  shiftPages(page);
}

// add new pages
const ul = document.createElement('ul');
let addPages = () => {
  ul.setAttribute('id', 'pgs');

  if (pages == 2) {
    insertPage(ul, 1);
    ul.appendChild(ellipsis);
    insertPage(ul, 2);
  }

  else if (pages == 3) {
    insertPage(ul, 1);
    ul.appendChild(ellipsis);
    insertPage(ul, 2);
    ul.appendChild(ellipsis);
    insertPage(ul, 3);
  }

  else if (pages == 4) {
    insertPage(ul, 1);
    ul.appendChild(ellipsis);
    insertPage(ul, 2);
    insertPage(ul, 3);
    ul.appendChild(ellipsis);
    insertPage(ul, 4);
  }

  else if (pages >= 5) {
    insertPage(ul, 1);
    ul.appendChild(ellipsis);
    insertPage(ul, 2);
    ul.appendChild(ellipsis);
    insertPage(ul, pages);
  }
}

window.onload = () => {
  addPages();
  changePage(1);

  prev.addEventListener('click', prevPage);
  next.addEventListener('click', nextPage);
}