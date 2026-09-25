document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');
    const modal = document.getElementById('modalResultado');
    const modalMensaje = document.getElementById('modalMensaje');
    const botonLogin = document.getElementById('botonLogin');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellidos').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fechaNacimiento').value;

        if (!soloLetras(nombre)) {
            alert('El nombre solo debe tener letras.');
            return;
        }
        if (!soloLetras(apellido)) {
            alert('Los apellidos solo debe tener letras.');
            return;
        }

        if (!validarTelefono(telefono)) {
            alert('El teléfono debe tener 10 dígitos numéricos.');
            return;
        }
        const edad = calcularEdad(fecha);
        const mayor = esMayorDeEdad(fecha);
        const telOculto = ocultarTexto(telefono, 4);
        if (mayor) {
            modalMensaje.textContent = `Hola ${nombre}, tienes ${edad} años. Teléfono: ${telOculto}. Acceso al login permitido.`;
            botonLogin.classList.remove('boton-deshabilitado');
        } else {
            modalMensaje.textContent = `Hola ${nombre}, tienes ${edad} años. Acceso al Login denegado.`;
            botonLogin.classList.add('boton-deshabilitado');
        }

        modal.style.display = 'flex';
    });
});
function cerrarModal() {
    const modal = document.getElementById('modalResultado');
    if (modal) {
        modal.style.display = 'none';
    }
}