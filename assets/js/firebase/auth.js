const registar = document.querySelector("#form_registar");
registar.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(registar['nome_registar'].value);

    //const email = registar["email_registar"].value;
    const password = document.getElementById("password_registar").value;

    window.alert(" "+password); 

});