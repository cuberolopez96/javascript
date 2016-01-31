
function Gato(nombre,raza,peso){
	this.nombre = nombre;
	this.raza = raza;
	this.peso = peso;
}
Gato.prototype.jugar = function(){
	this.peso--;
}
Gato.prototype.comer=function(){
	this.peso++;
}
Gato.prototype.dormir=function(){
	return "zzzzzzzz";
}

Gato.prototype.toString = function(){
	return "hola soy " + this.nombre + " soy un " + this.raza + " y peso " + this.peso + "kg";
}



var gato = new Gato(nombre,raza,peso);
window.addEventListener("load",function(){
	var jugar  = document.getElementById("jugar");
	var comer = document.getElementById("comer");
	var dormir = document.getElementById("dormir");
	var informacion = document.getElementById("informacion");
	informacion.innerHTML = "<p><strong>"+gato.toString()+"</strong></p>";
	try{jugar.addEventListener("click",function(){
			if(gato.peso < 1 || gato.peso > 20){
				throw "gato muerto";
			}
			gato.jugar();
			informacion.innerHTML = "<p><strong>"+gato.toString()+"</strong></p>";
			document.getElementById('imagen').src='img/gatojugando.png';
			
	
	
		});
		comer.addEventListener("click",function(){
			if(gato.peso < 1 || gato.peso > 20){
				throw "gato muerto";
			}
			gato.comer();
			informacion.innerHTML = "<p><strong>"+gato.toString()+"</strong></p>";
	
			document.getElementById('imagen').src='img/gatocomiendo.png';
	
	
		});
		dormir.addEventListener("click",function(){
			if(gato.peso < 1 || gato.peso > 20){
				throw "gato muerto";
			}
			document.getElementById('imagen').src='img/gatodurmiendo.png';
			informacion.innerHTML = "<p><strong>"+gato.dormir()+"</strong></p>";
	
		});}catch(e){
			document.getElementById('imagen').src='img/gatomuerto.png';
			informacion.innerHTML = "<p><strong>"+e+"</strong></p>";

		}
		

	
});
