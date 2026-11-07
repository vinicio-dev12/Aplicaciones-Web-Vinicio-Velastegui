const CLAVE = 'estudiantes';

// Expresiones regulares
const regex = {
 cedula:    /^(0[1-9]|1\d|2[0-4])\d{8}$/,                 // 10 dígitos, provincia 01-24
 nombre:    /^[a-zA-ZÁÉÍÓÚáéíóúñÑ]{2,}( [a-zA-ZÁÉÍÓÚáéíóúñÑ]{2,})*$/, // solo letras
 direccion: /^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ .,#\-\/]{5,100}$/,
 telefono:  /^(09\d{8}|0[2-7]\d{7})$/,                     // celular o convencional
 email:     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
 facultad:  /^.+$/,                                        // debe elegir una opción
 nivel:     /^([1-9]|10)$/,
 paralelo:  /^[A-E]$/
};

// Campo, regex, id del span de error, mensaje
const reglas = [
 ['cedula',    regex.cedula,    'errorCedula',    'La cédula debe tener 10 dígitos válidos.'],
 ['apellidos', regex.nombre,    'errorApellidos', 'Los apellidos solo deben contener letras.'],
 ['nombres',   regex.nombre,    'errorNombres',   'Los nombres solo deben contener letras.'],
 ['direccion', regex.direccion, 'errorDireccion', 'Ingrese una dirección válida (mín. 5 caracteres).'],
 ['telefono',  regex.telefono,  'errorTelefono',  'Teléfono inválido (Ej. 0991234567 o 042345678).'],
 ['email',     regex.email,     'errorEmail',     'Ingrese un correo electrónico válido.'],
 ['facultad',  regex.facultad,  'errorFacultad',  'Seleccione una facultad.'],
 ['nivel',     regex.nivel,     'errorNivel',     'Seleccione un nivel.'],
 ['paralelo',  regex.paralelo,  'errorParalelo',  'Seleccione un paralelo.']
];

// --- localStorage ---
function obtenerEstudiantes() {
 try {
  return JSON.parse(localStorage.getItem(CLAVE)) || [];
 } catch (e) {
  return [];
 }
}

function mostrarStorage() {
 const lista = obtenerEstudiantes();
 document.getElementById('contador').innerText = lista.length;
 document.getElementById('visorJSON').innerText = JSON.stringify(lista, null, 2);
}

// --- Formulario ---
document.getElementById('registroForm').addEventListener('submit', function(e) {
 e.preventDefault();

 document.querySelectorAll('.error').forEach(el => el.innerText = '');
 let esValido = true;
 const estudiante = {};

 reglas.forEach(([campo, re, idError, mensaje]) => {
  const valor = document.getElementById(campo).value.trim();
  if (!re.test(valor)) {
   document.getElementById(idError).innerText = mensaje;
   esValido = false;
  }
  estudiante[campo] = valor;
 });

 const lista = obtenerEstudiantes();

 // Evitar cédulas repetidas
 if (esValido && lista.some(est => est.cedula === estudiante.cedula)) {
  document.getElementById('errorCedula').innerText = 'Esta cédula ya está registrada.';
  esValido = false;
 }

 if (esValido) {
  lista.push(estudiante);
  localStorage.setItem(CLAVE, JSON.stringify(lista));
  mostrarStorage();
  alert('¡Estudiante registrado con éxito!');
  this.reset();
 }
});

document.getElementById('btnLimpiar').addEventListener('click', function() {
 if (confirm('¿Borrar todos los registros guardados?')) {
  localStorage.removeItem(CLAVE);
  mostrarStorage();
 }
});

mostrarStorage();
