/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * French firstnames
 *
 * @type {string[]}
 */
module.exports = () => {
    const randomizer = require("../../randomizer");
    const maleFirstname = require("./firstname-male");
    const femaleFirstname = require("./firstname-female");
    // if we have to return a firstname, first choose if male or female, then return the firstname
    switch (randomizer.randNumber(2, 1)) {
        case 1:
            return maleFirstname();
            break;
        case 2:
            return femaleFirstname();
            break;
    }
}