document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("colorPickerContainer");
    let textChange = document.getElementById("selectedColorHexCode");

    function bgToGrey() {
        let grey = document.getElementById("button1").textContent;
        button.style.backgroundColor = grey;
        textChange.textContent = grey;
        textChange.style.color = "#49a639";
    }

    function bgToGreen() {
        button.style.backgroundColor = "#6fcf97";
        textChange.textContent = "#6fcf97";
    }

    function bgToGreen() {
        button.style.backgroundColor = "#6fcf97";
        textChange.textContent = "#6fcf97";
    }

    function bgToBlue() {
        button.style.backgroundColor = "#56ccf2";
        textChange.textContent = "#56ccf2";
    }

    function bgToViolet() {
        button.style.backgroundColor = "#bb6bd9";
        textChange.textContent = "#bb6bd9";
    }
    document.getElementById("button1").addEventListener("click", bgToGrey);
    document.getElementById("button2").addEventListener("click", bgToGreen);
    document.getElementById("button3").addEventListener("click", bgToBlue);
    document.getElementById("button4").addEventListener("click", bgToViolet);
});