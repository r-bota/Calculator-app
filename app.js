var buttons = document.querySelectorAll("div.num");
var displayNumber = document.getElementById("numberOnDisplay");
var resetButton = document.getElementById("reset");

var addition = document.getElementById("addition")
var subtraction = document.getElementById("subtraction")
var equals = document.getElementById("equals")
var multiply = document.getElementById("multiply")
var divide = document.getElementById("divide")
var period = document.getElementById("period")
var del = document.getElementById("del")

var mathStored = 0;
var mathType;
var ans = 0;

var themeToggle = document.getElementById("themetoggle");
var allButtons = document.querySelectorAll("div.button");
var topw = document.getElementById("topw")
var darea = document.getElementById("darea")
var calcbg = document.getElementById("calc")
var keyss = document.getElementById("keyss")

themeToggle.addEventListener("click", () => {

    if (themeToggle.value === "2") {
        equals.style.backgroundColor = "hsl(25, 98%, 40%)";
        equals.style.boxShadow = "0px 4px hsl(25, 99%, 27%)";
        equals.style.color = "white"
        keyss.style.backgroundColor = "hsl(0, 5%, 81%)"
        resetButton.style.backgroundColor = " hsl(185, 42%, 37%)";
        resetButton.style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
        del.style.backgroundColor = " hsl(185, 42%, 37%)";
        del.style.boxShadow = "0px 4px hsl(185, 58%, 25%)";
        calcbg.style.backgroundColor = "hsl(0, 0%, 90%)";
        darea.style.color = "hsl(60, 10%, 19%)";
        darea.style.backgroundColor = "hsl(0, 0%, 93%)";
        topw.style.color = "hsl(60, 10%, 19%)";

        themeToggle.classList = "themetoggle2"

        for (let i = 0; allButtons.length > i; i++) {
            allButtons[i].style.backgroundColor = "hsl(45, 7%, 89%)"
            allButtons[i].style.boxShadow = "0px 4px hsl(35, 11%, 61%)";
            allButtons[i].style.color = "hsl(221, 14%, 31%)"
        }
    } else if (themeToggle.value === "3") {

        equals.style.backgroundColor = "hsl(176, 100%, 44%)";
        equals.style.boxShadow = "0px 4px hsl(177, 92%, 70%)";
        equals.style.color = "hsl(268, 71%, 12%)"
        keyss.style.backgroundColor = "hsl(268, 71%, 12%)"
        resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
        resetButton.style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
        del.style.backgroundColor = "hsl(281, 89%, 26%)";
        del.style.boxShadow = "0px 4px hsl(285, 91%, 52%)";
        calcbg.style.backgroundColor = "hsl(268, 75%, 9%)";
        darea.style.color = "hsl(52, 100%, 62%)";
        darea.style.backgroundColor = "hsl(268, 71%, 12%)";
        topw.style.color = "hsl(52, 100%, 62%)";

        themeToggle.classList = "themetoggle3"

        for (let i = 0; allButtons.length > i; i++) {
            allButtons[i].style.backgroundColor = "hsl(268, 47%, 21%)"
            allButtons[i].style.boxShadow = "0px 4px hsl(290, 70%, 36%)";
            allButtons[i].style.color = "hsl(52, 100%, 62%)"
        }
        
    } else if (themeToggle.value === "1") {

        equals.style.backgroundColor = "hsl(6, 63%, 50%)";
        equals.style.boxShadow = "0px 4px hsl(6, 70%, 34%)";
        equals.style.color = "white"
        keyss.style.backgroundColor = "hsl(223, 31%, 20%)"
        resetButton.style.backgroundColor = "hsl(225, 21%, 49%";
        resetButton.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
        del.style.backgroundColor = "hsl(225, 21%, 49%";
        del.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
        calcbg.style.backgroundColor = "hsl(222, 26%, 31%)";
        darea.style.color = "white";
        darea.style.backgroundColor = " hsl(224, 36%, 15%)";
        topw.style.color = "white";

        themeToggle.classList = "themetoggle"

        for (let i = 0; allButtons.length > i; i++) {
            allButtons[i].style.backgroundColor = "hsl(30, 25%, 89%)"
            allButtons[i].style.boxShadow = "0px 4px hsl(28, 16%, 65%)";
            allButtons[i].style.color = "hsl(221, 14%, 31%)"
        }
        
    } 
})



buttons.forEach(item => {
    item.addEventListener("click", () => {
        if (displayNumber.textContent === "0") {
            displayNumber.innerHTML = item.textContent
        }
        else {
            displayNumber.innerHTML += item.textContent
        }

    })
});

resetButton.addEventListener("click", () => {
    displayNumber.innerHTML = "0"
    mathStored = 0;
    mathType = "";
})

del.addEventListener("click", () => {
    displayNumber.innerHTML = displayNumber.innerText.slice(0, -1)
    if (displayNumber.innerText === "") {
        displayNumber.innerHTML = "0"
    }
})

addition.addEventListener("click", () => {
    mathType = "add"
    mathStored = parseFloat(displayNumber.innerText, 10);
    displayNumber.innerHTML = "0"
})

subtraction.addEventListener("click", () => {
    mathType = "subtract"
    mathStored = parseFloat(displayNumber.innerText, 10);
    displayNumber.innerHTML = "0"
})

multiply.addEventListener("click", () => {
    mathType = "multiply"
    mathStored = parseFloat(displayNumber.innerText, 10);
    displayNumber.innerHTML = "0"
})

divide.addEventListener("click", () => {
    mathType = "divide"
    mathStored = parseFloat(displayNumber.innerText, 10);
    displayNumber.innerHTML = "0"
})

period.addEventListener("click", () => {
    if (displayNumber.innerText === "0") {
        displayNumber.innerHTML = "0."
    } else if (displayNumber.innerText.includes(".")) {

    } else {
        displayNumber.innerHTML += "."
    }

})

function resolveMath() {

    if (mathType === "add") {

        ans = mathStored + parseFloat(displayNumber.innerText, 10);
        displayNumber.innerHTML = ans
        mathStored = 0;
        mathType = "";
    } else if (mathType === "subtract") {

        ans = mathStored - parseFloat(displayNumber.innerText, 10);
        displayNumber.innerHTML = ans
        mathStored = 0;
        mathType = ""
    } else if (mathType === "multiply") {

        ans = mathStored * parseFloat(displayNumber.innerText, 10);
        displayNumber.innerHTML = ans
        mathStored = 0;
        mathType = ""
    } else if (mathType === "divide") {
        
        ans = mathStored / parseFloat(displayNumber.innerText, 10);
        displayNumber.innerHTML = ans
        mathStored = 0;
        mathType = ""
    }

    
}

equals.addEventListener("click", resolveMath);


