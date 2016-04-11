/**
 * Created by Cubero on 29/03/2016.
 */

    function validarCampo(value, patron, error, nodo) {

        value = value.trim();
        if(patron.test(value)){
            nodo.innerHTML='';
            return true;
        }else{
            nodo.innerHTML = error;
            return false
        }
    }

    /**
     * @param nodo
 * @param dni
 * @param patron
     */
    function validarDni(nodo, dni, patron) {
        if(validarCampo(dni,patron,'El dni no es correcto',nodo)===false){
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
    }

    /**
     * @param nodo
 * @param fecha
 * @param patron
     */
    function validarFecha(nodo, fecha, patron) {
        patron = patron || pfecha;
        if( validarCampo(fecha,patron,'La fecha no es correcta',nodo)== false){
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
    }
function validarRadioButton(radios,nodo){
   for( var radio in radios){

       if(radios[radio].checked==true){
           nodo.innerHTML='';
           return true;
       }

   }
    nodo.innerHTML='selecciona alguna opcion';
    return false;
}
function validarSelect(select, nodo, mensaje) {
    if(select.value == 'default'){
        nodo.innerHTML = mensaje;
        return false;
    }
    nodo.innerHTML = '';
    return true;
}
function validarCheckbox(checkbox,nodo,mensaje){
    if(!checkbox.checked){
        nodo.innerHTML= mensaje;
        return false;
    }
    nodo.innerHTML='';
    return true;
}
