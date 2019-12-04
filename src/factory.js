/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * Singleton factory
 */
const Faker = require("./faker");

const instance = (locale) => new Faker(locale);

const faker = {
    create: (locale) => instance(locale),
}

module.exports = faker;