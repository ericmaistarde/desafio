const $nameField = document.querySelector(".name-complete")
const $labelName = document.querySelector(".label-name")

const $email = document.querySelector(".e-mail")
const $labelEmail = document.querySelector(".label-email")

const $button = document.querySelector(".button-form")

let emailLet = "@"

function verifyFieldName() {
    // for (let i = 0; i >= 3; i++) {
    //     console.log("foi")
    // }
    if ($nameField.value === "") {
        $labelName.textContent = "campo inválido,está vazio"
        $labelName.classList.add("error")
        setTimeout(() => {
            $labelName.classList.remove("error")
            $labelName.textContent = "nome completo"
        }, 3000);
        // } else if ($nameField.value >=  ) {
        //     $labelName.textContent = "campo inválido,talvez faltem letras"
        //     $labelName.classList.add("error")
    } else {
        $labelName.textContent = "nome completo"
        $labelName.classList.remove("error")
    }
    for (let i = 0; i >= emailLet.length;) {
        // console.log("foi")
    }
}

function verifyFieldEmail() {
    if ($email.value === "") {
        $labelEmail.textContent = "campo inválido,está vazio"
        $labelEmail.classList.add("error")
        setTimeout(() => {
            $labelEmail.classList.remove("error")
            $labelEmail.textContent = "e-mail"
        }, 3000);
        // } else if ($email.value != "@") {
        //     $labelName.textContent = "campo inválido,talvez falte algo"
        //     $labelName.classList.add("error")
    } else {
        $labelEmail.textContent = "e-mail"
        $labelEmail.classList.remove("error")
    }
}

$button.addEventListener("click", function (e) {
    e.preventDefault()

    verifyFieldName()
    verifyFieldEmail()
})