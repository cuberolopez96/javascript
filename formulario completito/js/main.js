(function(){
	var dni,nombre,correo,edad,fnacimiento,urlblog,telefono,masculino,femenino;

	function validarCampoVacio(text){
		patron = RegExp(".+");
		if(patron.test(text))
			return true;
		else
			return false;
	}
	function validarCorreo(correo){
		var patron = RegExp("^.+@.+\\..+$");
		if(patron.test(correo))
			return true;
		else
			return false;
	}
	function validarEdad(numero){
		var patron = RegExp("\\d+");
		if(patron.test(numero)){
			return true;
		}else{
			return false;
		}

	}
	function validarFecha(fecha){
		var patron = RegExp("^\\d\\d/\\d\\d/\\d\\d\\d\\d$");
		if(patron.test(fecha)){
			fecha = fecha.split("/");
			var dia = fecha[0];
			var mes = fecha[1];
			var anho = fecha[2];
			var fecha = new Date();
			var hoy  = new Data();
			fecha.setDate(dia);
			fecha.setMonth(mes - 1);
			fecha.setFullYear(anho);
			if(hoy.getTime() - fecha.getTime()< 0){
				return false;
			}else{
				if(fecha.getDate()== dia && fecha.getMonth() == mes - 1&& fecha.getFullYear() == anho){
					return true;
				}else{
					return false;
				}
			}


		}else{
			return false;
		}
	}
	function validarDni(dni){
		var cifras = dni.substr(0,8);
		var letra = dni.substr(8,9);
		var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
		var sumatorio = 0;
		var patron = RegExp("^\\d{8}[A-Z]$");
		if(patron.test(dni)){
			for(i = 0; i<=9;i++){
				sumatorio += cifras.charAt(i);
			}
			if(letra == letras[(sumatorio%23)]){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}

	}
	function validarCuenta(iban){
		var patron = RegExp("^ES\\d{22}$");
		if(patron.test(iban))
			return true;
		else
			return false;

	}
	function validarTelefono(telefono){
		var patron = RegExp("^\\d{9}$");
		if(patron.test(telefono))
			return true;
		else
			return false;
	}
	window.addEventListener("load",function(){
		var enviar = document.getElementById("enviar");
		var error = document.getElementById("error");
		 nombre =document.getElementById("nombre");
		 dni = document.getElementById("dni");
		 correo = document.getElementById("correo");
		 edad = document.getElementById("edad");
		 masculino = document.getElementById("masculino");
		 femenino = document.getElementById("femenino");

		 fnacimiento = document.getElementById("fnacimiento");
		 telefono = document.getElementById("telefono");
		 nombre.addEventListener("blur",function(){
			if(validarCampoVacio(nombre.value)== false){
				nombre.className = "invalido";
				error.innerHTML = "campo vacio";
				nombre.focus();

			}
		});
		dni.addEventListener("blur",function(){
			if(validarDni(dni.value)== false){
				dni.className = "invalido";
				error.innerHTML = "dni invalido";
				dni.focus();
				
			}
		});

		fnacimiento.addEventListener("blur",function(){
			if(validarFecha(fnacimiento.value)== false){
				fnacimiento.className = "invalido";
				error.innerHTML = "dni invalido";
				fnacimiento.focus();
				
			}
		});
		
		correo.addEventListener("blur",function(){
			if(validarCorreo(correo.value)== false){
				correo.className = "invalido";
				error.innerHTML = "correo invalido";
				correo.focus();
			}
		});
		edad.addEventListener("blur",function(){
			if(validarEdad(edad.value)== false){
				edad.className = "invalido";
				error.innerHTML = "edad invalida";
				edad.focus();
			}
		});
		
		telefono.addEventListener("blur",function(){
			if(validarTelefono(telefono.value)== false){
				telefono.className = "invalido";
				error.innerHTML = "telefono invalido";
				telefono.focus();
			}
		});
		
		
		
		
		
			



		});


	})();

	

