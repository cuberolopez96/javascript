window.addEventListener("load",function(){
	var boton = document.getElementById("pulsar");
	
	boton.addEventListener("click",function(){
		ventana1=abrirventana();
		ventana2=abrirventana();
		ventana3=abrirventana();
		ventana4=abrirventana();
		ventana5=abrirventana();	
			
			

	})
	function abrirventana(){
		var ventana = window.open();
		ventana.document.write("<html><head><script src='js/child.js'></script></head><body><input type='submit' id='cerrar' value='cerrar' /></body></html>");
		return ventana;
	}
});