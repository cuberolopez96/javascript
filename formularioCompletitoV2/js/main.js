/**
 * Created by Cubero on 28/03/2016.
 */

(function(){
    // elementos del DOM
    var nombre,
        apellidos,
        alias,
        fecha,
        dni,
        iban,
        correo,
        telefono,
        password,
        genero,
        idefault,
        radios,
        aceptar,
        url,
        localizacion;
    // patrones de las expresiones regulares
    var ppassword,pdni,ptelefono,pcorreo,palias,piban,pfecha,
        pnombre = /^([\wà-ý]{2}[\wà-ý]+\s*)+$/,
        pdni = /^\d{8}[a-zA-Z]$/,
        ptelefono = /^\d{9}$/,
        pcorreo=/^\\w+@\\w+\\.\\w{2,3}$/,
        palias = /^[\w!-~ñÑ\s]{5,15}$/,
        pfecha = /^(\d\d[\s -/]){2}\d{4}$/,
        piban = /^ES\d{22}$/,
        ppassword = /(?=[A-Z])(?=[a-z])(?=[!-Z@^\\|_])(\d{2}) /g,
        purl=/^http:[/]{2}.+\\..+/;


    // spans
    var snombre,
        sapellidos,
        scorreo,
        sdni,
        salias,
        sfecha,
        siban,
        stelefono,
        saceptar,
        sgenero,
        slocalizacion,
        spassword,
        surl;



    window.addEventListener('load',function(){
        //inicializacion de elementos arbol DOM
        aceptar = document.getElementById('aceptar');
        nombre = document.getElementById('nombre');
        apellidos = document.getElementById('apellidos');
        correo = document.getElementById('correo');
        fecha = document.getElementById('fecha');
        dni = document.getElementById('dni');
        iban = document.getElementById('iban');
        telefono = document.getElementById('telefono');
        genero = document.getElementById('genero');
        idefault = document.getElementById('default');
        localizacion =  document.getElementById('localizacion');
        radios = document.getElementsByClassName('genero');
        alias = document.getElementById('alias');
        url=document.getElementById('url');
        password = document.getElementById('password');
        //inicializacion span
        snombre = document.getElementById('snombre');
        sapellidos = document.getElementById('sapellidos');
        scorreo = document.getElementById('scorreo');
        sfecha = document.getElementById('sfecha');
        sgenero = document.getElementById('sgenero');
        sdni = document.getElementById('sdni');
        siban = document.getElementById('siban');
        slocalizacion = document.getElementById('slocalizacion');
        stelefono = document.getElementById('stelefono');
        saceptar = document.getElementById('saceptar');
        surl = document.getElementById('surl');
        salias= document.getElementById('salias');
        spassword = document.getElementById('spassword');
        //gestion de eventos
        nombre.addEventListener('blur',function(){
            validarCampo(nombre.value,pnombre,'el nombre no es correcto',snombre);
        });
        apellidos.addEventListener('blur',function(){
            validarCampo(apellidos.value,pnombre,'El apellido no es correcto',sapellidos);
        });

        dni.addEventListener('blur',function(){
           validarDni(sdni,dni.value,pdni);
        });

        correo.addEventListener('blur',function(){
            validarCampo(correo.value,pcorreo,'El correo es incorrecto',scorreo);
        });
        alias.addEventListener('blur',function(){

            validarCampo(alias.value,palias,'El alias no es correcto',salias)
        });
        fecha.addEventListener('blur',function(){
           validarFecha(sfecha, fecha.value, pfecha);

        });
        iban.addEventListener('blur',function(){
            validarCampo(iban.value,piban,'El iban no es correcto',siban);
        });
        telefono.addEventListener('blur',function(){
            validarCampo(telefono.value,ptelefono,'el telefono no es correcto',stelefono);
        });
        url.addEventListener('blur',function(){
            validarCampo(url.value,purl,'La url no es correcta',surl);
        });
        localizacion.addEventListener('focus',function(){
            validarRadioButton(radios,sgenero);
        });
        localizacion.addEventListener('blur',function(){
            validarSelect(localizacion,slocalizacion,'escoja una localización');
        });
        aceptar.addEventListener('blur',function(){
            validarCheckbox(aceptar,saceptar,'Acepta las condiciones');
        });
        password.addEventListener('blur',function(){
            validarCampo(password.value,ppassword,'la contraseña es incorrecta',spassword);
        });
    })
})();