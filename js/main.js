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

var user_selection = document.querySelectorAll(".choice").length;

var temp = ""
var storeNum1 = ""
var storeNum2 = ""
var storeOperator = ""

for (var i = 0; i < user_selection; i++) {
    document.querySelectorAll(".choice")[i].addEventListener("click", function() {
        var number = this.innerHTML;
        
        if (number != "=") {
            if (number == "+") {
                storeOperator = "+";
                storeNum1 = temp;
                temp = "";
            }
            if (number == "-") {
                storeOperator = "-";
                storeNum1 = temp;
                temp = "";
            }
            if (number == "x") {
                storeOperator = "x";
                storeNum1 = temp;
                temp = "";
            }
            if (number == "/") {
                storeOperator = "/";
                storeNum1 = temp;
                temp = "";
            }
            else {
                temp = temp + number;
                document.getElementById("app-output").innerHTML = temp;
            }
        }
        storeNum2 = temp;
        document.getElementById("app-output").innerHTML = storeNum2;

        if (storeOperator != "") {

            var operationResult = Calculation(storeNum1, storeOperator, storeNum2);

            document.getElementById("app-output").innerHTML = operationResult;
        }
    })
}



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