window.addEventListener("load",function(){
	//declaracion de variables
	var original = document.getElementById("original");
	var reemplazado = document.getElementById("reemplazado");
	var añadido = document.getElementById("añadido");
	var eliminado = document.getElementById("eliminado");

	//creacion del array styles
	var styles = ["jazz","blues"];

	original.innerHTML+= "<h3>original</br>"+styles+"</h3>";

	//adicion de Rock and roll
	styles.push("Rock and roll");
	añadido.innerHTML += "<h3>añadido</br>"+styles+"</h3>";
	//reemplazar  second valor
	styles[1]  = "Classics";
	reemplazado.innerHTML += "<h3>reemplazado</br>"+styles+"</h3>";
	//extraer el ultimo valor
	eliminado.innerHTML += "<h3>eliminado</br>"+styles.pop()+"</h3>";
});