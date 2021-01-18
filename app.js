let count= 0;

const value = document.querySelector("#value");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

increase.addEventListener("click", function(e){
    const actions = e.currentTarget.classList;
    if(actions.contains("increase")){
        count++
    }

    if (count > 0) {
        value.style.color = "green";
    }

    value.textContent = count;
})

decrease.addEventListener("click", function (e) {
    const actions = e.currentTarget.classList;
    if (actions.contains("decrease")) {
        count--
    }

    if (count < 0) {
        value.style.color = "red";
    }

    value.textContent = count;
})

reset.addEventListener("click", function (e) {
    const actions = e.currentTarget.classList;
    if (actions.contains("reset")) {
        count = 0
    }

    if (count === 0) {
        value.style.color = "black";
    }

    value.textContent = count;
})


