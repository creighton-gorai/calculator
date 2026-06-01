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

// Evaluate each button press
const buttonEval = function(button) {
    const screen = document.getElementById("screen");
    const operatorRegex = /[+\-x/=]/g; // Global regex for plus, minus, multiply, and divide
    const numberRegex = /^-?\d*(\.\d+)?$/; // Global regex for all digits, including negative and floating point

    switch (true) {
        case button == "AC":
            return screen.innerHTML = "0";
        case button == "C":
            if (screen.innerHTML.length == 1) {
                return screen.innerHTML = "0";
            } else {
                return screen.innerHTML = screen.innerHTML.slice(0, -1);
            }
        // Checks for duplicates or operator switches
        case operatorRegex.test(button): 
            return operatorEval(button);
        case numberRegex.test(button):
            if (screen.innerHTML == "0") {
                return screen.innerHTML = button;
            } else {
                return screen.innerHTML += button;
            }
    }
}

// Operator button evaluation function
const operatorEval = function(button) {
    const screen = document.getElementById("screen");
    const operatorRegex = /[+\-x/=]/g; // Global regex for plus, minus, multiply, and divide

    // Checks for duplicates
    if (screen.innerHTML.at(-1).includes(button)) {
        return;
    // Evaluates equals
    } else if (button == "=") {
        if (operatorRegex.test(screen.innerHTML)) {
            const operator = screen.innerHTML.match(operatorRegex)[0];
            const numArray = screen.innerHTML.split(operator).filter(x => x);

            if (numArray.length <= 1) {
                return;
            } else {
                return screen.innerHTML = operate(operator, numArray[0], numArray[1]);
            }
        } else {
            return;
        }
    // Evaluates all other operators
    } else if (operatorRegex.test(screen.innerHTML)) {
        const operator = screen.innerHTML.match(operatorRegex)[0];
        const numArray = screen.innerHTML.split(operator).filter(x => x);

        if (numArray.length <= 1) {
            return screen.innerHTML += button;
        } else {
            return screen.innerHTML = operate(operator, numArray[0], numArray[1]) + button;
        }
    } else {
        return screen.innerHTML += button;
    }
}