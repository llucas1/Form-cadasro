const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (Event) =>{
    Event.preventDefault();

    checkInputusername();
    checkInputemail();
    checkInputPassword();
    checkInputPassworConfirmation();
})


/* validação do email*/
function checkInputusername() { 
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Nome do usuário obrigatório.");
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

/*validação do email*/

function checkInputemail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "o email é obrigatório")
    }else{
        const formItem = email.parentElement;
        formItem.className = " form-content";
    }
}

//validação da senha
function checkInputPassword(){
    const passwordValue = password.value;
    if(passwordValue === ""){
        errorInput(password, "Senha obrigatório")
    }else if (passwordValue.length < 8) {
        
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres...")
    }else{
        const formItem = password.parentElement;

        formItem.className = "form-content"
    }
}

//confimaação da senha
function checkInputPassworConfirmation(){
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Confirme sua senha")
    }else if(passwordValue !== passwordConfirmationValue){
        errorInput(passwordConfirmation, "As senhas precisam ser iguais...")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}


// informa menssagem de erro
function errorInput (input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error";
}