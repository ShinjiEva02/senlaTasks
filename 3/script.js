let number = document.getElementsByTagName('input')[0],
  buttonClick = document.querySelector('#clickButton'),
  arr = [],
  a = '',
  p = document.createElement('p');

buttonClick.addEventListener('click', function () {

  arr = number.value.split(' ');
  a = arr[0].length;
  for (let i = 0; i < arr.length; i++) {

    if (a > arr[i].length) {
      a = arr[i].length;
    }
  }
  p.innerHTML = `The shortest length of the word: ${a}`;
  document.body.appendChild(p);
});