let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let container = document.getElementById("groceryListContainer");


container.style.backgroundColor = "#03254c";
container.style.padding = "5px";
let heading = document.createElement("h1");
heading.textContent = "Grocery List";
heading.style.color = "#ffffff";
heading.style.padding = "5px";
heading.style.textAlign = "center";
container.appendChild(heading);


let list = document.createElement("ul");
list.style.backgroundColor = "#f5f9fd";
list.style.margin = "10px";
list.style.borderRadius = "10px";
for (let item of groceryList) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}

container.appendChild(list);