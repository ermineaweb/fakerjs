const faker = require("./index");
const fk = faker.create("bzh_FR");

console.log(fk.getFake("firstname"));
console.log(fk.getFake("money", 10000, 100000));

const randoms = [];
for (let index = 0; index < 10; index++) {
    randoms.push({
        name: fk.getFake("firstname") + " " + fk.getFake("firstname"),
        money: fk.getFake("money", 10, 100),
    });
}

console.table(randoms);
