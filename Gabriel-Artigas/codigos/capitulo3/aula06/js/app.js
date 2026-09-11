let isPending = false;
let isDone = true;

console.log(typeof(isPending));
console.log(typeof isDone);

let a = Boolean('Ola');
console.log(a);
console.log(typeof a);

console.log(Boolean('Ola')); // true
console.log(Boolean('')); // false

console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false

console.log(Boolean({foo: 100})); // true
console.log(Boolean(null)); // false

let b = new Boolean(false);
console.log(b.valueOf()); // false
console.log(b.toString()); // false

let completed = true;
let active = new Boolean(false);

active.primitiveValue = active.valueOf();
console.log(active.primitiveValue); // false

completed.name = "primitive";
console.log(completed.name); // undefined

console.log(typeof completed); // boolean
console.log(typeof active); // object

console.log(completed instanceof Boolean); // false
console.log(active instanceof Boolean); // true
