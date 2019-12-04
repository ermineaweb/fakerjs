/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * French firstnames
 *
 * @type {string[]}
 */
const maleFirstname = require("./firstname-male");
const femaleFirstname = require("./firstname-female");

module.exports = maleFirstname.concat(femaleFirstname);