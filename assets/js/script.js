// zehra


function qs(selector) {
    let element = document.querySelector(selector)

    return element
}

const sunmode = qs(".sunmode")
const darkmode = qs(".darkmode")
const body = qs("body")

sunmode.addEventListener("click", (e) => {
    console.log("sdjngdkfjs");
    body.classList.add("darkModeActive")
    sunmode.style.display = "none"
    darkmode.style.display = "flex"
})

darkmode.addEventListener("click", (e) => {
    body.classList.remove("darkModeActive")
    sunmode.style.display = "flex"
    darkmode.style.display = "none"
})

// zehra

// busra
// const button= document.querySelector(".button")

async function getData(){
    const
}
// busra bitis 