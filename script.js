var firstNumber = document.querySelector(".first");
var secondNumber = document.querySelector(".second");
var tirthNumber = document.querySelector(".tirth");
var btnChange = document.querySelector(".btnChange");
var fisrtNumberValue, secondNumberValue, tirthNumberValue;
var bodyElement = document.body;

btnChange.addEventListener("click", changeBackground);

function changeBackground() {
	fisrtNumberValue = Math.floor(Math.random() * 255);
	console.log(fisrtNumberValue);
	firstNumber.textContent = fisrtNumberValue;
	secondNumberValue = Math.floor(Math.random() * 255);
	console.log(secondNumberValue);
	secondNumber.textContent = secondNumberValue;
	tirthNumberValue = Math.floor(Math.random() * 255);
	console.log(tirthNumberValue);
	tirthNumber.textContent = tirthNumberValue;
	bodyElement.style.backgroundColor ="rgb(" + fisrtNumberValue + ", " + secondNumberValue + ", " + tirthNumberValue + ")";
}
