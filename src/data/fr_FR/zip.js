/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * French zipcode
 *
 * @type {string[]}
 */

/**
 * randomNb()
 *
 * @param max
 * @param min
 * @returns {number}
 */
function randomNb(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

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
        let first = randomNb(9);
        // second number is 0 to 9, but 0 to 5 if first number is 9
        let second = first == 9 ? randomNb(5) : randomNb(9);
        let thirst = randomNb(9);
        let fourth = randomNb(9);
        let fifth = randomNb(9);

        let zip = [first, second, thirst, fourth, fifth].join("");

        if (!zips.includes(zip)) {
            zips.push([first, second, thirst, fourth, fifth].join(""));
        }
    }

    return zips;
}

module.exports = generateZips();