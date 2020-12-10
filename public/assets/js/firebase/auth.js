const auth = firebase.auth()
const db = firebase.firestore()

function registar(){

    const registar = document.querySelector("#form_registar")
    registar.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = registar["email_registar"].value
        const password = registar["password_registar"].value
        
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            // console.log(cred.user)

            // Simulate a mouse click:
            window.location.href = "login.html";

        })

    })
}


function login(){

    const login = document.querySelector("#form_login")
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = login['email_login'].value
        const password = login['password_login'].value

        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred.user)

            window.location.href = "index.html";

        })
    })
}

// TODO NÃO FUNCIONA
function logout(){
    const logout = document.querySelector("#logout")
    logout.addEventListener('click', (e) => {
        e.preventDefault()

        auth.signOut().then(() => {
            console.log('Utilizador fez logout')
        })
    })
}
