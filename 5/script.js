function getLowerestIndex(arr, sup) {
  let arw = arr.sort();

  if (arw[0] > sup) return 0
  else if (arw[arw.length - 1] < sup) return arw.length
  else if (arw.indexOf(sup) || sup == arw[0]) return 'This element already exists in array'
  else {
    for (let i = 0; i < arw.length; i++) {
      if (sup > arw[i] && sup < arw[i + 1]) {
        return i + 1;
      }
    }
  }
}

console.log(getLowerestIndex([2, 3, 5, 4], 2));