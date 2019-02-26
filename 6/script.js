function frame(arr, sup) {
  let space,
    longWord = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (longWord < arr[i].length) {
      longWord = arr[i].length;
    }
  }
  let arw = arr.map((items) => {
    space = longWord - items.length;
    return items += ' '.repeat(space)
  });
  console.log(`${sup.repeat(longWord + 4)}\n${arw.map(items => `${sup} ${items} ${sup}`).join('\n')}\n${sup.repeat(longWord + 4)} `);
}

frame(['Create', 'a', 'frame'], '+');