	window.onload = function(){document.write("<h1>Ventana nueva</h1>");
		document.write("<h3>URL:"+document.URL+"</h3>");
		document.write("<h3>PROTOCOLO:"+Location.protocol+"</h3>");
		document.write("<h3>ID NAVEGADOR:"+navigator.id+"</h3>");
		document.write("<h3>JAVA ACTIVADO:"+navigator.javaEnabled()+"</h3>");
		var ventanaNueva2 = window.open("http://moodle.iesgrancapitan.org");
		var ventanaPadre = window.opener;
		ventanaPadre.document.write("<h1>Tarea 3 del Tema 3</h1>");
		ventanaPadre.document.write("NOMBRE:<input type='text' id='nombre'/></br>APELLIDOS:<input type='text'  id='apellidos'/></br>DIA:<input type='text' id='dia'/></br>MES:<input type='text' id='mes'/></br>ANHO:<input type='text' id='anho'/></br><input type='submit' id='enviar'/>");
		var enviar = ventanaPadre.document.getElementById("enviar");
		enviar.addEventListener("click",function(){
		var nombre = ventanaPadre.document.getElementById("nombre").value;
		var apellidos = ventanaPadre.document.getElementById("apellidos").value;
		var dia = ventanaPadre.document.getElementById("dia").value;
		var mes = ventanaPadre.document.getElementById("mes").value;
		var anho = ventanaPadre.document.getElementById("anho").value;
		ventanaPadre.document.write("<p>Buenos dias "+nombre+"</p>");
		
		
		ventanaPadre.document.write("<p> tu nombre tiene "+nombre.length+" caracteres</p>");
		var nombreSinEspacios = nombre.toLowerCase().split(" ").join();
		ventanaPadre.document.write("<p>el primer indice de E es:"+nombre.indexOf("e")+"</p>");
		ventanaPadre.document.write("<p>el ultimo indice de E es:"+nombre.lastIndexOf("e")+"</p>");
		var nombreincompleto = nombre.substr(0,nombre.length - 3);
		ventanaPadre.document.write("<p>nombre menos los tres ultimos caracteres "+nombreincompleto+"</p>");
		var fechaNacimiento = new Date(anho,mes,dia);
		var hoy = new Date();
		ventanaPadre.document.write("<p>tienes:"+(hoy.getFullYear() - fechaNacimiento.getFullYear())+"</p>");





	});

		

	}