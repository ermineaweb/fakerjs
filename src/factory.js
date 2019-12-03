/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * Singleton factory
 */
const Faker = require("./faker");

const instance = new Faker();

const faker = {
    create: () => instance,
}

module.exports = faker;