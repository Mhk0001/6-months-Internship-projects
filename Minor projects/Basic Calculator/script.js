var isCalculated = false;

function display(value) {
    var result = document.getElementById("result");

    if (isCalculated) {
        result.value = value;   // start new calculation
        isCalculated = false;
    } else {
        result.value += value;  // continue typing
    }
}


function clearScreen() {
    document.getElementById("result").value = "";
    isCalculated = false;
}


function calculate() {
    var result = document.getElementById("result");

    try {
        var answer = eval(result.value);

        if (answer === Infinity || answer === -Infinity) {
            result.value = "Error";
        } else if (isNaN(answer)) {
            result.value = "Error";
        } else {
            result.value = answer;
        }

        isCalculated = true;
    } catch {
        result.value = "Error";
    }
}


function sqrt() {
    var result = document.getElementById("result");
    result.value = Math.sqrt(eval(result.value));
    isCalculated = true;
}

function backspace() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.slice(0, value.length - 1);
}
