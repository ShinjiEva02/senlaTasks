// Две функции потому что сомневался в условии, я сделал полноценную рамку и рамку, которая была показана в условии
function frameFirst(arr, sup) {
  let longString = '',
    a = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (a < arr[i].length) {
      a = arr[i].length
    }
  }
  longString = sup.repeat(a + 4);
  console.log(`${longString}\n${arr.map(items => `${sup} ${items} ${sup}`).join('\n')}\n${longString} `);
}

function frameSecond(arr, sup) {
  let longString = '',
    a = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (a < arr[i].length) {
      a = arr[i].length
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let space = a - arr[i].length;
    arr[i] = arr[i] + ' '.repeat(space)
  }
  longString = sup.repeat(a + 4);
  console.log(`${longString}\n${arr.map(items => `${sup} ${items} ${sup}`).join('\n')}\n${longString} `);
}

frameFirst(['Create', 'a', 'frame'], '+')
frameSecond(['Create', 'a', 'frame'], '+')