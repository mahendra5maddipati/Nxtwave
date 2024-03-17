document.addEventListener("DOMContentLoaded", function(){
    let arr = [1, 7, 3, 1, 0, 20, 77];

    let stringifyArray = JSON.stringify(arr);

    let updatedArray = document.getElementById("updatedArray");

    updatedArray.textContent = stringifyArray;

    let start = document.getElementById("startIndexInput");
    let del = document.getElementById("deleteCountInput");
    let add = document.getElementById("itemToAddInput");

    function splice() {
        let a = start.value;
        let b = del.value;
        let c = add.value;
        arr.splice(a, b, c);
        stringifyArray = JSON.stringify(arr);
        updatedArray.textContent = stringifyArray;
    }
    let spliceBtn = document.getElementById("spliceBtn");
    spliceBtn.addEventListener("click", splice);
});