

window.addEventListener("load",function(){


	var nombre;
	var raza;
	var peso;
	var crear = document.getElementById("crear");

	crear.addEventListener("click",function(){
		nombre = document.getElementById("nombre").value;
		raza = document.getElementById("raza").value;
		peso = document.getElementById("peso").value;

		NuevaVentana = window.open();
		NuevaVentana.nombre = nombre;
		NuevaVentana.raza = raza;
		NuevaVentana.peso = peso;
		NuevaVentana.document.open();
		NuevaVentana.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8' /><title>Document</title><script src='js/child.js'></script></head><body><header><h1>"+nombre+"</h1></header><img src='img/gato.png' id='imagen' height='300px' width='300px' /><input type='submit'  id='jugar' name='jugar' value='jugar'><input type='submit'  id='comer' name='comer' value='comer'><input type='submit' id='dormir' name='dormir' value='dormir'> <div id='informacion'></div></body></html>");
		NuevaVentana.document.close();
		
	})


});