document.addEventListener("DOMContentLoaded", function(){
    let requestButton = document.getElementById("sendGetRequestBtn");
    let requestStatus = document.getElementById("requestStatus");
    let httpResponse = document.getElementById("httpResponse");
    let loading = document.getElementById("loading");

    function send() {
        let requestUrl = "https://gorest.co.in/public-api/users";

        let options = {
            method: "GET"
        };
        loading.classList.remove("d-none");
        requestStatus.classList.add("d-none");
        fetch(requestUrl, options)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("Network response was not ok: " + response.statusText);
                }
                return response.json();
            })
            .then(function(jsonData) {
                loading.classList.add("d-none");
                requestStatus.classList.remove("d-none");
                console.log(jsonData);
                requestStatus.textContent = jsonData.code;
                httpResponse.textContent = JSON.stringify(jsonData, null, 2);
            })
            .catch(function(error) {
                console.error("Error during fetch operation:", error);
                requestStatus.textContent = "Error in request";
                httpResponse.textContent = "Error: " + error.message;
            });
    }

    requestButton.addEventListener("click", send);
});
