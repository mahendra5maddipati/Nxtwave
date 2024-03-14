document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("movieReviewsContainer");
    container.classList.add("flex", "flex-column");

    let div1 = document.createElement("div");
    div1.style.margin = "20px";
    div1.id = "divConatiner";
    div1.classList.add("d-flex", "flex-column");
    container.appendChild(div1);

    let heading = document.createElement("h1");
    heading.textContent = "Movie Reviews";
    heading.classList.add("text-center");
    heading.style.padding = "5px";
    heading.style.margin = "10px";
    heading.style.fontFamily = "Roboto";
    heading.style.fontWeight = "Bold";
    div1.appendChild(heading);

    let para1 = document.createElement("p");
    para1.textContent = "MOVIE TITLE";
    para1.style.fontFamily = "Roboto";
    para1.style.color = "#7b8794";
    para1.style.marginBottom = "0px";
    div1.appendChild(para1);

    let input1 = document.createElement("input");
    input1.id = "titleInput";
    div1.appendChild(input1);

    let para2 = document.createElement("p");
    para2.textContent = "YOUR REVIEW";
    para2.style.marginBottom = "0px";
    para2.style.color = "#7b8794";
    para2.style.marginTop = "10px";
    para2.style.fontFamily = "Roboto";
    div1.appendChild(para2);

    let input2 = document.createElement("textarea");
    input2.id = "reviewTextarea";
    input2.rows = "5";
    input2.cols = "23";
    input2.style.marginBottom = "10px";
    div1.appendChild(input2);


    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    // button.style.padding = "10px";
    button.style.marginLeft = "80%";
    button.id = "addBtn";
    button.setAttribute("onclick", "add()");
    button.textContent = "Add";
    div1.appendChild(button);

    let div2 = document.createElement("div");
    div2.id = "reviewsContainer";
    container.appendChild(div2);



    function add() {
        let title = input1.value;
        let review = input2.value;

        if (title === "") {
            alert("Enter the movie title");
        } else {
            let ul = document.createElement("ul");
            div2.appendChild(ul);
            let li = document.createElement("li");
            ul.appendChild(li);
            li.textContent = `Title: ${title},\nReview: ${review}`;

        }
        input1.value = "";
        input2.value = "";
    }
    button.addEventListener("click", add);
});