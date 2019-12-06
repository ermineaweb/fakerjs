const faker = require("./index");
const fkfr = faker.create("fr_FR");

const randoms = [];
for (let index = 0; index < 40; index++) {
    randoms.push({
        username: fkfr.getFake("login"),
        mail: fkfr.getFake("mail"),
        job: fkfr.getFake("job"),
        address: fkfr.getFake("street"),
        city: fkfr.getFake("zip") + " " + fkfr.getFake("city"),
    });
}

console.table(randoms);
