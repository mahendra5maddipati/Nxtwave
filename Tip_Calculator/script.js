let total = document.getElementById("totalAmount");
let tip = document.getElementById("tipAmount");
let bill = document.getElementById("billAmount");
let pTip = document.getElementById("percentageTip");
let error = document.getElementById("errorMessage");

function calculateTip() {
    let billValue = parseInt(bill.value);
    let pTipValue = parseInt(pTip.value);

    if (isNaN(billValue) || isNaN(pTipValue)) {
        error.textContent = "Please enter a valid numbers";
    } else {
        let totalTip = (pTipValue / 100) * billValue;
        tip.value = totalTip;
        total.value = (billValue + totalTip);
        error.textContent = "";
    }
}