let screen = document.getElementById("firstcontainer")
buttons = document.querySelectorAll(".items")
let screenValue = " "
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log("button text is", buttonText);

        if (buttonText == "X") {
            buttonText = "*"
            screenValue += buttonText;
            screen.value = screenValue
        }
        
        else if (buttonText == "C") {
            screenValue = ""
            screen.value = screenValue
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue)
        }
        else if (buttonText == "SIN") {
            screen.value = Math.sin(screenValue/57.324840764331210191082802547771)
        }
        else if (buttonText == "COS") {
            screen.value = Math.cos(screenValue/57.324840764331210191082802547771)
            
        }
        else if (buttonText == "TAN") {
            screen.value = Math.tan(screenValue/57.324840764331210191082802547771)
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue
        }
    })
}