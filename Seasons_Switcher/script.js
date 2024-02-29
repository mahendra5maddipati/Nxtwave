document.addEventListener("DOMContentLoaded", function() {
    let smallImage = document.getElementById("seasonSmallImage");
    let mediumImage = document.getElementById("seasonMediumImage");

    let springSmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    let springMedium = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
    document.getElementById("springBtn").addEventListener("click", spring);
    document.getElementById("summerBtn").addEventListener("click", summer);
    document.getElementById("autumnBtn").addEventListener("click", autumn);
    document.getElementById("winterBtn").addEventListener("click", winter);

    function spring() {
        smallImage.src = springSmall;
        mediumImage.src = springMedium;
    }

    let summerSmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    let summerMedium = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

    function summer() {
        smallImage.src = summerSmall;
        mediumImage.src = summerMedium;
    }

    let autumnSmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    let autumnMedium = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

    function autumn() {
        smallImage.src = autumnSmall;
        mediumImage.src = autumnMedium;
    }

    let winterSmall = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    let winterMedium = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

    function winter() {
        smallImage.src = winterSmall;
        mediumImage.src = winterMedium;
    }
});

////////////////////////////////////////////////////////////////