document.addEventListener("DOMContentLoaded", function(){
    let twenty = document.getElementById("twentySecondsBtn");
    let thirty = document.getElementById("thirtySecondsBtn");
    let forty = document.getElementById("fortySecondsBtn");
    let oneMinute = document.getElementById("oneMinuteBtn");
    let text = document.getElementById("timerText");
    let counter;


    function startTimer() {
        text.textContent = counter + " seconds left";
        let id = setInterval(function() {
            text.textContent = counter + " seconds left";
            counter = counter - 1;
            if (counter === -1) {
                text.textContent = "Your moment is complete";
                clearInterval(id);
            }
        }, 1000);
    }
    twenty.onclick = function() {
        counter = 20;
        startTimer();
    };

    thirty.onclick = function() {
        counter = 30;
        startTimer();
    };

    forty.onclick = function() {
        counter = 40;
        startTimer();
    };

    oneMinute.onclick = function() {
        counter = 60;
        startTimer();
    };
});

// twenty.onclick = function(){
//   let counter = 20;
//   text.textContent = counter + " seconds left";
//   let id = setInterval(function() {
//      text.textContent = counter + " seconds left";
//      counter = counter-1;
//      if (counter === -1){
//         text.textContent = "Your moment is compelet";
//         clearInterval(id);
//      }
//   }, 1000);
// };

// thirty.onclick = function(){
//   let counter = 30;
//   text.textContent = counter + " seconds left";
//   let id = setInterval(function() {
//      text.textContent = counter + " seconds left";
//      counter = counter-1;
//      if (counter === -1){
//         text.textContent = "Your moment is compelet";
//         clearInterval(id);
//      }
//   }, 1000);
// };

// forty.onclick = function(){
//   let counter = 40;
//   text.textContent = counter + " seconds left";
//   let id = setInterval(function() {
//      text.textContent = counter + " seconds left";
//      counter = counter-1;
//      if (counter === -1){
//         text.textContent = "Your moment is compelet";
//         clearInterval(id);
//      }
//   }, 1000);
// };

// oneMinute.onclick = function(){
//   let counter = 60;
//   text.textContent = counter + " seconds left";
//   let id = setInterval(function() {
//      text.textContent = counter + " seconds left";
//      counter = counter-1;
//      if (counter === -1){
//         text.textContent = "Your moment is compelet";
//         clearInterval(id);
//      }
//   }, 1000);
// };