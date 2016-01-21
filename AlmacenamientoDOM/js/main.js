(function(){
	window.addEventListener("load",function(){
		var nombre = document.getElementById("nombre");
		var apellidos = document.getElementById("apellidos");
		var sesion1 = document.getElementById("SessionStorage");
		var local1 = document.getElementById("LocalStorage");
		var mensaje = document.getElementById("mensaje");
		if(sessionStorage.getItem("nombre")!=null || sessionStorage.getItem("apellidos")!=null){
			nombre.value = sessionStorage.getItem("nombre");
			apellidos.value= sessionStorage.getItem("apellidos");
			mensaje.innerHTML+= "Tienes guardada una sesión con el nombre "+ sessionStorage.getItem("nombre")+" apellidos " + sessionStorage.getItem("apellidos");
		}
		if(document.cookie != ""){
			mensaje.innerHTML += "<br />cookie = ("+document.cookie+")"; 
		}

		sesion1.addEventListener("click",function(){
				sessionStorage.setItem("nombre",nombre.value);
				sessionStorage.setItem("apellidos",apellidos.value);
				mensaje.innerHTML += "sesion guardada";

		});
		cookie.addEventListener("click",function(){
			document.cookie = "nombre="+nombre.value+";";
			document.cookie = "apellidos="+apellidos.value+";";
			mensaje.innerHTML+="se ha creado una cookie";
		});
	});

})()
