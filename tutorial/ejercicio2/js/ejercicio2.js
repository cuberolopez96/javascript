window.addEventListener("load",function(){
	//declaracion  de variables
	var aleatorio = document.getElementById("aleatorio");

	var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
	//valor aleatorio de arr
	aleatorio.innerHTML += arr[Math.round(Math.random() * (arr.length - 1))];

});