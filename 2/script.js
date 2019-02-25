let number = document.getElementsByTagName('input')[0],
  buttonClick = document.querySelector('#clickButton'),
  wrap = document.querySelector('.wrap');

function getRandomColor() {

  let letters = '0123456789ABCDEF'.split(''),
    color = '#';

  for (let i = 0; i < 6; i++) {

    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

buttonClick.addEventListener('click', function () {

  if (number.value < 31 && number.value > -1) {

    for (let i = 0; i < +number.value; i++) {

      for (let j = 0; j < +number.value; j++) {

        let lilDiv = document.createElement('div');
        lilDiv.classList.add('wraperblock');
        lilDiv.style.backgroundColor = getRandomColor()
        wrap.appendChild(lilDiv);
      }
      let br = document.createElement('br');
      wrap.appendChild(br);
    }
  } else alert('Введите число от 0 до 30');
});