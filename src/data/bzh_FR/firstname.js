/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * Brittany firstnames
 *
 * @type {string[]}
 */
const maleFirstname = require("./firstname-male");
const femaleFirstname = require("./firstname-female");

module.exports = maleFirstname.concat(femaleFirstname);