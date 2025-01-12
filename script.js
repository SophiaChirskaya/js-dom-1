const button = document.querySelector(".button");
const img = document.querySelector(".light");

console.log(button, img);

button.addEventListener("click",
    function () {
        img.src = "./img/yellow_lamp.png";
        
    }
);
