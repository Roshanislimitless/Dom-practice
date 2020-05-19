// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//examine the document object 
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 'mydocument';
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[18]);
// console.log(document.images)

// var headerTitle = document.querySelector('#header-title');
// console.log(headerTitle);

// headerTitle.textContent = 'Hello shit';
// headerTitle.innerText = "Hello, no shit";
// headerTitle.innerHTML = '<h3> Hello new H3</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000'
 
// var mainHeader = document.querySelector('#main-header');
// mainHeader.style.borderTop = 'solid 10px red'

// var items = document.querySelector('.list-group-item:nth-child(4)');
// console.log(items);



// items.style.backgroundColor = 'red';

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// var newDiv = document.createElement('div');

// newDiv.className = "helloClass";
// newDiv.id = 'helloId ';


// // create text node 
// var newdivtext = document.createTextNode('add textnode');
// newDiv.appendChild(newdivtext);
//  console.log(newDiv);

//  var container = document.querySelector('header .container');
//  var h1 = document.querySelector('header h1');

//  container.insertBefore(newDiv, h1);

var input = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var output = document.querySelector('#output');
var select = document.querySelector('select');




form.addEventListener('submit', testFunc);

function testFunc(a){
    a.preventDefault();
    console.log(a.type);
    console.log(a.target.value);
    
    
    
    

}

