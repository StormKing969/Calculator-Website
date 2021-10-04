var clickCounter = 0;
var display = [];
var memory = [];


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
    console.log(userInput);

    if (userInput == "+" || userInput == "-" || userInput == "x" || userInput == "/") {
        display = [0];
        updateScreen(display);
    }
}