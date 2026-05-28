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

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const screen = document.getElementById("screen");
        const operatorRegex = /[+\-*/]/g;
        if (screen.innerHTML == 0) {
            if (!operatorRegex.test(btn.textContent)) {
                screen.innerHTML = btn.textContent;
            }
        } else if (btn.textContent == "AC") {
            screen.innerHTML = 0;
        } else {
            screen.innerHTML += btn.textContent;
        }
    });
});