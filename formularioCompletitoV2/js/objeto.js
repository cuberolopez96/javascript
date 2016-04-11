(function() {
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
	var form= {
		validarCampo: function(value, patron, error, nodo){
			value = value.trim();
	        if(patron.test(value)){
	            nodo.innerHTML='';
	            return true;
	        }else{
	            nodo.innerHTML = error;
	            return false
	        }
		},
		validarDni: function(nodo, dni, patron){
			if(this.validarCampo(dni,patron,'El dni no es correcto',nodo)===false){
	            return false;
	        }
	        var letra = dni.substr(8, 8);
	        var numeros = dni.substr(0,8);
	        var letras = 'TRAGMYFPDXBNJZSQVHLCKET';
	        var modulo = parseInt(numeros)%23;
	        if(letras.substr(modulo,modulo)==letra){

	            nodo.innerHTML='';
	            return true
	        }else{
	            nodo.innerHTML='El Dni no es valido';
	            return false;
	        }
		},
		validarFecha:function(nodo, fecha, patron){
			 patron = patron || pfecha;
		        if( this.validarCampo(fecha,patron,'La fecha no es correcta',nodo)== false){
		            return false;
		        }
		        var afecha = fecha.value.split(/[\s -/]/);
		        var dia = afecha[0];
		        var mes = afecha[1];
		        var anho = afecha[2];
		        var date = new Date();
		        date.setDate(dia);
		        date.setMonth(mes - 1);
		        date.setFullYear(anho);
		        if(date.getDate()== dia){
		            nodo.innerHTML='';
		            return true;
		        }else{
		            nodo.innerHTML = 'La fecha no es valida';
		            return false;
		        }
		},
		validarRadioButton: function(radios,nodo){
			for( var radio in radios){

			       if(radios[radio].checked==true){
			           nodo.innerHTML='';
			           return true;
			       }

			   }
			    nodo.innerHTML='selecciona alguna opcion';
			    return false;
		},
		validarSelect:function(select, nodo, mensaje){
			if(select.value == 'default'){
		        nodo.innerHTML = mensaje;
		        return false;
		    }
		    nodo.innerHTML = '';
		    return true;
		},
		validarCheckbox:function(checkbox,nodo,mensaje){
			if(!checkbox.checked){
		        nodo.innerHTML= mensaje;
		        return false;
		    }
		    nodo.innerHTML='';
		    return true;
		}
		
		
	}
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
            form.validarCampo(nombre.value,pnombre,'el nombre no es correcto',snombre);
        });
        apellidos.addEventListener('blur',function(){
            form.validarCampo(apellidos.value,pnombre,'El apellido no es correcto',sapellidos);
        });

        dni.addEventListener('blur',function(){
           form.validarDni(sdni,dni.value,pdni);
        });

        correo.addEventListener('blur',function(){
            form.validarCampo(correo.value,pcorreo,'El correo es incorrecto',scorreo);
        });
        alias.addEventListener('blur',function(){

            form.validarCampo(alias.value,palias,'El alias no es correcto',salias)
        });
        fecha.addEventListener('blur',function(){
           form.validarFecha(sfecha, fecha.value, pfecha);

        });
        iban.addEventListener('blur',function(){
            form.validarCampo(iban.value,piban,'El iban no es correcto',siban);
        });
        telefono.addEventListener('blur',function(){
            form.validarCampo(telefono.value,ptelefono,'el telefono no es correcto',stelefono);
        });
        url.addEventListener('blur',function(){
            form.validarCampo(url.value,purl,'La url no es correcta',surl);
        });
        localizacion.addEventListener('focus',function(){
            form.validarRadioButton(radios,sgenero);
        });
        localizacion.addEventListener('blur',function(){
            form.validarSelect(localizacion,slocalizacion,'escoja una localización');
        });
        aceptar.addEventListener('blur',function(){
            form.validarCheckbox(aceptar,saceptar,'Acepta las condiciones');
        });
        password.addEventListener('blur',function(){
            form.validarCampo(password.value,ppassword,'la contraseña es incorrecta',spassword);
        });
    })
})()