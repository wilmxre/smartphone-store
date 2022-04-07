const content = document.querySelector('.content');

const total = 32;

const titleText = 'Title Text';
let buttonText = 'Button Text';


for (let i = 0; i < total; i++) {
  const item = document.createElement('div');
  item.classList.add('block-item');
  content.appendChild(item);

  const img = document.createElement('div');
  img.classList.add('item-img');
  item.appendChild(img);

  const title = document.createElement('p');
  title.classList.add('item-title');
  title.textContent = titleText;
  item.appendChild(title);

  const btn = document.createElement('button');
  btn.classList.add('item-btn');
  btn.textContent = buttonText;
  item.appendChild(btn);


  content.appendChild(item);
}