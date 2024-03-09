let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let img1 = document.getElementById("imgContainer");
let container = document.getElementById("profileContainer");

container.classList.add("d-flex", "flex-column", "justify-content-center", "text-center");

let img = document.createElement("img");
img.setAttribute("src", profileDetails.imgSrc);
img1.appendChild(img);

let heading = document.createElement("h1");
heading.textContent = profileDetails.name;
container.appendChild(heading);

let para = document.createElement("p");
para.textContent = "Age:" + profileDetails.age;
container.appendChild(para);