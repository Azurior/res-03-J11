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
    if(username.value == ""){
        console.log('username');
        let inputErrorName = document.createElement("p");
        let fieldsetName = document.querySelector("form:first-of-type fieldset:nth-of-type(1)");
        
        inputErrorName.innerHTML = "Veuillez entrer un Nom d'utilisateur";
        inputErrorName.classList.add("erreur");
        username.classList.add("erreur");
        fieldsetName.appendChild(inputErrorName);
        
        if(email.value == ""){
            console.log('email');
            let inputErrorEmail = document.createElement("p");
            let fieldsetEmail = document.querySelector("form:first-of-type fieldset:nth-of-type(2)");
            
            inputErrorEmail.innerHTML = "Veuillez entrer une adresse email";
            inputErrorEmail.classList.add("erreur");
            email.classList.add("erreur");
            fieldsetEmail.appendChild(inputErrorEmail);
            
            if(pass.value == ""){
                console.log('password');
                let inputErrorPassword = document.createElement("p");
                let fieldsetPassword = document.querySelector("form:first-of-type fieldset:nth-of-type(3)");

                inputErrorPassword.innerHTML = "Veuillez choisir un mot de passe";
                inputErrorPassword.classList.add("erreur");
                pass.classList.add("erreur");
                fieldsetPassword.appendChild(inputErrorPassword);
                
                if(confPass !== pass){
                    console.log('confpassword');
                    let inputErrorConfPassword = document.createElement("p");
                    let fieldsetConfPassword = document.querySelector("form:first-of-type fieldset:nth-of-type(4)");
                    
                    inputErrorConfPassword.innerHTML = "Veuillez faire correspondre le mot de passe";
                    inputErrorConfPassword.classList.add("erreur");
                    confPass.classList.add("erreur");
                    fieldsetConfPassword.appendChild(inputErrorConfPassword);
                    
                }else {
                    e.target.submit();
                }
                
            }else {
                e.target.submit();
            }
            
        }else {
            e.target.submit();
        }
        
    }else{
        e.target.submit();
    }
});



