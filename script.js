const switchOff = document.querySelector(".off");
const switchOn = document.querySelector(".on");

console.log(switchOff, switchOn);

switchOff.addEventListener("click",
    function () {
        switchOn.classList.add("active");
    }
)

switchOn.addEventListener("click",
    function () {
        switchOff.classList.add("active");
    }
)