// T - Temperatura em Celsius
// F - Temperatura em Fahrenheit

let celsius = prompt("Informe a temperatura em Celsius:");

celsius = Number(celsius);

let fahrenheit = (celsius * 9/5) + 32;

console.log("Temperatura em Fahrenheit: " + fahrenheit + " °F");