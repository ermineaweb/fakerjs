const faker = require("./index");
const fkfr = faker.create("fr_FR");

const randoms = [];
for (let index = 0; index < 50; index++) {
    randoms.push({
        username: fkfr.getFake("login"),
        name: fkfr.getFake("prenom") + " " + fkfr.getFake("lastname").toUpperCase(),
        money: fkfr.getFake("money", 1200, 3000),
        zip: fkfr.getFake("zip"),
        job: fkfr.getFake("job"),
        product: fkfr.getFake("product"),
    });
}

console.table(randoms);
