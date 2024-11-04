function operaciones() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operaciones").value;
    let resultado;

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingresa números válidos.");
        document.getElementById("resultado").innerHTML = "<h1>Por favor, ingrese numeros validos</h1>"
    } 
    else {
        switch (operacion) {
            case "+":
                resultado = n1 + n2;
                break;
            case "-":
                resultado = n1 - n2;
                break;
            case "*":
                resultado = n1 * n2;
                break;
            case "/":
                if (n2 !== 0) {
                    resultado = n1 / n2;
                } else {
                    alert("No se puede dividir por cero.");
                    document.getElementById("resultado").innerHTML = "<h1>No se puede dividir por cero</h1>"
                }
                break;
            default:
                alert("Selecciona una operación válida.");
                document.getElementById("resultado").innerHTML = "<h1>Selecciona una operacion valida</h1>"
        }
    }

    document.getElementById("resultado").innerHTML = "<h1>Resultado: " + resultado + "</h1>";
}

document.getElementById("calcular").addEventListener("click", operaciones);
