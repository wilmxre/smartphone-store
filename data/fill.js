// randomize the sorted smartphones
let shuffle = (arr) => {
  for (let j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
}

shuffle(smartphones);

// add data to the blank items
let fillItems = () => {
  const rx1 = new RegExp('.+?(?=Android)');
  const rx2 = new RegExp('.+?(?=phone)')

  for (let i = 0; i < smartphones.length; i++) {
    itemsArr[i].setAttribute('id', `itm-${smartphones[i].id}`);
    itemsArr[i].children[0].src = smartphones[i].img;
    if (smartphones[i].description.match(rx1)) {
      itemsArr[i].children[1].textContent = smartphones[i].description.match(rx1);
    }
    else {
      itemsArr[i].children[1].textContent = smartphones[i].name;
    }
    itemsArr[i].children[2].textContent = smartphones[i].price;
  }
}

fillItems();