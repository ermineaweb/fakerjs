/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * French firstnames
 *
 * @type {string[]}
 */
const randomizer = require("../../randomizer");
const maleFirstname = require("./firstname-male");
const femaleFirstname = require("./firstname-female");

module.exports = () => {
    const rnd = randomizer.randNumber(3, 1);
    switch (rnd) {
        case 1:
            return maleFirstname();
            break;
        case 2:
            return femaleFirstname();
            break;
    }
}