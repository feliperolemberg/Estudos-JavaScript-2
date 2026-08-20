// Decimal
let counter = 100;

// Octal
let num = 0o71;
console.log(num);

// Hexadecimal
num = 0x1a;
console.log(num);

// Números de ponto flutuante
let price = 9.99;
let tax = 0.08;
let discount = .05;

let amount = 3.14e7;
console.log(amount);

amount = 50e-7;
console.log(amount);

amount = 0.0000005;
console.log(amount);

amount = 0.2 + 0.1;
console.log(amount);

let num2 = 200.00; // Interpretado como um inteiro 200
console.log(num2);

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324

console.log('a' / 2); // NaN

console.log(NaN / 2); // Nan

console.log(NaN == NaN);

let pageView = 9007199254740991n;
console.log(pageView);

// Literais binários
let e = parseInt('111', 2);
console.log(e);

let f = 0b111;
console.log(f);

//Separador Numérico
const budget = 1_000_000_000;
console.log(budget);

let expense = 123_450.05;
expense = 0.000_001;

// BigInt
let max = 9_223_372_036_854_775_807n;

// binary
let nibbles = 0b1011_0101_0101;

// octal
let val = 0o1234_5670;

// hex
let message = 0xD0_E0_F0;
console.log(message);

// Números infinitos
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(Infinity);
console.log(-Infinity);

let x = 1.797693134862315e+308 * 2;
console.log(x);

let y = -1.797693134862315e+308 * 2;
console.log(y);