document.addEventListener("DOMContentLoaded", function(){
    function changeTheme(event) {
        if (event.key === 'Enter') {
            let container = document.getElementById("bgContainer");
            let heading = document.getElementById("heading");
            let input = document.getElementById("themeUserInput");
            if (input.value === 'Light') {
                container.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
                heading.style.color = '#014d40';
            } else if (input.value === 'Dark') {
                container.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
                heading.style.color = 'White';
            } else {
                alert('Enter the valid theme');
            }
            input.value = '';
        }
    }
});