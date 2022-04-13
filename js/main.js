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
	}, 1000);

	setTimeout(function () {
		window.location.href = 'https://www.aiesec.in/registergv';
	}, 7500);
};

document.getElementById('card5-opt2').onclick = function () {
	setTimeout(function () {
		output3.style.visibility = 'visible';
	}, 1000);

	setTimeout(function () {
		window.location.href = 'https://www.aiesec.in/registergv';
	}, 7500);
};

document.getElementById('card5-opt3').onclick = function () {
	setTimeout(function () {
		output2.style.visibility = 'visible';
	}, 1000);

	setTimeout(function () {
		window.location.href = 'https://www.aiesec.in/registergv';
	}, 7500);
};

document.getElementById('card5-opt4').onclick = function () {
	setTimeout(function () {
		output1.style.visibility = 'visible';
	}, 1000);

	setTimeout(function () {
		window.location.href = 'https://www.aiesec.in/registergv';
	}, 7500);
};

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');

// for (let i = 0; i < 4; i++) {
// 	document.getElementById('card1-opt' + i).onclick = function () {
// 		console.log('Hello');
// 		button1.style.visibility = 'visible';
// 	};
// }

// For Card 1 Next Button
document.getElementById('card1-opt1').onclick = function () {
	button1.style.visibility = 'visible';
};

document.getElementById('card1-opt2').onclick = function () {
	button1.style.visibility = 'visible';
};

document.getElementById('card1-opt3').onclick = function () {
	button1.style.visibility = 'visible';
};

document.getElementById('card1-opt4').onclick = function () {
	button1.style.visibility = 'visible';
};

// For Card 2 Next Button
document.getElementById('card2-opt1').onclick = function () {
	button2.style.visibility = 'visible';
};

document.getElementById('card2-opt2').onclick = function () {
	button2.style.visibility = 'visible';
};

document.getElementById('card2-opt3').onclick = function () {
	button2.style.visibility = 'visible';
};

document.getElementById('card2-opt4').onclick = function () {
	button2.style.visibility = 'visible';
};

// For Card 3 Next Button
document.getElementById('card3-opt1').onclick = function () {
	button3.style.visibility = 'visible';
};

document.getElementById('card3-opt2').onclick = function () {
	button3.style.visibility = 'visible';
};

document.getElementById('card3-opt3').onclick = function () {
	button3.style.visibility = 'visible';
};

document.getElementById('card3-opt4').onclick = function () {
	button3.style.visibility = 'visible';
};

// For Card 4 Next Button
document.getElementById('card4-opt1').onclick = function () {
	button4.style.visibility = 'visible';
};

document.getElementById('card4-opt2').onclick = function () {
	button4.style.visibility = 'visible';
};

document.getElementById('card4-opt3').onclick = function () {
	button4.style.visibility = 'visible';
};

document.getElementById('card4-opt4').onclick = function () {
	button4.style.visibility = 'visible';
};
