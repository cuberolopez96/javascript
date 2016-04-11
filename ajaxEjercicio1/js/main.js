/**
 * Created by Cubero on 07/03/2016.
 */
(function(){
    var contenidos,url,mostrar,estados,cabeceras;
    var READY_STATE_COMPLETE = 4;
    var peticion = new XMLHttpRequest();
    var aestados = ['not found','OK','redirecionando','not found','continue'];
    function cargaContenido(url,metodo,funcion){


        if(peticion){
            peticion.onreadystatechange= funcion;
            peticion.open(metodo,url,true);
            peticion.send(null);
        }

    }



    function mostrarContenido(){
        estados.innerHTML += aestados[peticion.status/100] + '\n';
        if(peticion.readyState == READY_STATE_COMPLETE){

            if(peticion.status == 200){
                contenidos.innerHTML= peticion.responseText;
                cabeceras.innerHTML += peticion.getAllResponseHeaders();

            }
        }

    }
    function cargarDatos(url){
        cargaContenido(url,'GET',mostrarContenido);
    }

    window.addEventListener('load',function(){
         contenidos = document.getElementById('contenidos');
        estados = document.getElementById('estados');
        cabeceras = document.getElementById('cabeceras');
         url = document.getElementById('textoi');
         mostrar = document.getElementById('mostrar');
        contenidos.innerHTML=location.href;
        mostrar.addEventListener('click',function(){
           cargarDatos(url.value);
        });

    })
})()