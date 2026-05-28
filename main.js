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

// Each time the button is pressed check what was pressed and evaluate
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const screen = document.getElementById("screen");
        const operatorRegex = /[+\-x/=]/g; // Currently only checking for plus, minus, multiply, divide

        // If AC was clicked clear the screen
        if (btn.textContent == "AC") {
            screen.innerHTML = "0";

        // Check button input
        } else {
            // If button was an operator
            if (operatorRegex.test(btn.textContent)) {
                // If there is an operator in the equation
                if (operatorRegex.test(screen.innerHTML)) {
                    const operator = screen.innerHTML.match(operatorRegex);
                    const numArray = screen.innerHTML.split(operator);
                    screen.innerHTML = operate(operator[0], numArray[0], numArray[1]) + btn.textContent;
                // Check if previous button press was an operator
                } else if (!operatorRegex.test(screen.innerHTML.at(-1))) {
                    screen.innerHTML += btn.textContent;
                }
            } else {
                // If button was a number
                // Replace zero with the number
                if (screen.innerHTML == "0") {
                    screen.innerHTML = btn.textContent;
                // Else add it to the previous numbers
                } else {
                    screen.innerHTML += btn.textContent;
                }
            }
        }
    });
});