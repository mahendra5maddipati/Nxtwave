document.addEventListener("DOMContentLoaded", function() {
    // Array of items
    let itemList = [
        {
            itemName: "Veg Biryani",
            uniqueNo: 1,
        },
        {
            itemName: "Chicken 65",
            uniqueNo: 2,
        },
        {
            itemName: "Paratha",
            uniqueNo: 3,
        }
    ];

    // Function to remove an item
    function removeItem(uniqueNo) {
        let orderedItemList = document.getElementById("orderedItemList");
        let itemToRemove = document.getElementById(`item${uniqueNo}`);
        orderedItemList.removeChild(itemToRemove);
    }

    // Loop through the itemList and create list items with cancel buttons
    itemList.forEach(item => {
        let orderedItemList = document.getElementById("orderedItemList");
        let listItem = document.createElement("li");
        listItem.id = `item${item.uniqueNo}`;
        listItem.textContent = item.itemName;

        // Create and configure the "Cancel" button
        let cancelButton = document.createElement("button");
        cancelButton.id = `button${item.uniqueNo}`;
        cancelButton.classList.add("btn", "btn-danger", "ml-3");
        cancelButton.textContent = "Cancel";

        // Add event listener to the "Cancel" button
        cancelButton.addEventListener("click", () => removeItem(item.uniqueNo));

        // Append the "Cancel" button to the list item
        listItem.appendChild(cancelButton);

        // Append the list item to the orderedItemList
        orderedItemList.appendChild(listItem);
    });
});

// document.addEventListener("DOMContentLoaded", function() {

//     let itemList = [{
//         itemName: "Veg Biryani",
//         uniqueNo: 1,
//     },
//     {
//         itemName: "Chicken 65",
//         uniqueNo: 2,
//     },
//     {
//         itemName: "Paratha",
//         uniqueNo: 3,
//     }
//     ];

//     function removeItem(uniqueNo) {
//     let orderedItemList = document.getElementById("orderedItemList");
//     let itemToRemove = document.getElementById(`item${uniqueNo}`);
//     orderedItemList.removeChild(itemToRemove);
//     }
//     itemList.forEach(item => {
//     let orderedItemList = document.getElementById("orderedItemList");
//     let listItem = document.createElement("li");
//     listItem.id = `item${item.uniqueNo}`;
//     listItem.textContent = item.itemName;
//     let cancelButton = document.createElement("button");
//     cancelButton.id = `button${item.uniqueNo}`;
//     cancelButton.classList.add("btn", "btn-danger", "ml-3");
//     cancelButton.textContent = "Cancel";
//     cancelButton.addEventListener("click", () => removeItem(item.uniqueNo));
//     listItem.appendChild(cancelButton);
//     orderedItemList.appendChild(listItem);
//     });

// });