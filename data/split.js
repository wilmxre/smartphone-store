
let splitter = (arr) => {
  let splitArr = [];

  for (let x = 0; x < arr.length; x++) {
    splitArr.push(arr[x].description.split(','))
    console.log(x);
    for (let i = 0; i < splitArr.length; i++) {
      for (let j = 0; j < splitArr[i].length; j++) {
        console.log(splitArr[i][j]);
      }
      console.log(' ');
    }
    splitArr = [];
  }
}

splitter(apple);