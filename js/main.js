// let arrayOfElements = document.getElementsByClassName('radio-btn');
// let lengthOfArray = arrayOfElements.length;

// for (var i = 0; i < lengthOfArray; i++) {
// 	arrayOfElements[i].style.display = '';
// }

// function changeService(id) {
// 	document.getElementById(id).style.display = 'initial';
// }

// const change = document.querySelectorAll('[data-carousel-button]');

// change.forEach((change) => {
// 	change.addEventListener('click', () => {

// 	});
// });

// const button = document.querySelector('card-1');
// button.addEventListener('click', () => {
// 	button.classList.add('card-2');
// 	button.classList.remove('card-1');
// });

let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');

// card2.style.transition = 'opacity 0.3s ease-in-out';

// window.onload = function () {
btn1.addEventListener('click', () => {
	console.log('Clicked');
	// card2.style.display = 'initial';
	// card1.style.display = 'none';
	card1.style.visibility = 'hidden';
	card2.style.visibility = 'visible';
});

btn2.addEventListener('click', () => {
	card1.style.visibility = 'hidden';
	card2.style.visibility = 'hidden';
	card3.style.visibility = 'visible';
});

// };

// let card1 = document.getElementById('card-1');
// let card2 = document.getElementById('card-2');
// let card3 = document.getElementById('card-3');
// let button1 = document.getElementById('btn-1');
// let button2 = document.getElementById('btn-2');

// button1.onclick = function () {
// 	card2.style.display = 'initial';
// };

// button2.onclick = function () {
// 	card3.style.display = 'initial';
// };
