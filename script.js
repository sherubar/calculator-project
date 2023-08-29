const displayScreen = document.querySelector(".display-screen")
const numberBtns = document.querySelectorAll(".number")
const operatorBtns = document.querySelectorAll(".operator")
const equalBtn = document.querySelector(".equal")
const acBtn = document.querySelector(".ac-btn")
const cBtn = document.querySelector(".c-btn")
displayScreen.textContent = ""

function add(a, b) {
    displayScreen.textContent = Math.round((a + b) * 1000) / 1000
}

function subtract(a, b) {
    displayScreen.textContent = Math.round((a - b) * 1000) / 1000
}

function multiply(a, b) {
    displayScreen.textContent = Math.round((a * b) * 1000) / 1000
}

function divide(a, b) {
    displayScreen.textContent = Math.round((a / b) * 1000) / 1000
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
    else if (operator === "÷") {
        if (num2 === 0) {
            displayScreen.textContent = "ERROR!"
        }
        else {
        divide(num1, num2)
        }
    }
}

numberBtns.forEach(number => {
    number.addEventListener('click', () => {
        if (displayScreen.textContent === "ERROR!") {
            displayScreen.textContent = ""
            displayScreen.textContent += number.textContent
        }
        else {
        displayScreen.textContent += number.textContent
        }
    })
})

operatorBtns.forEach(operator => {
    operator.addEventListener('click', () => {
        let operatorVal = operator.textContent
        let scrn = displayScreen.textContent
        if (scrn.includes("+") || scrn.includes("-") || scrn.includes("x") || scrn.includes("÷")) {
            const [num1, operator, num2] = displayScreen.textContent.split(" ")
            val1 = Number(num1)
            val2 = Number(num2)
            result = operate(val1, val2, operator)
            if (displayScreen.textContent === "ERROR!") {
                displayScreen.textContent = "ERROR!"
            }
            else {
            displayScreen.textContent += ` ${operatorVal} `
            }
        }
        else {
            if (displayScreen.textContent === "ERROR!") {
                displayScreen.textContent = "ERROR!"
            }
            else {
            displayScreen.textContent += ` ${operatorVal} `
            }
        }
    })
})

equalBtn.addEventListener('click', () => {
    if (displayScreen.textContent === "") {
        displayScreen.textContent = ""
    }
    const [num1, operator, num2] = displayScreen.textContent.split(" ") 
    val1 = Number(num1)
    val2 = Number(num2)
    result = operate(val1, val2, operator)
})

cBtn.addEventListener('click', () => {
    if (displayScreen.textContent.slice(-1) === " ") {
        displayScreen.textContent = displayScreen.textContent.slice(0, -3)
    }
    else {
        displayScreen.textContent = displayScreen.textContent.slice(0, -1)
    }
})

acBtn.addEventListener('click', () => {
    if (displayScreen.textContent != "") {
        displayScreen.textContent = ""
        val1 = ""
    }
})
