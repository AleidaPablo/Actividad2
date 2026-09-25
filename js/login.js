document.addEventListener('DOMContentLoaded',()=>{
    const formularioLogin=document.getElementById('formularioLogin');
    if(formularioLogin){
        formularioLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const correo = document.getElementById('correoLogin').value;
            const password = document.getElementById('passwordLogin').value;

            if (!validarCorreo(correo)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            if (!validarPassword(password)) {
                alert('La contraseña debe tener mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial.');
                return;
            }

            alert('¡Ha iniciado sesión con éxito!');
        });
    }
});