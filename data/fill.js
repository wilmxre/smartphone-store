let fillItems = () => {
  const rx1 = new RegExp('.+?(?=Android)');
  const rx2 = new RegExp('.+?(?=smartphone)')

  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].classList[1] === `item-${smartphones[i].id}`) {
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
}

fillItems();