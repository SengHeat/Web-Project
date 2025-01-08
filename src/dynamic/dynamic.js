let i = 0;
let j = 0;

let texts = ["Error", "Bug", "Dek", "Haaha", "Coffee"];
let colorsList = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"];

window.setInterval(function() {
    let dt = document.getElementById("dt");
    dt.textContent = texts[i++];
    i = i%5;
}, 2000);

window.setInterval(function() {
    let colors = document.getElementById("colors");
    colors.style.backgroundColor = colorsList[j++];
    if (j >= colorsList.length) {
        j = 0;
        window.alert("Hello Brother");
    }
}, 1000);
