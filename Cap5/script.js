var n;
n = 290;

var div = n % 100;
var centenas = Math.floor(n / 100);
var dezenas = Math.floor(div / 10);
var unidades = Math.floor(div % 10);

console.log(centenas);
console.log(dezenas);
console.log(unidades);