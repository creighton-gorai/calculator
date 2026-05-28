const addition = function(numOne, numTwo) {
    return numOne + numTwo;
}

const subtraction = function(numOne, numTwo) {
    return numOne - numTwo;
}

const multiplication = function(numOne, numTwo) {
    return numOne * numTwo;
}

const division = function(numOne, numTwo) {
    return numOne / numTwo;
}

const operate = function(operator, numOne, numTwo) {
    switch (operator) {
        case "plus":
            addition(numOne, numTwo);
        case "minus":
            subtraction(numOne, numTwo);
        case "multiply":
            multiplication(numOne, numTwo);
        case "divide":
            division(numOne, numTwo);
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
                // If there was no previous operator input. If true do nothing
                if (!operatorRegex.test(screen.innerHTML[-1])) {
                    console.log("We did it!");
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