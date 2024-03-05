document.addEventListener("DOMContentLoaded", function() {
    let bgColorsArray = [];
    for (let r = 0; r <= 255; r += 51) {
        for (let g = 0; g <= 255; g += 51) {
            for (let b = 0; b <= 255; b += 51) {
                const rgbColor = `rgb(${r},${g},${b})`;
                bgColorsArray.push(rgbColor);
            }
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(bgColorsArray);

    let button = document.getElementById("button");
    let bg = document.getElementById("bgContainer");
    let currentIndex = 0;

    function clickMe() {
        let currentColor = bgColorsArray[currentIndex];
        bg.style.backgroundColor = currentColor;
        currentIndex = (currentIndex + 1) % bgColorsArray.length;
    }
    button.addEventListener("click", clickMe);
});