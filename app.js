const faker = require("./index");
const fk = faker.create("en_US");
const fkfr = faker.create("fr_FR");

const randoms = [];
for (let index = 0; index < 5; index++) {
    randoms.push({
        name: fk.getFake("prenom") + " " + fk.getFake("lastname").toUpperCase(),
        money: fk.getFake("money", 2500, 5000),
        zip: fk.getFake("zip"),
        job: fk.getFake("job"),
    });
}
for (let index = 0; index < 5; index++) {
    randoms.push({
        name: fkfr.getFake("prenom") + " " + fkfr.getFake("lastname").toUpperCase(),
        money: fkfr.getFake("money", 1200, 3000),
        zip: fkfr.getFake("zip"),
        job: fkfr.getFake("job"),
    });
}

console.table(randoms);
