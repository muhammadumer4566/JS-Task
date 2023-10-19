//  JS task  calculate two numbers


function calculate() {

    let num1 = +prompt("Enter the first number:");
    if (isNaN(num1)) {
        alert("Please enter a valid number.");
        return;
    }

    let operator = prompt("Enter an operator (+, -, *, /):");
    if (!["+", "-", "*", "/"].includes(operator)) {
        alert("Please enter a valid operator");
        return;
    }

    let num2 = +prompt("Enter the second number:");
    if (isNaN(num2)) {
        alert("Please enter a valid number.");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Please enter a valid operator");
            return;
    }
    document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
}
calculate();



