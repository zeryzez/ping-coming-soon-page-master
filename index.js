const alerte = document.querySelector(".alert")
const notifyButton = document.querySelector(".Notifybutton")
const emailInput = document.querySelector(".email-input")

notifyButton.addEventListener("click", () =>{
    alerte.style.visibility="visible"
    emailInput.style.borderColor="red"
})