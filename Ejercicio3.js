// Ejercicio3.js

function leerNumeros() {
    let numeros = [];
    let numero;

    // Leemos números hasta que se introduzca un valor menor que 1 o no numérico
    do {
        numero = prompt("Introduce un número positivo (mayor o igual que 1):");
        if (numero !== null) {
            numero = parseFloat(numero);
            if (isNaN(numero) || numero < 1) {
                break; 
            }
            numeros.push(numero);
        }
    } while (numero !== null);

    // Mostramos la lista de números introducidos
    document.write("<p>- Lista de números introducidos: " + numeros.join(", ") + "</p>");

    // Calculamos y mostramos la cantidad de números pares e impares
    let pares = numeros.filter(num => num % 2 === 0);
    let impares = numeros.filter(num => num % 2 !== 0);
    document.write("<p>- Números Pares: " + pares.length + "</p>");
    document.write("<p>- Números Impares: " + impares.length + "</p>");

    // Calculamos la suma total
    let suma = numeros.reduce((acc, cur) => acc + cur, 0);
    document.write("<p>- Suma total: " + suma + "</p>");

    // Calculamos la media
    let media = suma / numeros.length;
    document.write("<p>- Media: " + media + "</p>");

    // Encontramos el número mayor y el menor
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    document.write("<p>- Mayor: " + mayor + "</p>");
    document.write("<p>- Menor: " + menor + "</p>");
}

window.onload = leerNumeros;