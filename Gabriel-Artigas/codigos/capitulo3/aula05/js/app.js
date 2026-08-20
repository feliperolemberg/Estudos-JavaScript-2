let message1 = "Bem-vindo";
let message2 = 'Até logo';
let message3 = "Eu me chamo 'Gabriel'";
let message4 = 'Ele se chama "Lucas"';
let message5 = `Aqui pode usar aspas ;
                'simples' ou "duplas"`;

let nome = "Gabriel";
let message = `Olá, eu sou ${nome}`;
console.log(message);

let str = 'I\'m a string!';
console.log(str)

let str2 = "Eu sou o \"Gabriel\"";
console.log(str2);

let str3 = "Segue abaixo o nome:\n\tGabriel Artigas";
console.log(str3);

let str4 = "Bem vindo!";
console.log(str4.length);
console.log(str4[0]);
console.log(str4[str4.length - 1]);

let nome2 = "Gabriel";
let str5 = "Olá " + nome2;
console.log(str5);

let str6 = "Olá ";
str6 += "Gabriel";
str6 += ", seja bem-vindo!";
console.log(str6);

let n = 100;
let s1 = String(n);
let s2 = n.toString();
let s3 = "" + n;