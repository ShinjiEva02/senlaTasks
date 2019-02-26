const number = document.getElementsByTagName('input')[0];
const buttonClick = document.querySelector('#clickButton');
const p = document.createElement('p');
let arr, shortWord;

buttonClick.addEventListener('click', function() {

  arr = number.value.split(' ');
  shortWord = arr[0].length;
  for (let i = 0; i < arr.length; i++) {

    if (shortWord > arr[i].length) {
      shortWord = arr[i].length;
    }
  }
  p.innerHTML = `The shortest length of the word: ${shortWord}`;
  document.body.appendChild(p);
});