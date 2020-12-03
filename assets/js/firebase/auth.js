const auth = firebase.auth()

function registar(){

    const registar = document.querySelector("#form_registar")
    registar.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = registar["email_registar"].value
        const password = registar["password_registar"].value
        
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user)

            // Simulate a mouse click:
            window.location.href = "login.html";

        })


    })
}

function login(){

}

