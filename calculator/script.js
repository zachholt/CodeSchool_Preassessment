function clearValues() {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
    document.getElementById("operator").value = "";
}

function insertNumber(number) {
    storedAnswer = parseInt(document.getElementById("storedResult").textContent.replace('Stored Result: ', ''));

    switch (number) {
        case 1:
            document.getElementById("operand1").value = storedAnswer;
            break;
        case 2:
            document.getElementById("operand2").value = storedAnswer;
            break;
    }
}


function calculate(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page
    operand1 = parseInt(document.getElementById("operand1").value);
    operand2 = parseInt(document.getElementById("operand2").value);
    operation = document.getElementById("operator").value;

    switch (operation) {
        case "add":
            answer = operand1 + operand2;
            break;
        case "subtract":
            answer = operand1 - operand2;
            break;
        case "multiply":
            answer = operand1 * operand2;
            break;
        case "divide":
            answer = operand1 / operand2;
            break;
    }
    document.getElementById("result").textContent = "Result: " + answer;
}

function storeResult() {
    calculate.answer = answer;

    document.getElementById("storedResult").textContent = "Stored Result: " + calculate.answer;
}