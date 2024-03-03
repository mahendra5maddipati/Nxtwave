let imageElement = document.getElementById("image");
let warningMessage = document.getElementById("warningMessage");
let imageWidth = document.getElementById("imageWidth");
let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");

let defaultImageWidth = 200;

imageWidth.textContent = defaultImageWidth;
imageElement.style.width = defaultImageWidth + "px";


function increment() {
    if (defaultImageWidth >= 300) {
        warningMessage.textContent = "Too big. Decrease the size of the Image.";
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        let incrementWidth = defaultImageWidth + "px";
        // let incrementWidth = defaultImageWidth + 5;
        // defaultImageWidth = incrementWidth;
        imageElement.style.width = incrementWidth;
        imageWidth.textContent = incrementWidth;
        warningMessage.textContent = "";
    }
}

function decrement() {
    if (defaultImageWidth <= 100) {
        warningMessage.textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        let decrementWidth = defaultImageWidth + "px";
        // let decrementWidth = defaultImageWidth - 5;
        // defaultImageWidth = decrementWidth;
        imageElement.style.width = decrementWidth;
        imageWidth.textContent = decrementWidth;
        warningMessage.textContent = "";
    }
}