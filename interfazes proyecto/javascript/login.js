document.addEventListener('DOMContentLoaded', function() {
    
    // Validación para el formulario de inicio de sesión de estudiantes
    const formEstudiante = document.querySelector('form');
    
    if (formEstudiante) {
        formEstudiante.addEventListener('submit', function(event) {
            const correoInput = document.getElementById('correo');
            const passwordInput = document.getElementById('password');

            // Validamos que estemos en la página de inicio de sesión (verificando si existe el campo de correo)
            if (correoInput && passwordInput) {
                const correo = correoInput.value.trim();
                const password = passwordInput.value.trim();

                // Validar dominio de correo institucional ULEAM usando la función de utilidades.js
                if (!validarCorreoUleam(correo)) {
                    alert('Error: Debe ingresar un correo institucional válido de la ULEAM (ej. usuario@live.uleam.edu.ec).');
                    event.preventDefault();
                    return;
                }

                // Validar que la contraseña no esté vacía y tenga un mínimo de seguridad
                if (password.length < 6) {
                    alert('Error: La contraseña debe tener al menos 6 caracteres.');
                    event.preventDefault();
                    return;
                }
            }
        });
    }

    // Validación para el formulario de inicio de sesión del Guardia
    const formGuardia = document.querySelector('form');
    const usuarioGuardia = document.getElementById('usuario_guardia');

    if (formGuardia && usuarioGuardia) {
        formGuardia.addEventListener('submit', function(event) {
            const userVal = usuarioGuardia.value.trim();
            const passVal = document.getElementById('password_guardia').value.trim();

            if (userVal === "" || passVal === "") {
                alert('Por favor, complete todos los campos de usuario y contraseña.');
                event.preventDefault();
                return;
            }
        });
    }

});