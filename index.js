let input = document.querySelector("input");
let calcBtn = document.querySelector("#calc");
let resetBtn = document.querySelector("#reset");
let output = document.querySelector("#output");

// calculate
calcBtn.addEventListener("click", () => {
    let expression = input.value;   

    if (expression === "") {
        output.innerText = "Enter value";
        return;
    }
    let result = eval(expression);  
    output.innerText = "Answer: " + result;
});

// reset
resetBtn.addEventListener("click", () => {
    input.value = "";
    output.innerText = "";
});

let body = document.querySelector("body");
