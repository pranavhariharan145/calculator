function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {

    return a / b

}


function operate(num1, num2, operation) {
    if (operation == "+") {
        return num1 + " + " + num2 + " = " + add(num1, num2)
    }

    if (operation == "-") {
        return num1 + " - " + num2 + " = " + subtract(num1, num2)
    }

    if (operation == "*") {
        return num1 + " * " + num2 + " = " + multiply(num1, num2)
    }

    if (operation == "/") {
        return num1 + " / " + num2 + " = " + divide(num1, num2)
    }

}
let result = operate(2, 0, "/")
console.log(result)
