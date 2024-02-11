// Ejercicio2.js

// Comprobamos si el número es primo o no
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Comprobamos si el número es palíndromo o no
function esPalindromo(cadena) {
    return cadena === cadena.split('').reverse().join('');
}

// Calculamos los números primos y palíndromos hasta X
function calcularNumeros() {
    let x = prompt("Introduce el número X (se comprobará desde 1 hasta X):");
    if (!x) return; 

    let primos = [];
    let palindromos = [];
    let primosYPalindromos = [];

    for (let i = 1; i <= x; i++) {
        if (esPrimo(i)) {
            primos.push(i);
            if (esPalindromo(i.toString())) {
                primosYPalindromos.push(i);
            }
        } else if (esPalindromo(i.toString())) {
            palindromos.push(i);
        }
    }

    // Mostramos resultados en ventana de alerta
    alert("- Primos: " + primos.join(", ") +
          "\n- Palíndromos: " + palindromos.join(", ") +
          "\n- Primos y Palíndromos: " + primosYPalindromos.join(", "));
}

window.onload = calcularNumeros;