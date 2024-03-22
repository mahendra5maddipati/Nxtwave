document.addEventListener("DOMContentLoaded", function(){
    let from = document.getElementById("fromUserInput");
    let to = document.getElementById("toUserInput");
    let counter = document.getElementById("counterText");
    let button = document.getElementById("startBtn");
    button.onclick = function() {
        if (from.value === "") {
            alert("Enter the from value");
        } else if (to.value === "") {
            alert("Enter the to value");
        } else {
            let a = parseInt(from.value);
            let b = parseInt(to.value);
            counter.textContent = a;

            let uniqueId = setInterval(function() {
                a = a + 1;

                if (a > b) {
                    clearInterval(uniqueId);
                } else {
                    counter.textContent = a;
                }
            }, 1000);
        }
    };
});