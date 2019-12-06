/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * French zipcode
 *
 * @type {string[]}
 */
const Randomizer = require("../../randomizer");
/**
 * generateZips()
 *
 * Generate ~500 uniques zip code
 *
 * @returns {string[]}
 */
function generateZips() {
    let zips = [];

    for (let i = 0; i < 500; i++) {
        // first number of french zip code is 0 to 9
        let first = Randomizer.randNumber(9);
        // second number is 0 to 9, but 0 to 5 if first number is 9
        let second = first == 9 ? Randomizer.randNumber(5) : Randomizer.randNumber(9);
        let thirst = Randomizer.randNumber(9);
        let fourth = Randomizer.randNumber(9);
        let fifth = Randomizer.randNumber(9);

        let zip = [first, second, thirst, fourth, fifth].join("");

        if (!zips.includes(zip)) {
            zips.push([first, second, thirst, fourth, fifth].join(""));
        }
    }

    return zips;
}

module.exports = generateZips();