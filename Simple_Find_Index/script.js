let numbers = [17, 31, 77, 20, 63];

let input = document.getElementById("userInput");
let button = document.getElementById("findBtn");
let index = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
    let a = parseInt(input.value);
    let item = numbers.findIndex(function(eachitem) {
        if (eachitem === a) {
            return true;
        } else {
            return false;
        }
    });
    index.textContent = item;
}