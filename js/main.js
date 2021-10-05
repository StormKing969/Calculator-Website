var clickCounter = 0;
var display = [];
var memory = [];
var operator = [];


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
});

function updateScreen(screenInput) {
    document.querySelector("#app-output").innerHTML = screenInput;
}

function Calculator(userInput) {

    if (userInput != "+" & userInput != "-" &  userInput != "x" & userInput != "/") {
        display += [userInput];
        updateScreen(display);  
    }

    switch (userInput) {
        case "DEL":
            var temp = display.slice(0, display.length - 4);
            display = temp;
            updateScreen(display); 
            break

        case "RESET":
            display = [];
            updateScreen(display); 
            break

        case "+":
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(display); 
            operator = "+";

            // if(operator != null && operator != '') {
            //     var temp = display.slice(0, display.length - 1);
            //     display = [];
            //     var operationOutput = Operation(memory, operator, temp)
            //     updateScreen(operationOutput); 
            //     display = [operationOutput];
            // }
            break
        
        case "-":
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(display); 
            operator = "-";
            break

        case "x":
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(display); 
            operator = "x";
            break

        case "/":
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(display); 
            operator = "/";
            break

        case "=":
            var temp = display.slice(0, display.length - 1);
            display = [];
            var operationOutput = Operation(memory, operator, temp);
            updateScreen(operationOutput); 
            display = [operationOutput];
            operator = [];
    }
}

function Operation(firstValue, operatorType, secondValue) {
    if (operatorType == "+") {
        var answer = parseFloat(firstValue) + parseFloat(secondValue);
        return answer;
    }

    if (operatorType == "-") {
        var answer = parseFloat(firstValue) - parseFloat(secondValue);
        return answer;
    }

    if (operatorType == "x") {
        var answer = parseFloat(firstValue) * parseFloat(secondValue);
        return answer;
    }

    if (operatorType == "/") {
        var answer = parseFloat(firstValue) / parseFloat(secondValue);
        return answer;
    }
}