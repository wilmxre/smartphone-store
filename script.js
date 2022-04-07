const content = document.querySelector('.content');

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

const savedIndex = 0;

for (let i = 0; i < total; i++) {
  if (i == 10) {
    buttons.appendChild(prev);
    buttons.appendChild(next);
    footer.appendChild(buttons);
    savedIndex = i;
    break;
  }

  const item = document.createElement('div');
  item.classList.add('block-item');
  content.appendChild(item);

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

  content.appendChild(item);
}