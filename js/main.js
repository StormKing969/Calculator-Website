var clickCounter = 0

document.querySelector(".background_changer").addEventListener("change", function() {
    clickCounter += 1;
    // console.log(clickCounter);

    if (clickCounter == 1) {
        document.getElementById("slider").classList.toggle("move_1");

        // document.getElementById("container").classList.add("container_theme_2");
    }

    if (clickCounter == 2) {
        document.getElementById("slider").classList.toggle("move_2");
    }
    
    if (clickCounter == 3) {
        document.getElementById("slider").classList.remove("move_2");
        document.getElementById("slider").classList.remove("move_1");
        clickCounter = 0;
    }  
})

function Calculation(number1, operator, number2) {
    num1 = parseFloat(number1);
    num2 = parseFloat(number2);

    if (operator == "x") {
        var result = num1 * num2;
        return result;
    }
    if (operator == "/") {
        var result = num1 / num2;
        return result;
    }
    if (operator == "+") {
        var result = num1 + num2;
        return result;
    }
    if (operator == "-") {
        var result = num1 - num2;
        return result;
    }
}

