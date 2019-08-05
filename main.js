const buttonParent = document.querySelector('#button-group');
const textField = document.querySelector('#content-here');

buttonParent.addEventListener('click', showText);

function showText(e){
  if (e.target.classList.contains('btn-large')) {
     textField.innerHTML = e.target.innerHTML;
   console.log(e.target.innerHTML) ;
  }
}