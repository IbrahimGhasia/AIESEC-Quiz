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
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');

let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');
let card4 = document.getElementById('card-4');
let card5 = document.getElementById('card-5');

let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let output3 = document.getElementById('output3');

btn1.addEventListener('click', () => {
	card1.style.visibility = 'hidden';
	card2.style.visibility = 'visible';
});

btn2.addEventListener('click', () => {
	card1.style.visibility = 'hidden';
	card2.style.visibility = 'hidden';
	card3.style.visibility = 'visible';
});

btn3.addEventListener('click', () => {
	card1.style.visibility = 'hidden';
	card2.style.visibility = 'hidden';
	card3.style.visibility = 'hidden';
	card4.style.visibility = 'visible';
});

btn4.addEventListener('click', () => {
	card1.style.visibility = 'hidden';
	card2.style.visibility = 'hidden';
	card3.style.visibility = 'hidden';
	card4.style.visibility = 'hidden';
	card5.style.visibility = 'visible';
});

// btn5.addEventListener('click', () => {
// 	card1.style.visibility = 'hidden';
// 	card2.style.visibility = 'hidden';
// 	card3.style.visibility = 'hidden';
// 	card4.style.visibility = 'hidden';
// 	card5.style.visibility = 'hidden';
// 	output1.style.visibility = 'visible';
// });

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

document.getElementById('card5-opt1').onclick = function () {
	var selected = document.querySelector('input[type=radio][name=option]:checked');
	// let turkey = selected.value;
	// console.log(turkey);
	// delay(1).then((output1.style.visibility = 'visible'));
	// output1.style.visibility = 'visible';

	setTimeout(function () {
		output1.style.visibility = 'visible';
	}, 3000);
};

document.getElementById('card5-opt2').onclick = function () {
	setTimeout(function () {
		output2.style.visibility = 'visible';
	}, 3000);
};

document.getElementById('card5-opt3').onclick = function () {
	setTimeout(function () {
		output3.style.visibility = 'visible';
	}, 3000);
};

document.getElementById('card5-opt4').onclick = function () {
	setTimeout(function () {
		output1.style.visibility = 'visible';
	}, 3000);
};

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
