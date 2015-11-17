window.addEventListener("load",function(){
	//declaracion  de variables
	var aleatorio = document.getElementById("aleatorio");

	var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
	//valor aleatorio
	aleatorio.innerHTML += arr[Math.round(Math.random() * (arr.length - 1))];

});