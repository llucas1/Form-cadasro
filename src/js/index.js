const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (Event) =>{
    Event.preventDefault();

    checkInputusername();
})


/* validação do email*/
function checkInputusername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        inputError(username, "Nome do usuário obrigatório.");
    } else {
        const formItem = username.parentElement;
        formItem.classList = "form-content";
    }
}



// informa menssagem de erro
function inputError (input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error";
}