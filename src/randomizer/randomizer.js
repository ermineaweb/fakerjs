/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * Class Randomizer
 * regroup static methods to get random values
 *
 * @type {Randomizer}
 */
module.exports = class Randomizer {

    static randNumber(max, min = 0) {
        if (max < min) {
            throw new Error("'max' value must be > 'min' value");
        }
        return Math.floor(Math.random() * (max - min) + min);
    }

};