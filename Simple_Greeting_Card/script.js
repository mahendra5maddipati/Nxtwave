let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let greeting1 = JSON.parse(greeting);
// console.log(greeting1);

let fromElement = document.querySelector('.greet1');
let toElement = document.querySelector('.greet');
let greetTextElement = document.querySelector('.greet-text');

fromElement.textContent = "From: " + greeting1.from;
toElement.textContent = "To: " + greeting1.to;
greetTextElement.textContent = greeting1.greetText;