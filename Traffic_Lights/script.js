document.addEventListener("DOMContentLoaded", function() {
    let stop = document.getElementById("stopButton");
    let ready = document.getElementById("readyButton");
    let go = document.getElementById("goButton");
    let redLight = document.getElementById("stopLight");
    let yellowLight = document.getElementById("readyLight");
    let greenLight = document.getElementById("goLight");

    stop.addEventListener("click", red);
    ready.addEventListener("click", yellow);
    go.addEventListener("click", green);


    function red() {
        stop.style.backgroundColor = "#cf1124";
        redLight.style.backgroundColor = "#cf1124";
        ready.style.backgroundColor = "#1f1d41";
        yellowLight.style.backgroundColor = "#4b5069";
        go.style.backgroundColor = "#1f1d41";
        greenLight.style.backgroundColor = "#4b5069";
    }

    function yellow() {
        ready.style.backgroundColor = "#f7c948";
        yellowLight.style.backgroundColor = "#f7c948";
        stop.style.backgroundColor = "#1f1d41";
        redLight.style.backgroundColor = "#4b5069";
        go.style.backgroundColor = "#1f1d41";
        greenLight.style.backgroundColor = "#4b5069";
    }

    function green() {
        go.style.backgroundColor = "#199473";
        greenLight.style.backgroundColor = "#199473";
        ready.style.backgroundColor = "#1f1d41";
        yellowLight.style.backgroundColor = "#4b5069";
        stop.style.backgroundColor = "#1f1d41";
        redLight.style.backgroundColor = "#4b5069";
    }
});