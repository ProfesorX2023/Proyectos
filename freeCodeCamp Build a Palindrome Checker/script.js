const boton = document.getElementById("check-btn");
const entrada = document.getElementById("text-input");
const salida = document.getElementById("result");

boton.addEventListener("click", function () {
    if (entrada.value.trim() === "") {
        alert("Please input a value");
    } else {
        esPalindromo(entrada);
    }
});

function esPalindromo(entrada) {
    const textoLimpio = entrada.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (textoLimpio === textoLimpio.split("").reverse().join("")) {
        salida.innerText = `${entrada.value} is a palindrome`;
    } else {
        salida.innerText = `${entrada.value} is not a palindrome`;
    }
}

// function esPalindromo(texto) {
//     const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
//     return textoLimpio === textoLimpio.split("").reverse().join("");
// }

// boton.addEventListener("click", function () {
//     if (entrada.value.trim() === "") {
//         alert("Please input a value");
//     } else if (esPalindromo(entrada.value)) {
//         alert("The input is a palindrome!");
//     } else {
//         alert("The input is not a palindrome.");
//     }
// });
