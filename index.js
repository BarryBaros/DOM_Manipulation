//DOM Manipulation
const title = document.querySelector('#main-heading');
title.style.color = 'beige';

const listItems = document.querySelectorAll('.list-items');
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '3rem';
}
// console.log(title)


//Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);
// Modifying the text
const firstListItem = document.querySelector("list-items");


console.log(firstListItem.innerText);


// // GetElementByID()
// const title = document.getElementById("main-heading");
// console.log(title);



// // GetElementByClassName
// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems)


// //  getElementByTagName;
// const listItem = document.getElementsByTagName("li");
// console.log(listItem);




// // querySelector()
// const container = document.querySelector('div');
// console.log(container);



// // querySelectorAll()
// const containerAll = document.querySelectorAll('div');
// console.log(containerAll);