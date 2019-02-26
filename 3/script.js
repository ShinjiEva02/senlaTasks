const number = document.getElementsByTagName('input')[0];
const buttonClick = document.querySelector('#clickButton');
const p = document.createElement('p');
let arr, shortWord;

buttonClick.addEventListener('click', function () {
  arr = number.value.split(' ').filter(word => word.length != 0);
  shortWord = arr[0].length;
  arr.forEach(item => shortWord > item.length ?  shortWord = item.length: console.log(''));
  p.innerHTML = `The shortest length of the word: ${shortWord}`;
  document.body.appendChild(p);
});