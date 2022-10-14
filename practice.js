//Get Element By ID//
// let headerTitle=document.getElementById('header-title');
// let header=document.getElementById('main-header');
// console.log(headerTitle)
// headerTitle.textContent='Hello'
// headerTitle.innerText='GoodBy'
// headerTitle.innerHTML="<h1>Hello Boys</h1>"

// header.style.borderBottom='solid 3px red'


// // Get Element By ClassName//
// let items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[0])
// items[1].innerText="hello"
// items[1].style.fontWeight='bold'
// items[1].style.backgroundColor='yellow'

// //Gives Error
// // items.style.backgroundColor='#f4f4f4';

// for(let i=0; i< items.length;i++){
//     items[i].style.backgroundColor='#00008B';
// }

// Get Element By TagName//
// let li=document.getElementsByTagName('li')
// console.log(li)
// console.log(li[0])
// li[1].innerText="hello"
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='yellow'

// //Gives Error
// // items.style.backgroundColor='#f4f4f4';

// for(let i=0; i< li.length;i++){
//     li[i].style.backgroundColor='#00008B';
// }


// Get Element By querySelector //
// let header=document.querySelector('#main-header')
// header.style.borderBottom= 'solid 3px red'

// let input=document.querySelector('input');
// input.value="Hello World"

// let submit=document.querySelector('input[type="submit"]')
// submit.value="SEND"

// //Select only first items
// let li=document.querySelector('.list-group-item')
// li.style.color='red'

// let lastItem =document.querySelector('.list-group-item:last-child')
// lastItem.style.color='blue'

// let selectItems =document.querySelector('.list-group-item:nth-child(2)')
// selectItems.style.color='coral'


// Get Element By querySelectorAll //
// let titles=document.querySelectorAll('.title')
// console.log(titles);
// titles[0].textContent='Hello'

// let odd=document.querySelectorAll('.li:nth-child(odd)')
// let even=document.querySelectorAll('.li:nth-child(even)')

// for(let i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor ='#f4f4f4';
//     even[i].style.backgroundColor ='#ccc';
// }



//Traversing Dom//
let itemList=document.querySelector('#items')

//parentNode
// console.log(itemList.parentNode)
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)// RETURN NULL

//parentelement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentElement.parentElement)
// console.log(itemList.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='red'

// //first Element Child
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello'

// //last Element Child
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='Hello4'


// create a Elemement 

//create div
// let newDiv=document.createElement('div');

// //Add Class
// newDiv.className='hello';

// //add id
// newDiv.id='hola';

// //add attr

// newDiv.setAttribute('title', 'Hello Div')

// //create text node
// let newDivText=document.createTextNode('Hello World')

// //add text to div
// newDiv.appendChild(newDivText)

// let container=document.querySelector('header .container')
// let h1=document.querySelector('header h1')


// container.insertBefore(newDiv,h1)

// newDiv.style.fontSize='30px'
// newDiv.style.fontWeight='bold'

// console.log(newDiv)

// Event Listner//

// let button=document.querySelector('#button').addEventListener('click',buttonClick)

// function buttonClick(e) {

//     // console.log('Button Clicked')
//     // document.getElementById('header-title').textContent='Changed';
//     // document.getElementById('main').style.backgroundColor='#f4f4f4';

//     // console.log(e)
//     // console.log(e.traget)
//     // console.log(e.type)

//     // let output=document.getElementById('output')
//     // output.innerHTML='<h3>Hello Button</h3>'
    
// }
