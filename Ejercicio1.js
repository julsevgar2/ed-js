// Ejercicio1.js

function encontrarPatron(cadena, patron) {
    
    cadena = cadena.toLowerCase();
    patron = patron.toLowerCase();

    let count = 0;
    let index = cadena.indexOf(patron); 

    while (index !== -1) {
        count++; 
        index = cadena.indexOf(patron, index + 1); 
    }
    return count; 
}

// Usamos esto para contar el número total de todas las veces que los patrones del array aparecen en la cadena
function totalPatrones(cadena, arrayPatrones) {
    let totalCount = 0;
    
    arrayPatrones.forEach(patron => {
        totalCount += encontrarPatron(cadena, patron);
    });

    return totalCount; 
}

// Así mostramos los resultados en el documento HTML
function mostrarResultados() {

    const cadena = prompt("Introduce cadena de texto a verificar:");

    // Array de patrones
    const patrones = ["AA", "BCA", "RBT", "JT"];

    document.write("<p>Cadena de texto introducida: " + cadena + "</p>");

    document.write("<p>Patrones a buscar: " + patrones.join(", ") + "</p>");

    // Calculamos y mostramos el número total de veces que aparecen los patrones en la cadena
    const total = totalPatrones(cadena, patrones);
    document.write("<p>Aparecen: " + total + " veces</p>");
}

window.onload = mostrarResultados;