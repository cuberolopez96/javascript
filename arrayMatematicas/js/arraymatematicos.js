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
function ValoresInvalidosException(){
	this.mensaje = "introduce los valores correctos";
}


window.addEventListener("load",function(){
	var matriz1;
	var matriz2;
	var sumar;
	var restar;
	var trasponer1;
	var trasponer2;
	var filas1;
	var columnas1;
	var filas2;
	var columnas2;
	var crearMatrices=document.getElementById("crearMatrices");
	var contenido =  document.getElementById("contenido");

	crearMatrices.addEventListener("click",function(){
		filas1 = document.getElementById("filas1").value;
		columnas1 = document.getElementById("columnas1").value
		filas2 = document.getElementById("filas2").value
		columnas2 = document.getElementById("columnas2").value;		
		if(filas1.length == 0 || filas2.length==0|| columnas1.length ==0 || columnas2.length==0){
			throw new ValoresInvalidosException();
		}
		matriz1 = new ArrayMatematicos(filas1,columnas1);
		matriz2 = new ArrayMatematicos(filas2,columnas2);
		contenido.innerHTML="<p>Matriz1:</p>"+matriz1.toString();
		contenido.innerHTML+="<p>Matriz2:</p>"+matriz2.toString();
		contenido.innerHTML+= "<input type='submit'  id='sumar' value='sumar' />"	
		contenido.innerHTML += "<input type='submit'  id='restar' value='restar' />"	
		contenido.innerHTML += "<input type='submit'  id='trasponer1' value='trasponer1' />"	
		contenido.innerHTML += "<input type='submit'  id='trasponer2' value='trasponer2' />"	
		sumar = document.getElementById("sumar");
		restar=document.getElementById("restar");
		trasponer1=document.getElementById("trasponer1");
		trasponer2=document.getElementById("trasponer2");

		sumar.addEventListener("click",function(){
			contenido.innerHTML+="<p>matriz1 + matriz2:</p>"+matriz1.suma(matriz2).toString();
		});
		restar.addEventListener("click",function(){
			contenido.innerHTML+="<p>matriz1-matriz2:</p>"+matriz1.resta(matriz2).toString();
		});
		trasponer1.addEventListener("click",function(){
			contenido.innerHTML+="<p>matriz1 traspueta:</p>"+matriz1.trasponer().toString();
		});
		trasponer2.addEventListener("click",function(){
			contenido.innerHTML+="<p>matriz2 traspueta:</p>"+matriz2.trasponer().toString();

		});


	


});trasponer

});



