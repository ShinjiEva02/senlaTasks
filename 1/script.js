const number = document.getElementsByTagName('input')[0];
const buttonClick = document.querySelector('#clickButton');
let stringSum = '';

buttonClick.addEventListener('click', () => {
  for (let i = 1; i < +number.value + 1; i++) {
    stringSum += `${i} sheep...`;
  }
  document.body.insertAdjacentHTML(
      'beforeend', `<span>${stringSum}</span> <br>`);
  stringSum = '';
});
