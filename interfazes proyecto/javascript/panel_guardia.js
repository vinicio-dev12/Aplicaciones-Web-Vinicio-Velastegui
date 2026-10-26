document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Validación y simulación de búsqueda de TAG / Placa de Estudiante
    const btnVerificar = document.querySelector('.card-box button');
    const inputBuscar = document.getElementById('buscar_tag');

    if (btnVerificar && inputBuscar) {
        btnVerificar.addEventListener('click', function(e) {
            e.preventDefault();
            const valorBusqueda = inputBuscar.value.trim();

            if (valorBusqueda === "") {
                alert('Por favor, ingrese un código TAG o número de placa para verificar.');
                return;
            }

            // Simulación de verificación exitosa en el sistema ULEAM
            alert('¡Acceso verificado con éxito! Vehículo autorizado para ingresar al campus.');
        });
    }

    // 2. Validación de la placa del visitante eventual al generar ticket
    const btnGenerarTicket = document.querySelector('.card-box:nth-child(2) button');
    const inputPlacaEventual = document.getElementById('placa_eventual');

    if (btnGenerarTicket && inputPlacaEventual) {
        btnGenerarTicket.addEventListener('click', function(e) {
            e.preventDefault();
            const placa = inputPlacaEventual.value.trim();

            // Usamos la función de validación de placa definida en utilidades.js
            if (!validarPlacaVehiculo(placa)) {
                alert('Error: La placa del visitante eventual no es válida. Use el formato correcto (Ej. XYZ-5678).');
                return;
            }

            alert(`Ticket de entrada generado correctamente para la placa: ${placa.toUpperCase()}. Tarifa: $1.00 por hora.`);
            inputPlacaEventual.value = ""; // Limpiar campo
        });
    }
});