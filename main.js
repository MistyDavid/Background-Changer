import "./style.css";

const firstNumber = document.querySelector(".js-first");
const secondNumber = document.querySelector(".js-second");
const tirthNumber = document.querySelector(".js-third");
const btnChange = document.querySelector(".js-btnChange");

const MAGIC_NUMBER = 255;

btnChange.addEventListener("click", changeBackground);

function getRandomNumber() {
	return Math.floor(Math.random() * MAGIC_NUMBER);
}

function changeBackground() {
	let value1 = getRandomNumber();
	let value2 = getRandomNumber();
	let value3 = getRandomNumber();

	firstNumber.textContent = value1;
	secondNumber.textContent = value2;
	tirthNumber.textContent = value3;

	document.body.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
}
