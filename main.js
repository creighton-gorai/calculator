// Getting button clicks
const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent);
    });
});

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