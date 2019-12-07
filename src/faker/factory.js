const Faker = require("./faker");

const factory = {
    create: (locale) => new Faker(locale),
};

module.exports = factory;