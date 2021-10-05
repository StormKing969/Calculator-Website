var clickCounter = 0;
var display = [];
var memory = [];
var operator = [];

// Theme Changer

document.querySelector(".background_changer").addEventListener("change", function() {
    clickCounter += 1;
    // console.log(clickCounter);

    // Theme 1
    if (clickCounter == 1) {
        document.getElementById("slider").classList.toggle("move_1");

        document.getElementById("container").classList.add("container_v2");
        document.getElementById("slider").classList.add("slider_v2");
        document.getElementById("app-output").classList.add("app_output_v2");
        document.getElementById("theme-number").classList.add("theme_number_v2");
    }

    // Theme 2
    if (clickCounter == 2) {
        document.getElementById("slider").classList.toggle("move_2");

        document.getElementById("container").classList.add("container_v3");
        document.getElementById("slider").classList.add("slider_v3");
        document.getElementById("app-output").classList.add("app_output_v3");
        document.getElementById("theme-number").classList.add("theme_number_v3");
    }
    
    // Theme 3
    if (clickCounter == 3) {
        document.getElementById("slider").classList.remove("move_2");
        document.getElementById("slider").classList.remove("move_1");
        clickCounter = 0;

        document.getElementById("container").classList.remove("container_v2");
        document.getElementById("container").classList.remove("container_v3");

        document.getElementById("slider").classList.remove("slider_v2");
        document.getElementById("slider").classList.remove("slider_v3");

        document.getElementById("app-output").classList.remove("app_output_v2");
        document.getElementById("app-output").classList.remove("app_output_v3");

        document.getElementById("theme-number").classList.remove("theme_number_v2");
        document.getElementById("theme-number").classList.remove("theme_number_v3");
    }  
});

// Calculator Brain

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
            if (display.length == 3) {
                display = [];
                updateScreen(display);
                break
            }

            var temp = display.slice(0, display.length - 4);
            display = temp;
            updateScreen(display); 
            break

        case "RESET":
            display = [];
            memory = [];
            updateScreen(display); 
            break

        case "+":
            if (memory.length != 0) {
                console.log(operator);
                console.log("");
                var temp = display.slice(0, display.length - 0);
                var operationOutput = Operation(memory, operator, temp);
                updateScreen(operationOutput); 
                display = [operationOutput];
                operator = [];
            }

            operator = "+";
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(memory); 
            

            break
        
        case "-":
            if (memory.length != 0) {
                console.log(operator);
                console.log("");
                var temp = display.slice(0, display.length - 0);
                var operationOutput = Operation(memory, operator, temp);
                updateScreen(operationOutput); 
                display = [operationOutput];
                operator = [];
            }

            operator = "-";
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(memory); 
            
            break

        case "x":
            if (memory.length != 0) {
                console.log(operator);
                console.log("");
                var temp = display.slice(0, display.length - 0);
                var operationOutput = Operation(memory, operator, temp);
                updateScreen(operationOutput); 
                display = [operationOutput];
                operator = [];
            }

            operator = "x";
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(memory);  
            
            break

        case "/":
            if (memory.length != 0) {
                console.log(operator);
                console.log("");
                var temp = display.slice(0, display.length - 0);
                var operationOutput = Operation(memory, operator, temp);
                updateScreen(operationOutput); 
                display = [operationOutput];
                operator = [];
            }

            operator = "/";
            var temp = display.slice(0, display.length - 0);
            memory = temp;
            display = [];
            updateScreen(memory);  
            
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