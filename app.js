const faker = require("./src");
const fk = faker.create("fr_FR");

let example = [];

for (let i = 0; i < 10; i++) {
    example.push({
        "Homme": fk.getFake("firstname-male"),
        "Femme": fk.getFake("firstname-female"),
        "Jour": fk.getFake("day"),
        "Mois": fk.getFake("month"),
        "Prénom": fk.getFake("firstname"),
    });
}

console.table(example);
