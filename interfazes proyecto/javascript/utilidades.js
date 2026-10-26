/* javascript/utilidades.js */

// Validar que el correo pertenezca al dominio institucional de la ULEAM
function validarCorreoUleam(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@(live\.)?uleam\.edu\.ec$/;
    return regex.test(correo);
}

// Validar cédula ecuatoriana (algoritmo básico de 10 dígitos)
function validarCedulaEcuatoriana(cedula) {
    if (cedula.length !== 10 || isNaN(cedula)) return false;
    
    const provincia = parseInt(cedula.substring(0, 2), 10);
    if (provincia < 1 || provincia > 24) return false;
    
    let tercerDigito = parseInt(cedula[2], 10);
    if (tercerDigito >= 6) return false; 

    let suma = 0;
    for (let i = 0; i < 9; i++) {
        let digito = parseInt(cedula[i], 10);
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }
        suma += digito;
    }

    let ultimoDigito = parseInt(cedula[9], 10);
    let decenaSuperior = Math.ceil(suma / 10) * 10;
    let digitoVerificador = decenaSuperior - suma;
    if (digitoVerificador === 10) digitoVerificador = 0;

    return digitoVerificador === ultimoDigito;
}

// Validar formato de placa ecuatoriana (Ej: ABC-1234 o ABC-123)
function validarPlacaVehiculo(placa) {
    const regex = /^[A-Z]{3}-\d{3,4}$/;
    return regex.test(placa.toUpperCase());
}