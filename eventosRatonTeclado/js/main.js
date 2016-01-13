(function(){
	function leerEvento(elevento){
		var  evento = elevento;
		switch(evento.type){
			case "mousemove":
				document.getElementById("coordenadasX").innerHTML= evento.screenX;
				document.getElementById("coordenadasY").innerHTML= evento.screenY;

				break;
			case "keypress":
				document.getElementById("caracterPulsado").innerHTML= String.fromCharCode(evento.charCode);
				document.getElementById("codigoCaracter").innerHTML=evento.keyCode;
				break;
		}

	}	
	window.addEventListener("load",function(){
			window.addEventListener("mousemove",leerEvento);
			window.addEventListener("keypress",leerEvento);
		});
		
})();