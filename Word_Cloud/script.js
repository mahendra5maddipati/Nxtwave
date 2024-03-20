let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];


let container = document.getElementById("wordsContainer");


for (let i of wordCloud) {
    let span = document.createElement("span");
    span.textContent = i;
    span.id = "spanElement";
    span.style.margin = "10px";
    span.style.fontSize = Math.ceil(Math.random() * 50) + "px";
    container.appendChild(span);
}

let addBtn = document.getElementById("addBtn");
let input = document.getElementById("userInput");
let error = document.getElementById("errorMsg");
addBtn.onclick = function() {
    if (input.value === "") {
        error.textContent = "Please enter a word";
    } else {
        let newWord = input.value;
        let newSpan = document.createElement("span");
        newSpan.textContent = newWord;
        newSpan.id = "spanElement";
        newSpan.style.margin = "10px";
        newSpan.style.fontSize = Math.ceil(Math.random() * 50) + "px";
        container.appendChild(newSpan);
        input.value = "";
        error.textContent = "";
    }
};