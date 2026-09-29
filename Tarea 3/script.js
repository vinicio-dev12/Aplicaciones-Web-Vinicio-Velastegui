document.getElementById("formularioCliente").addEventListener("submit", function(evento) {
    evento.preventDefault();
    let cedula= document.getElementById("cedula").value;
    
    let errorCedula = document.getElementById("ErrorCedula");
    let soloNumeros = /^[0-9]+$/;
    if(cedula.length !== 10 || !soloNumeros.test(cedula)) {
        errorCedula.textContent="cedula menor a 10 digitos o caracter invalido ";
    } else {
        errorCedula.textContent= "verificado";
        console.log("cedula valido");
    } 
    
    let nombre= document.getElementById("nombre").value;

    let errorNombre = document.getElementById("ErrorNombre");
    let tieneNumeros = /\d/;
    if(nombre.length ===0 ||nombre.length > 30 || tieneNumeros.test("nombre")) {
        errorNombre.textContent="nombre mayor a 30 caracteres o caracter invalido";
    } else {
        errorNombre.textContent="verificado";
        console.log("nombre valido");
    }

    let direccion= document.getElementById("direccion").value;

    let errorDireccion = document.getElementById("ErrorDireccion");
    if(direccion.length === 0 || direccion.length > 50) {
        errorDireccion.textContent=" direccion mayor a 50 caracteres ";
    } else{
        errorDireccion.textContent="verificado";
        console.log("direccion validado");
    }

    let telefono= document.getElementById("telefono").value;

    let errorTelefono = document.getElementById("ErrorTelefono");
    if(telefono.length !== 10 || !soloNumeros.test("telefono")) {
        errorTelefono.textContent="telefono menor a 10 digitos o caracter invalido";
    } else {
        errorTelefono.textContent="verificado";
        console.log("telefono valido");
    }

    let correo= document.getElementById("correo").value;

    let errorCorreo = document.getElementById("ErrorCorreo");
    if(!correo.includes("@") || !correo.includes(".")) {
        errorCorreo.textContent="Correo no valido"
    } else {
        errorCorreo.textContent="verificado";
        console.log("correo valido");
    }

});