// var form = document.querySelector('#addForm')
// var itemList = document.querySelector('#items')
// var filter = document.querySelector('#filter')


// form.addEventListener('submit', addItem);
// itemList.addEventListener('click', removeItem);
// filter.addEventListener('keyup', filteritems);

// function addItem(event){
//     event.preventDefault();
//       var InputValue = document.querySelector('#item').value;

//     var newList = document.createElement('newList');
//     newList.className = "list-group-item";

  
//     newList.appendChild(document.createTextNode(InputValue));
//     itemList.appendChild(newList);

//     var deleteButton = document.createElement('button');
//     deleteButton.className = "btn btn-danger btn-sm float-right delete";
//     deleteButton.appendChild(document.createTextNode('X'))
//     newList.appendChild(deleteButton);
    
// }

// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure ??')){
//             var li = e.target.parentElement;
//             itemList.removeChild(li);
//          }
        
//     }
    
// }

// function filteritems(e){
//     var text = e.target.value.toLowerCase();
//     var items =  itemList.getElementsByTagName('li');
//     Array.from(items).forEach((item)=>{
//         var itemName = item.firstChild.textContent; 
//         if(itemName.toLowerCase().includes(text)){
//             item.style.display = 'block';
//         }else{
//             item.style.display = 'none';
//         }
        
//     }) 
 


// }

var inputItem = document.querySelector('#item');
var form = document.querySelector('#addForm');
var ulItem = document.querySelector('#items');
var findItem = document.querySelector('#filterBtn');
var findItemInput = document.querySelector('#filter');
 let arrayList = document.querySelectorAll('li');


form.addEventListener('submit', addFunc);
ulItem.addEventListener('click', toDelete);
findItem.addEventListener('click', toFind);

//............................one 1.....................................................
function addFunc(a){
  a.preventDefault();
  var newElement = document.createElement('li');
  newElement.className = "list-group-item";
  newElement.appendChild(document.createTextNode(inputItem.value));
  ulItem.appendChild(newElement);

  var deleteButton = document.createElement('button');
  deleteButton.appendChild(document.createTextNode('x'));
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  newElement.appendChild(deleteButton);
  }
//.........................two 2..........................................................
function toDelete(a){
    if( a.target.classList.contains('delete')){
        if(confirm('are you sure ??')){
        var itemToDelete = a.target.parentElement;
        ulItem.removeChild(itemToDelete)
        }
    }
}
//............................three 3......................................................
function toFind(a) {
    let entryText = a.target.value.toLowerCase();
    let listArray = document.querySelectorAll('li');
    listArray.forEach(any => {
        if (any.firstElementChild.textContent.toLowerCase().includes(entryText)) {
            any.style.display = 'block';

        } else {
            any.style.display = 'none';
        }

    });
    console.log(listArray);

}

    

    
    





