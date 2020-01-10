const button = document.querySelectorAll(".calc__button");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const undo = document.querySelector(".undo");

let display = "";

loadEventListeners();

function loadEventListeners() {
	screen.addEventListener("click", getDisplay);
	clear.addEventListener("click", clearScreen);
	undo.addEventListener("click", undoInput);
	equal.addEventListener("click", getResult);
}

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
}

function getResult() {
	screen.textContent = eval(screen.textContent);
}

// Clear Screen
function clearScreen() {
	screen.textContent = "0";
	display = "";
}

// Undo

function undoInput() {
	display = new Array();
	// display += buttonValue;
	getDisplay();
	display = screen.textContent;
}
