const faker = require("./src");
const fk = faker.create("bzh_FR");
console.log(fk.getFake("firstname.js"));