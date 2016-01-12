(function(){
	var nombre,dni,correo,edad,fnacimiento,urlblog,telefono,genero;

	function comprobarCampoTexto(texto,patron){
		var pattern = RegExp(patron);
		return pattern.test(texto);
	}
	function comprobarDni(dni){
		var cifras = dni.substr(0,8);
		var letra = dni.substr(8,9);
		var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
		var contador = 0;
		for(var i = 0;i<=7;i++){
			contador += parseInt(dni.charAt(i));

		}
		if(letra != letras[parseInt(contador/23)])
			return false;
		return true;
	}
	function comprobarFecha(fecha){
		fecha = fecha.split("/");
		var dia = fecha[0];
		var mes = fecha[1];
		var anho = fecha[2];
		fecha = new Date();
		fecha.setDate(dia);
		fecha.setMonth(mes - 1);
		fecha.setFullYear(anho);
		var hoy = new Date();
		if(hoy.getTime() - fecha.getTime())
			return false;
		if(dia != fecha.getDate())
			return false;
		if(mes != fecha.getMonth() - 1)
			return false;
		if(anho != fecha.getFullYear())
			return false;
		return true;
	}
	window.addEventListener("load",function(){
		var error = document.getElementById("error");
		var enviar = document.getElementById("enviar");
		nombre = document.getElementById("nombre");
		dni = document.getElementById("dni");
		correo= document.getElementById("correo");
		fnacimiento = document.getElementById("fnacimiento");
		edad = document.getElementById("edad");
		urlblog = document.getElementById("urlblog");
		telefono = document.getElementById("telefono");
		genero = document.getElementsByName("genero");

		nombre.addEventListener("blur",function(){
			if(!comprobarCampoTexto(nombre.value,"^.+$")){
				error.innerHTML = "nombre invalido";
				nombre.className = "invalido";
			}
		});
		dni.addEventListener("blur",function(){
			if(!comprobarCampoTexto(dni.value,"^\\d{8}[A-Z]")||!comprobarDni(dni.value)){
				error.innerHTML = "dni invalido";
				dni.className = "invalido";
			}
		});
		
	});
})()