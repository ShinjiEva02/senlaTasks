function frame(arr, sup) {
  let space,
    longWord = arr[0].length;

  arr.forEach(item => longWord < item.length ? longWord = item.length : '');
  let arw = arr.map((items) => { space = longWord - items.length; return items += ' '.repeat(space)});
  console.log(`${sup.repeat(longWord + 4)}\n${arw.map(items => `${sup} ${items} ${sup}`).join('\n')}\n${sup.repeat(longWord + 4)} `);
}

frame(['Create', 'a', 'frame'], '+');