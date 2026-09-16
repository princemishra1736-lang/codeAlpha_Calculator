let display = document.getElementById("display");
let expression = document.getElementById("expression");


// Add number or operator
function addNumber(value) {

    if (display.value == "0") {
        display.value = value;
    } else {
        display.value += value;
    }

    expression.innerText = "Calculating...";
}


// Clear calculator
function clearDisplay() {

    display.value = "0";
    expression.innerText = "Ready to calculate";
}


// Delete last number
function deleteNumber() {

    display.value = display.value.slice(0, -1);

    if (display.value == "") {
        display.value = "0";
    }
}


// Calculate result
function calculate() {

    try {

        let result = eval(display.value);

        expression.innerText = display.value + " =";

        display.value = result;

    } catch {

        display.value = "Error";
        expression.innerText = "Invalid calculation";
    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key == "+" ||
        key == "-" ||
        key == "*" ||
        key == "/" ||
        key == "." ||
        key == "%"
    ) {

        addNumber(key);
    }


    if (key == "Enter") {
        calculate();
    }


    if (key == "Backspace") {
        deleteNumber();
    }


    if (key == "Escape") {
        clearDisplay();
    }

});