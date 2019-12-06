/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * French zipcode
 */
module.exports = () => {
    const Randomizer = require("../../randomizer");

    // first number of french zip code is 0 to 9
    let first = Randomizer.randNumber(9);
    // second number is 0 to 9, but 0 to 5 if first number is 9
    let seconde = 0;
    if (first > 0) {
        second = first == 9 ? Randomizer.randNumber(5) : Randomizer.randNumber(9);
    } else {
        second = first == 9 ? Randomizer.randNumber(5, 1) : Randomizer.randNumber(9, 1);
    }
    let thirst = Randomizer.randNumber(9);
    let fourth = Randomizer.randNumber(9);
    let fifth = Randomizer.randNumber(9);

    return [first, second, thirst, fourth, fifth].join("");
}