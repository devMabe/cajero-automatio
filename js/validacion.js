
function ingesar() {
	var usuario = document.getElementById('user').value;
	var clave = document.getElementById('pass').value;
	var boton = document.getElementById('ingresar');

	//validar campos vacios
	if (usuario == '' || clave == '') {
		swal({
			title: "Banco Afonca S.A",
			text: "Verifique que los campos no esten vacios!",
			icon: "warning",
		});
		limpiar();
	}
	
	//validar tamaño de clave para que sean solo 4 dígitos
	if (clave.length > 4) {
		swal({
			title: "Banco Afonca S.A",
			text: "la clave consta de 4 digitos!",
			icon: "error",
		});
		limpiar();
	}
	if (usuario != '' && clave != '' && clave.length<=4) {
		window.location.assign('opciones.html');
		limpiar();
	}

	limpiar();
	console.log(usuario + " " + clave);
}



function limpiar() {
	document.getElementById('user').value = "";
	document.getElementById('pass').value = "";
	document.getElementById('user').focus();
}

