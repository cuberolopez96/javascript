/**
 * Created by Juan Antonio on 30/01/2016.
 */

(function() {
    function añadirNodo(nodoPadre, nodoHijo) {
        nodoPadre.appendChild(nodoHijo);
    }

    function crearTexto(texto){
        var element = document.createTextNode(texto);
        return element;
    }
    function crearElemento(nombreEtiqueta){
        var element = document.createElement(nombreEtiqueta);
        return element;
    }

    window.addEventListener("load",function(){
       var html = document.getElementsByTagName("html")[0]
        var body = html.lastChild
        var nHijosBody = body.childNodes.length;
        var pbody = crearElemento("p");
        var tpbody = crearTexto("Hola a Todos");
        añadirNodo(pbody,tpbody);
        añadirNodo(body,pbody);
        var nnbody = crearElemento("p");
        var tnnbody = crearTexto("El numero de nodos del body es: "+nHijosBody);
        añadirNodo(nnbody,tnnbody);
        añadirNodo(body,nnbody);

        
    });
})()
