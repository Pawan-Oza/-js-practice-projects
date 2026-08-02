// Selecting elements
const heading = document.getElementById("header");
const input = document.getElementById("input");
const button = document.getElementById("btn");
const boxes = document.querySelectorAll(".box");

// Greeting button
button.addEventListener("click", function () {
    let userName = input.value;

    if (userName.trim() === "") {
        heading.innerText = "Hello";
    } else {
        heading.innerText = `Hello, ${userName}`;
    }
});

// Box colour change
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        let color = box.innerText.toLowerCase();

        box.style.backgroundColor = color;
        box.style.color = "brown";
    });
});