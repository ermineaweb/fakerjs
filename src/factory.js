/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * Faker factory
 */
const Faker = require("./faker");

const factory = {
    create: (locale) => new Faker(locale),
};

module.exports = factory;