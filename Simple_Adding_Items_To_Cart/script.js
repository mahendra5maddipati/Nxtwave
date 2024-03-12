document.addEventListener("DOMContentLoaded", function() {
    let container1 = document.getElementById("containerRow");

    let container = document.createElement("div");
    container.id = "container";
    container1.appendChild(container);

    container.classList.add("d-flex", "flex-column", "justify-content-center", "p-5");

    let heading = document.createElement("h1");
    heading.textContent = "Add To Card";
    container.appendChild(heading);

    let div1 = document.createElement("div");
    div1.id = "inputs";
    div1.style.margin = "10px";
    container.appendChild(div1);

    let input = document.createElement("input");
    input.id = "cartItemTextInput";
    input.rows = 1;
    input.cols = 10;
    div1.appendChild(input);

    let button = document.createElement("button");
    button.classList.add("btn-primary");
    button.id = "addBtn";
    button.textContent = "Add";
    button.setAttribute("onclick", "addItem()");
    button.style.marginLeft = "10px";
    button.style.borderRadius = "5px";
    div1.appendChild(button);

    let para = document.createElement("p");
    para.textContent = "My Cart items";
    // para.style.textAlign = "center";
    container.appendChild(para);

    let ulist = document.createElement("ul");
    ulist.style.listStyleType = "none";
    container.appendChild(ulist);

    // let olist = document.createElement("li");
    // ulist.appendChild(olist);

    function addItem() {
        let data = input.value;
        if (data.trim() !== "") {
            let newListItem = document.createElement("li");
            newListItem.textContent = data;
            ulist.appendChild(newListItem);
            input.value = "";
        }
    }
    addBtn.addEventListener("click", addItem);

});