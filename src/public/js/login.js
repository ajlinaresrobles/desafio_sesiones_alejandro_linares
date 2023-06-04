console.log("login js");

const emailFieldLogin = document.getElementById("emailFieldLogin");
const btn_login = document.getElementById("btn_login");



btn_login.addEventListener("click", ()=>{

	const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( !validEmail.test(emailFieldLogin.value) ){
		alert(`${emailFieldLogin.value} no cumple con el formato de correo electrónico`);
    };
});


