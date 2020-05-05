var body = document.querySelector('body');
body.style.background = 'lightBlue';
console.log(body);

var h1 = document.createElement('h1');
h1.innerText = "Do you wanna know whats gonna happen next with you??"
h1.style.color = 'green';
h1.style.fontSize = '60px';

var h2 = document.createElement('h2');
h2.innerText = 'Well, enter a random number between 1 to 10';

var form = document.createElement('form');
var input = document.createElement('input');
input.type = 'number';

var button = document.createElement('button');
button.style.margin = '10px'
button.innerText = "BUTTON";

var finalDisplayP = document.createElement('p');
finalDisplayP.style.fontSize = '50px';
finalDisplayP.style.color = 'orange';


form.appendChild(input);

body.appendChild(h1);
body.appendChild(h2);
body.appendChild(form);
body.appendChild(button);
body.appendChild(finalDisplayP);


var for1 = {
    number: 1,
    result: "As always you are gonna be the horse leading the race"
}
var for2 = {
    number: 2,
    result: "Donot expect the red apple, this time its gonna be pink...enjoy it!"
}
var for3 = {
    number: 3,
    result: "Oh boy......just keep waiting, not a good time for you"
}
var for4 = {
    number: 4,
    result: "Quit smoking ! you are the next one said, YAMARAAJ"
}
var for5 = {
    number: 5,
    result: "You are the next millionaire...congrats ! "
}
var for6 = {
    number: 6,
    result: "Oh no, you got the wrong number"
}
var for7 = {
    number: 7,
    result: "Just go to bed, you gonna wake up late"
}
var for8 = {
    number: 8,
    result: "Oie lucky, lucky oie"
}
var for9 = {
    number: 9,
    result: "You gonna get it, but not now.....keep doing good stuffs"
}
var for10 = {
    number: 10,
    result: "Just make a wish, you are the luckiest among all"
}
var array = [];
array.push(for1, for2, for3, for4, for5, for6, for7, for8, for9, for10);
array;

button.addEventListener('click', executer);

//..following code doesnot work..it just works for the last item of the array why ??......

// function executer(){
//     for (var i = 0; i < array.length; i++ ){
//         var arr = array[i];
//      if (parseInt(input.value) === arr.number && parseInt(input.value) <= 10) {
//          finalDisplayP.innerText = arr.result;


//      }
//       else {
//           finalDisplayP.innerText = "we dont have data beyond 10";
//       }


//     }


// }

//The following code works fine.................................................................

function executer() {
    if (parseInt(input.value) <= 10) {
        for (var i = 0; i < array.length; i++) {
            var arr = array[i];
            if (parseInt(input.value) === arr.number) {
                finalDisplayP.innerText = arr.result;
            }


        }


    } else {
        finalDisplayP.innerText = "We dont have data beyond 10";
    }
}



// }

//using filter and map................................................................

// function executer(){
//     array.filter( (any) => {
//         if (parseInt(input.value) === any.number && parseInt(input.value) <= 10){
//            return any;
//         }else finalDisplayP.innerText = "The input is greater then the limit"
//     }).map((any) => finalDisplayP.innerText = any.result)
// }