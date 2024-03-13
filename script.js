// ".first" vine folosit pentru CSS, ".js-first" pentru js
// Se face asa separation of concern. Clasele care sunt cu prefixul "js" stii ca e nevoie de ele in javascript.

const firstNumber = document.querySelector(".js-first"); 
const secondNumber = document.querySelector(".js-second");
const tirthNumber = document.querySelector(".js-tirth");
const btnChange = document.querySelector(".js-btnChange");

const MAGIC_NUMBER = 255; // dai un nume la variabile care explica ce-i cu valoarea asta de 255

function getRandomNumber(){
	return Math.floor(Math.random() * MAGIC_NUMBER);
}

function changeBackground() {	

	let value1 = getRandomNumber();
	let value2 = getRandomNumber();
	let value3 = getRandomNumber();

	
	firstNumber.textContent = value1
	secondNumber.textContent = value2
	tirthNumber.textContent = value3
	
	document.body.style.backgroundColor =`rgb(${value1}, ${value2}, ${value3})`;
}

btnChange.addEventListener("click", changeBackground);
