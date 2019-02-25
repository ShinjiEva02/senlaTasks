function getDimensionalArray(arr, sup) {
  let ard = [];
  for (let i = 0; i < Math.ceil(arr.length/sup); i++){
    ard[i] = arr.slice((i*sup), (i*sup) + sup);
  }
  return ard;
}
console.log(getDimensionalArray([0, 1, 2, 3, 4, 5], 3));