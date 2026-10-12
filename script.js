var display = document.getElementById("display");

// Add number or operator
function add(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value = display.value + value;
    }
}

// Clear screen
function clearScreen() {
    display.value = "0";
}

// Delete last character
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

// Calculate answer
function calculate() {
    try {
        var expression = display.value;
        // Replace percentage with division by 100
        expression = expression.replace(/%/g, "/100");
        var answer = eval(expression);
        display.value = answer;
    } catch (error) {
        display.value = "Error";
    }
}
