document.addEventListener("DOMContentLoaded", function () {
    let recipeObj = {
        title: "Tomato Pasta",
        imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
        ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
    };

    let title = document.getElementById("title");
    title.textContent = recipeObj.title;

    let img = document.getElementById("img");
    img.setAttribute("src", recipeObj.imgSrc);

    // let data = ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"];
    let list = document.getElementById("list");

    for (let i of recipeObj.ingredients) {
        let li = document.createElement("li");
        li.textContent = i;
        li.style.color = "#ffffff";
        li.style.fontFamily = "Roboto";
        list.appendChild(li);
    }
});