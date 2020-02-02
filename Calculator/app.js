const button = document.querySelectorAll(".calc__button");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const undo = document.querySelector(".undo");

let display = "";

button.forEach(button => {
	button.addEventListener("click", () => {
		//logic for button
		buttonValue = button.getAttribute("data-num");
		getDisplay();
	});
});


function getDisplay() {
	display += buttonValue;
	screen.textContent = display;

//todo: add screen character limit of 14
}

function getResult() {
	screen.textContent = eval(screen.textContent);
}

// Clear Screen
function clearScreen() {
	screen.textContent = "0";
	display = "";
}

/* Implements the delete button. */

function undoInput() {
	display = display.slice(0, -1);
	screen.textContent = display; 

	if (display.length < 1) {
		clearScreen(); 
	}

	
}


screen.addEventListener("click", getDisplay);
clear.addEventListener("click", clearScreen);
undo.addEventListener("click", undoInput);
equal.addEventListener("click", getResult);

// Footer date - Updated automatically

const date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;


