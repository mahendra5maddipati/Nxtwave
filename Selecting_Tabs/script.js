document.addEventListener("DOMContentLoaded", function() {
    let aboutB = document.getElementById("aboutButton");
    let visitB = document.getElementById("timeToVisitButton");
    let attractionsB = document.getElementById("attractionsButton");
    let aboutT = document.getElementById("aboutTab");
    let visitT = document.getElementById("timeToVisitTab");
    let attractionsT = document.getElementById("attractionsTab");

    visitT.classList.add("d-none");
    attractionsT.classList.add("d-none");

    function about() {
        aboutT.classList.remove("d-none");
        visitT.classList.add("d-none");
        attractionsT.classList.add("d-none");

        aboutB.classList.add("selected-button");
        visitB.classList.remove("selected-button");
        attractionsB.classList.remove("selected-button");
    }

    function visit() {
        aboutT.classList.add("d-none");
        visitT.classList.remove("d-none");
        attractionsT.classList.add("d-none");

        aboutB.classList.remove("selected-button");
        visitB.classList.add("selected-button");
        attractionsB.classList.remove("selected-button");
    }

    function attractions() {
        aboutT.classList.add("d-none");
        visitT.classList.add("d-none");
        attractionsT.classList.remove("d-none");

        aboutB.classList.remove("selected-button");
        visitB.classList.remove("selected-button");
        attractionsB.classList.add("selected-button");
    }
    aboutB.addEventListener("click", about);
    visitB.addEventListener("click", visit);
    attractionsB.addEventListener("click", attractions);
});


// const tabs = {
//     about: { button: document.getElementById("aboutButton"), tab: document.getElementById("aboutTab") },
//     visit: { button: document.getElementById("timeToVisitButton"), tab: document.getElementById("timeToVisitTab") },
//     attractions: { button: document.getElementById("attractionsButton"), tab: document.getElementById("attractionsTab") }
// };

// function showTab(tabName) {
//     for (const key in tabs) {
//         const tab = tabs[key];
//         const isSelected = key === tabName;

//         tab.tab.classList.toggle("d-none", !isSelected);
//         tab.button.classList.toggle("selected-button", isSelected);
//     }
// }

// function about() {
//     showTab("about");
// }

// function visit() {
//     showTab("visit");
// }

// function attractions() {
//     showTab("attractions");
// }
