let first = document.getElementById("firstNumber");
let second = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let result = document.getElementById("gameResult");

function restart(){
    first.textContent = Math.ceil(Math.random() * 100);
    second.textContent = Math.ceil(Math.random() * 100);
    result.textContent = "";
    userInput.value = "";
}

restart();

function check(){
    let firstRandom = parseInt(first.textContent);
    let secondRandom = parseInt(second.textContent);
    let userSum = parseInt(userInput.value);
    
    let sum = firstRandom + secondRandom;
    
    if (userSum === sum){
        result.textContent = "Congratulations! You got it right.";
        result.style.backgroundColor = "#028a0f";
    } else {
        result.textContent = "Please Try Again!";
        result.style.backgroundColor = "#1e217c";
    }
}