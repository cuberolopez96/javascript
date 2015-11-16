
function abrir(){
	var ventanaNueva = window.open();
	ventanaNueva.document.open();
	ventanaNueva.document.write("<script src = 'js/ventana1.js'></script>");
	ventanaNueva.document.close();


}

window.onload=abrir();


