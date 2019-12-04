const faker = require("./src");
const fk = faker.create("fr_FR");

let example = [];

for (let i = 0; i < 10; i++) {
    example.push({
        "Homme": fk.getFake("firstname-male"),
        "Femme": fk.getFake("firstname-female"),
        "Prénom": fk.getFake("firstname"),
        "Jour": fk.getFake("day"),
        "Mois": fk.getFake("month"),
        "Ville": fk.getFake("city"),
        "Code Postal": fk.getFake("zip"),
    });
}

console.table(example);
