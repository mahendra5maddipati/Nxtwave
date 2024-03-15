let counter = document.getElementById("counterValue");
counter.textContent = "0";

function increment() {
    let counterValue = parseInt(counter.textContent);
    let incrementValue = counterValue + 1;
    counter.textContent = incrementValue;
    localStorage.setItem("clickCount", incrementValue);
    localStorage.getItem("clickCount");
}