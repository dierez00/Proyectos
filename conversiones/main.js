function operaciones() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let operacion = document.getElementById("operaciones").value;
    let resultado;

    let peso_dolar = 20
    let peso_euro = 21.6


    if (isNaN(n1)){
        alert("Por favor, ingresa números válidos.");
        document.getElementById("resultado").innerHTML = "<h1>Por favor, ingrese numeros validos</h1>"
    } 
    else {
        switch (operacion) {
            case "pesos_dolares":
                resultado = n1 / peso_dolar;
                document.getElementById("resultado").innerHTML = `
                    <h1>Dolares: ${resultado}</h1>
                    <img src="img/dolar.png" alt="Dolar" class="monedas">
                `;
                break;
            case "dolares_pesos":
                resultado = peso_dolar*n1;
                document.getElementById("resultado").innerHTML = `
                    <h1>Pesos: ${resultado}</h1>
                    <img src="img/peso.png" alt="pesos" class="monedas">
                `;
                break;
            case "euros_pesos":
                resultado = n1*peso_euro;
                document.getElementById("resultado").innerHTML = `
                    <h1>Pesos: ${resultado}</h1>
                    <img src="img/peso.png" alt="pesos" class="monedas">
                `;
                break;
            case "pesos_euros":
                resultado = n1/peso_euro
                document.getElementById("resultado").innerHTML = `
                    <h1>Euros: ${resultado}</h1>
                    <img src="img/euro.png" alt="euros" class="monedas">
                `;
                break;
            default:
                alert("Selecciona una operación válida.");
                document.getElementById("resultado").innerHTML = "<h1>Selecciona una operacion valida</h1>"
        }
    }
}

document.getElementById("calcular").addEventListener("click", operaciones);
