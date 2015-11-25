function ArrayMatematicos(filas,columnas){
	this.filas=filas;
	this.columnas=columnas;
	this.contenido = new Array(this.filas);
	this.setContenidos();
	

}
ArrayMatematicos.prototype.setContenidos= function(){
	for(var i = 0;i< this.filas;i++){
		this.contenido[i]= new Array(this.columnas);
		for (var j = 0; j <this.columnas; j++) {
			this.contenido[i][j] = parseInt(Math.random()*100);
		}
	}
}
ArrayMatematicos.prototype.validar = function(s2){
	if(this.filas === s2.filas && this.columnas === s2.columnas){
		return true;
	}else{
		return false;
	}
}

ArrayMatematicos.prototype.suma = function(sumando2){
	if(!this.validar(sumando2)){
		throw new TamanhoNoValidoException();
	}

	resultado = new  ArrayMatematicos(this.filas,this.columnas);
	for(var i = 0;i < this.filas; i++){
		for(var j = 0;j< this.columnas;j++){
		resultado.contenido[i][j] = this.contenido[i][j] + sumando2.contenido[i][j];
		}
	}
	return resultado;
}
ArrayMatematicos.prototype.resta = function(r2){
	if(!this.validar(r2)){
		throw new TamanhoNoValidoException();
	}

	resultado = new  ArrayMatematicos(this.filas,this.columnas);
	for(var i = 0;i < this.filas; i++){
		for(var j = 0;j< this.columnas;j++){
			resultado.contenido[i][j] = this.contenido[i][j] - r2.contenido[i][j];
		}
	}
	return resultado;

}	
ArrayMatematicos.prototype.trasponer = function(){
	var traspuesta = new ArrayMatematicos(this.columnas,this.filas);

	for(var i = 0; i < this.filas;i++){
		for(var j = 0; j<this.columnas;j++){
			traspuesta.contenido[j][i] = this.contenido[i][j];
		}
	}
	return traspuesta;
}



ArrayMatematicos.prototype.toString = function(){
	var cadena = "<div id='mostrar'><table>";
	for (var i = 0; i < this.filas; i++) {
		cadena+="<tr>";
		for(var j = 0; j < this.columnas;j++){
			cadena += "<td>"+this.contenido[i][j]+"</td>";
		}
		cadena += "</tr>";
	}
	cadena += "</table></div>";
	return cadena;
}
function TamanhoNoValidoException(){
	this.mensaje = "el tamaño no es valido";

}


window.addEventListener("load",function(){
	var  sumar = document.getElementById("sumar");
	var restar = document.getElementById("restar");
	var trasponer1 = document.getElementById("trasponer1");
	var trasponer2 = document.getElementById("trasponer2");
	var contenido = document.getElementById("contenido");
	var m1 = new ArrayMatematicos(2,3);
	var m2 = new ArrayMatematicos(2,3);
	contenido.innerHTML += "<p>Sumando1</p> "+m1.toString();
	contenido.innerHTML += "<p>Sumando2</p> "+m2.toString();
	sumar.addEventListener("click",function(){
		contenido.innerHTML += "<p>Resultado de la Suma: </p>"+m1.suma(m2).toString();

	});
	restar.addEventListener("click",function(){
		contenido.innerHTML +=  "<p>Resultado de la resta</p>"+m1.resta(m2).toString();
	});
	trasponer1.addEventListener("click",function(){
		contenido.innerHTML += "<p>Matriz 1 traspuesta</p>"+ m1.trasponer().toString();
	});
	trasponer2.addEventListener("click",function(){
		contenido.innerHTML += "<p>Matriz 2 traspuesta</p>"+ m2.trasponer().toString();
	});

})



