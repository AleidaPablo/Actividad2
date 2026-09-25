function validarCorreo(correo){
    const validarEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validarEmail.test(correo);
}
function validarPassword(password){
    const contraseña=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-#])[A-Za-z\d@$!%*?&._\-#]{8,}$/;
    return contraseña.test(password);
}
function validarLongitud(numero,maxLongitud){
    return String(numero).trim().length <= maxLongitud
}
function calcularEdad(fechaNacimiento){
    const hoy= new Date();
    const nacimiento= new Date(fechaNacimiento);
    let edad= hoy.getFullYear()- nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes<0||(mes===0 && hoy.getDate()<nacimiento.getDate())){
        edad--;
    } 
        return edad;
}
function esMayorDeEdad(fechaNacimiento){
    return calcularEdad(fechaNacimiento)>=18;

}
function soloLetras(texto) {
    const letras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return letras.test(texto);
}
function validarTelefono(telefono){
    const numeroTelf = /^\d{10}$/;
    return numeroTelf.test(String(telefono).trim());
}
function ocultarTexto(texto, visibles=4){
    const text=String(texto);
    if (text.length<= visibles){
        return text;
    }
    const oculto = '*'.repeat(text.length - visibles);
    return oculto + text.slice(-visibles);
}