const faker = require("./index");
const fk = faker.create("fr_FR");

console.log(fk.getFake("firstname"));
console.log(fk.getFake("money", 2, 5));
