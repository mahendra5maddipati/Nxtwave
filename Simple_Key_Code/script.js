let input = document.getElementById("userInput");
let keys = document.getElementById("keyCodeList");

input.addEventListener('keydown', function(event) {
    let li = document.createElement("li");
    li.textContent = event.keyCode;
    keys.appendChild(li);
});