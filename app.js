const faker = require("./index");
const fkfr = faker.create("fr_FR");

const randoms = [];
for (let index = 0; index < 15; index++) {
    randoms.push({
        // username: fkfr.getFake("login"),
        // mail: fkfr.getFake("mail"),
        lastname: fkfr.getFake("lastname"),
        firstname: fkfr.getFake("firstname"),
        // money: fkfr.getFake("money", 1200, 3000),
        // zip: fkfr.getFake("zip"),
        // job: fkfr.getFake("job"),
        // product: fkfr.getFake("product"),
    });
}

console.table(randoms);
