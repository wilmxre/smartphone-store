
let jsonArr = [
  {
    "id": "0",
    "name": "Samsung",
    "price": 75.99,
    "img-src": "https://picsum.photos/seed/one/400/500"
  },
  {
    "id": "1",
    "name": "Huawei",
    "price": 109.99,
    "img-src": "https://picsum.photos/seed/two/400/500"
  },
  {
    "id": "2",
    "name": "Iphone",
    "price": 329.99,
    "img-src": "https://picsum.photos/seed/three/400/500"
  }
];

for (let i = 0; i < jsonArr.length; i++) {
  console.log(jsonArr[i]["id"])
  if (itemsArr[i].classList[1] === `item-${jsonArr[i]["id"]}`) {
    itemsArr[i].children[0].src = jsonArr[i]["img-src"];
    itemsArr[i].children[1].textContent = jsonArr[i]["name"];
    itemsArr[i].children[2].textContent = jsonArr[i]["price"];
  }
}