function getLowerestIndex(arr, sup) {
  let arw = arr.sort();

  for (let i = 0; i < arw.length; i++) {

    if (sup > arw[i] && sup < arw[i + 1]) {
      return i + 1;
    }
  }
}
console.log(getLowerestIndex([2, 3, 1, 4], 1.5));