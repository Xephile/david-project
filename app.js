const btn = document.querySelector("button");
const container = document.querySelector(".container");
let para = document.getElementById("para");
const form = document.getElementById("myForm");

let paragraphs = [
    "hello",
    "fuck you",
    "suck my dick",
    "davids a cunt"
];

function emailSubmit() {
    let copyText = document.getElementById("myInput");

    copyText.select();

    navigator.clipboard.writeText(copyText.value)
};


btn.addEventListener("click", () => {
    let para = document.getElementById("para");

    let i = Math.floor(Math.random() * paragraphs.length);
    para.textContent = paragraphs[i];

})

