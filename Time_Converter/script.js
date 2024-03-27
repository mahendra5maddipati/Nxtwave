let input1 = document.getElementById("hoursInput");
let input2 = document.getElementById("minutesInput");

let error = document.getElementById("errorMsg");
let time = document.getElementById("timeInSeconds");
let button = document.getElementById("convertBtn");


function convert() {
    let hours = parseInt(input1.value);
    let minutes = parseInt(input2.value);

    if (isNaN(hours) || hours < 0) {
        error.textContent = "Please enter a valid number of hours";
    } else if (isNaN(minutes) || minutes < 0) {
        error.textContent = "Please enter a valid number of minutes";
    } else {
        error.textContent = "";
        let totalSeconds = hours * 3600 + minutes * 60;
        time.textContent = totalSeconds;
        // time.style.padding = "10px";
        // time.style.border = "5px";
        // time.style.borderColor = "#ffffff";
        time.style.cssText = `
            padding: 10px;
            border: 1px solid #ffffff;
            border-radius: 10px;
        `;
    }
}

button.addEventListener("click", convert);