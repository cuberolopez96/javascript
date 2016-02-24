(function(){
	var unombre,uapellidos,udni,usexo,aceptar,crearNU,limpiar;
	var pna = "^.+$";
	var pdni = "^\\d{8}[A-Za-z]$";
	var errornombre="Escribe el nombre";
	var errorapellido="Escribe el apellido";
	var errordni = "Escribe el dni";
	var erroraceptar = "Acepta la condiciones";
	function Usuario(nombre,apellidos,dni,sexo){
		this.nombre=nombre;
		this.apellidos=apellidos;
		this.dni=dni.toUpperCase();
		this.sexo=sexo;
	}
	Usuario.prototype.mostrar=function(){
		var item = document.createElement("p");
		var texto = document.createTextNode("Nombre: "+this.nombre+" Apellidos:" + this.apellidos + " Dni: " + this.dni+ " Sexo:" +this.sexo);
		item.appendChild(texto)
		return item;
	}
	Usuario.prototype.crearListItem = function(){
		item = document.createElement("li");
		datos=document.createTextNode("Nombre: "+this.nombre+", Apellidos: "+this.apellidos+", Dni: "+this.dni+", Sexo: "+this.sexo);
		item.appendChild(datos);
		return item
		  
	};
	function comprobarDato(id,valor,patron,mensaje){
		pattern = new RegExp(patron);
		if(!pattern.test(valor)){
			document.getElementById(id).innerHTML=mensaje;
			return false;
		}else{
			document.getElementById(id).innerHTML="";
			return true;
		}

	}
	function comprobarAceptar(){
		if(!aceptar.checked) {
			document.getElementById('saceptar').innerHTML=erroraceptar;
			return false;
		}else{
			document.getElementById('saceptar').innerHTML="";
			return true;}
	}
	function darFechaCookie(duracion){
		var date = new Date();
		date.setTime(date.getTime() + duracion*24*60*60*1000);
		return date.toUTCString();
	}


	function crearCookie(nombre,apellidos,dni,sexo,duracion){
            document.cookie="nombre="+nombre+"; expires="+darFechaCookie(duracion);
            document.cookie="Apellidos="+apellidos+"; expires="+darFechaCookie(duracion);
            document.cookie="dni="+dni+"; expires="+darFechaCookie(duracion);
            document.cookie="sexo="+sexo+"; expires="+darFechaCookie(duracion);
        }

	window.addEventListener('load', function() {
		unombre = document.getElementById('nombre');
		uapellidos = document.getElementById('apellidos');
		udni= document.getElementById('dni');
		usexo = document.getElementById('sexo');
		aceptar = document.getElementById('aceptar');
		crearNU = document.getElementById('nuevoUsuario');
		limpiar = document.getElementById('limpiar');
			unombre.addEventListener('blur', function() {
				comprobarDato('snombre',unombre.value,pna,errornombre);
	
			});
			uapellidos.addEventListener('blur', function() {
				comprobarDato('sapellidos',uapellidos.value,pna,errorapellido);

	
			});
			udni.addEventListener('blur', function() {
				comprobarDato('sdni',udni.value,pdni,errordni);
			});
			aceptar.addEventListener('blur', function() {
				comprobarAceptar();
			});

			crearNU.addEventListener('click', function() {
				var validarnombre = comprobarDato('snombre',unombre.value,pna,errornombre);
				var validarapellido = comprobarDato('sapellidos',uapellidos.value,pna,errorapellido);
				var validardni = comprobarDato('sdni',udni.value,pdni,errordni);
				var validaraceptar = comprobarAceptar();

				if(validarnombre&&validarapellido&&validardni&&validaraceptar){


					var usuario = new Usuario(unombre.value,uapellidos.value,udni.value,usexo.value);
					document.getElementById('datosUsuarios').appendChild(usuario.mostrar());
					document.getElementById('listaUsuarios').appendChild(usuario.crearListItem());
					crearCookie(usuario.nombre,usuario.apellidos,usuario.dni,usuario.sexo,50);


				}
				
			});
			limpiar.addEventListener('click', function() {
				unombre.value="";
				uapellidos.value="";
				udni.value="";
				document.getElementById('aceptar').checked=false;
				document.getElementById('saceptar').innerHTML="";
				document.getElementById('snombre').innerHTML="";
				document.getElementById('sdni').innerHTML="";
				document.getElementById('datosUsuarios').innerHTML="";
				document.getElementById('listaUsuarios').innerHTML="";
				crearCookie("","","","",-60);
				
			});
		
	});
})();