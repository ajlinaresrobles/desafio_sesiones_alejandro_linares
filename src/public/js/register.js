console.log("register js");

const emailFieldRegister = document.getElementById("emailFieldRegister");
const btn_register = document.getElementById("btn_register")


btn_register.addEventListener("click", ()=>{
	
	const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if( !validEmail.test(emailFieldRegister.value) ){
		alert(`${emailFieldRegister.value} no cumple con el formato de correo electrónico`);
    };
})