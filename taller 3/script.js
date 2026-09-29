document.getElementById("formularioCliente").addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    let pnumeroTexto = document.getElementById("pnumero").value;
    let snumeroTexto = document.getElementById("snumero").value;
    
    let soloNumeros = /^[0-9]+$/; 

    if (soloNumeros.test(pnumeroTexto) && soloNumeros.test(snumeroTexto)) {
        
        let pnumero = Number(pnumeroTexto);
        let snumero = Number(snumeroTexto);

        let sumaSpan = document.getElementById("SUMA");
        let resultadoSuma = pnumero + snumero;
        sumaSpan.textContent = "El resultado es: " + resultadoSuma;

        let restaSpan = document.getElementById("RESTA");
        let resultadoResta = pnumero - snumero;
        restaSpan.textContent = "El resultado es: " + resultadoResta;

        let multSpan = document.getElementById("MULTIPLICACION");
        let resultadoMult = pnumero * snumero;
        multSpan.textContent = "El resultado es: " + resultadoMult;

        let divSpan = document.getElementById("DIVISION");
        if (snumero === 0) {
            divSpan.textContent = "Error: No se puede dividir entre 0";
        } else {
            let resultadoDiv = pnumero / snumero;
            divSpan.textContent = "El resultado es: " + resultadoDiv;
        }

        let modSpan = document.getElementById("MOD");
        if (snumero === 0) {
            modSpan.textContent = "Error: División entre 0";
        } else {
            let resultadoMod = pnumero % snumero; 
            modSpan.textContent = "El resultado es: " + resultadoMod;
        }

        console.log("Operaciones realizadas con éxito");

    } else {
        document.getElementById("SUMA").textContent = " ";
        document.getElementById("RESTA").textContent = " ";
        document.getElementById("MULTIPLICACION").textContent = " ";
        document.getElementById("DIVISION").textContent = " ";
        document.getElementById("MOD").textContent = " ";
        
        alert("Por favor ingrese solo números válidos en ambos campos.");
        console.log("Números inválidos");
    }
});