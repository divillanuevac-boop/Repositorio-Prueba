function sumar(a, b) {
return a + b;
}
function restar(a, b) {
return a - b;
}
function dividir(a, b) {
if (b === 0) {
throw new Error("No se puede dividir por cero");
}
return a / b;
}
function esPar(n) {
return n % 2 === 0;
}
function factorial(n) {
if (n < 0) {
throw new Error("Número negativo");
}
if (n === 0) return 1;
return n * factorial(n - 1);
}
module.exports = { sumar, restar, dividir, esPar, factorial };