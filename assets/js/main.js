// element.addEventListener("submit", function(event){
//     event.preventDefault(); // stopper la soumission auto

//     event.target.submit(); // le soumettre à la main
// });

let username = document.querySelector('#username');
let email = document.querySelector('#email');
let pass = document.querySelector('#password');
let confPass= document.querySelector('#confirm-password');
let submit = document.querySelector('#submit');
let form1 = document.querySelector('form:first-of-type');
let form2 = document.querySelector('form:nth-of-type(2)');

console.log(form1);
form1.addEventListener("submit", function(e){
    e.preventDefault();
    console.log('fonction');
    if(username.value !== ""){
        console.log('username');
        if(email.value !== ""){
            console.log('email');
            if(pass.value !== ""){
                console.log('password');
                if(confPass == pass){
                    console.log('confpassword');
                    e.target.submit();
                    
                }else {
                    let inputError = document.createElement("p");
                    let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
                    inputError.innerHTML = "Veuillez faire correspondre le mot de passe";
                    inputError.classList.add("erreur");
                    fieldset.appendChild(inputError);
                }
                
            }else {
                let inputError = document.createElement("p");
                let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(3)");
                inputError.innerHTML = "Veuillez choisir un mot de passe";
                inputError.classList.add("erreur");
                fieldset.appendChild(inputError);
            }
            
        }else {
            let inputError = document.createElement("p");
            let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
            inputError.innerHTML = "Veuillez rentrer une adresse email";
            inputError.classList.add("erreur");
            fieldset.appendChild(inputError);
        }
        
    }else{
        let inputError = document.createElement("p");
        let fieldset = document.querySelector("form:first-of-type fieldset:nth-of-type(1)");
        let input = document.querySelector("form:first-of-type input:first-of-type");
        inputError.innerHTML = "Veuillez entrer un Nom d'utilisateur";
        inputError.classList.add("erreur");
        input.classList.add("erreur");
        fieldset.appendChild(inputError);
    }
});

