const addition = function(numOne, numTwo) {
    return Number(numOne) + Number(numTwo);
}

const subtraction = function(numOne, numTwo) {
    return Number(numOne) - Number(numTwo);
}

const multiplication = function(numOne, numTwo) {
    return Number(numOne) * Number(numTwo);
}

const division = function(numOne, numTwo) {
    return Number(numOne) / Number(numTwo);
}

const operate = function(operator, numOne, numTwo) {
    switch (operator) {
        case "+":
            return addition(numOne, numTwo);
        case "-":
            return subtraction(numOne, numTwo);
        case "x":
            return multiplication(numOne, numTwo);
        case "/":
            return division(numOne, numTwo);
    }
}

// Getting button clicks
const buttons = document.querySelectorAll('button');

// Button listener
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttonEval(btn.textContent);
    });
});

const buttonEval = function(button) {
    const screen = document.getElementById("screen");
    const operatorRegex = /[+\-x/=]/g; // Global regex for plus, minus, multiply, and divide
    const numberRegex = /^-?\d*(\.\d+)?$/; // Global regex for all digits, including negative and floating point

    let numOne = "0";
    let numTwo = "0";


    switch (true) {
        case button == "AC":
            return screen.innerHTML = "0";
        case button == "C":
            if (screen.innerHTML.length == 1) {
                return screen.innerHTML = "0";
            } else {
                return screen.innerHTML = screen.innerHTML.slice(0, -1);
            }
        // Check if it is an operator, then evaluate
        case operatorRegex.test(button):
            console.log("Operator called");
            break;
        case numberRegex.test(button):
            if (screen.innerHTML == "0") {
                screen.innerHTML = button;
            } else {
                return screen.innerHTML += button;
            }
    }
}