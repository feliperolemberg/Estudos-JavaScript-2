let empty = {};

let person = {
  firstName: "Felipe",
  lastName: "Ramos",
  "ano Nascimento": 2004,
  "e-mail": "email@gmail.com",
  adress: {
    street: "Rua sem saída",
    city: "São Cristóvão"
  }
};

console.log(person.firstName);
console.log(person["lastName"]);
console.log(person["ano Nascimento"]);
console.log(person["e-mail"]);
console.log(person.idade); // propriedade não definida

person.firstName = "Guilherme"; // Alterar propriedade
console.log(person.firstName);

person.idade = 21; // Adicionar propriedade
console.log(person.idade);

delete person.idade; // Excluir propriedade
console.log(person["idade"]);

console.log(["firstName"] in person);

console.log(person.adress.street);
console.log(person.adress["city"]);
console.log(person["adress"]["city"]);
console.log(person["adress"].city);
person.adress["city"] = "Aracaju";
console.log(person.adress.city);