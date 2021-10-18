const btn = document.getElementById("new-para");
const container = document.querySelector(".container");
let para = document.getElementById("para");
const copy = document.getElementById("copy")
const copied = document.getElementById("copied");
// const form = document.getElementById("myForm");

let paragraphs = [
    "hello",
    "fuck you",
    "suck my dick",
    "davids a cunt"
];


btn.addEventListener("click", function (e) {
    e.preventDefault;
    let para = document.getElementById("para");
    let i = Math.floor(Math.random() * paragraphs.length);
    para.textContent = paragraphs[i];
    if (para.innerText != "") {
        navigator.clipboard.writeText(para.textContent)
        btn.style.display = "none";
    }
    copied.classList.add("show");



});
