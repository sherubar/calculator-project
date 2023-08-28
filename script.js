let num1 = 0
let num2 = 0
let operator = ""

function add(a, b) {
    console.log(a + b)
}

function subtract(a, b) {
    console.log(a - b)
}

function multiply(a, b) {
    console.log(a * b)
}

function divide(a, b) {
    console.log(a / b)
}

function operate(a, b, operator) {
    num1 = a
    num2 = b
    if (operator === "+") {
        add(num1, num2)
    }
    else if (operator === "-") {
        subtract(num1, num2)
    }
    else if (operator === "x") {
        multiply(num1, num2)
    }
    else if (operator === "/") {
        divide(num1, num2)
    }
}
