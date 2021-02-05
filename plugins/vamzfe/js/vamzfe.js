  function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }//if(key == especiales[i])
     }//for(var i in especiales)

     if(letras.indexOf(tecla)==-1 && !tecla_especial){
         return false;
     }//if(letras.indexOf(tecla)==-1 && !tecla_especial)
 }//function soloLetras(e)

 function soloNumeros(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }
     }

     if(letras.indexOf(tecla)==-1 && !tecla_especial){
         return false;
     }
 }

 function soloLetrasNumeros(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz0123456789";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }//if(key == especiales[i])
     }//for(var i in especiales)

     if(letras.indexOf(tecla)==-1 && !tecla_especial){
         return false;
     }//if(letras.indexOf(tecla)==-1 && !tecla_especial)
 }//function soloLetrasNumeros(e)

 function sku(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "abcdefghijklmnopqrstuvwxyz0123456789-";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }//if(key == especiales[i])
     }//for(var i in especiales)

     if(letras.indexOf(tecla)==-1 && !tecla_especial){
         return false;
     }//if(letras.indexOf(tecla)==-1 && !tecla_especial)
 }//function sku(e)