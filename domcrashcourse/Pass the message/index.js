let button = document.querySelector('button');
let  p = document.createElement('p');
let input = document.querySelector('#input');
let secondDiv = document.querySelector('#secondDiv')
button.addEventListener('click', toGetInput);
let array = [];

function toGetInput(e){
    e.preventDefault();
    if ( input.value.length > 0){
  array.push(input.value);
  p.innerText = "Last message delivered";
  secondDiv.appendChild(p);
  p.style.background = "white";
  input.value = ""
    }
    else{
        p.innerText = "Enter a value to pass";
        secondDiv.appendChild(p);
        p.style.background = "red";
    }
  

}
