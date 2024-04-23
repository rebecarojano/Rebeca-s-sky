var fullBox = document.getElementById("fullBox");
var full = document.getElementById("full");

window.addEventListener("load", function() {
    fullBox.style.display = "none";
});

function openFull(pic){
    fullBox.style.display = "flex";
    full.src = pic;
}

function closeFullBox(){
    fullBox.style.display = "none";
}