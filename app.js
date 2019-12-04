const faker = require("./src");
const fk = faker.create("bzh_FR");

for (let i = 0; i < 10; i++) {
    console.log(fk.getFake("firstname.js"));
}