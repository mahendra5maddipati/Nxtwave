document.addEventListener("DOMContentLoaded", function() {
    let bgColor = document.getElementById("bgColorInput");
    let fontColor = document.getElementById("fontColorInput");
    let fontSize = document.getElementById("fontSizeInput");
    let fontWeight = document.getElementById("fontWeightInput");
    let padding = document.getElementById("paddingInput");
    let borderRadius = document.getElementById("borderRadiusInput");
    let button = document.getElementById("customButton");

    function apply() {
        let bgColor1 = bgColor.value;
        let fontColor1 = fontColor.value;
        let fontSize1 = fontSize.value;
        let fontWeight1 = fontWeight.value;
        let padding1 = padding.value;
        let borderRadius1 = borderRadius.value;
        button.style.backgroundColor = bgColor1;
        button.style.color = fontColor1;
        button.style.fontSize = fontSize1;
        button.style.fontWeight = fontWeight1;
        button.style.padding = padding1;
        button.style.borderRadius = borderRadius1;
    }
    applyButton.addEventListener("click", apply);
});