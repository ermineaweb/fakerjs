module.exports = class Randomizer {

    static randNumber(max, min = 0) {
        if (max < min) {
            throw new Error("'max' value must be > 'min' value");
        }
        return Math.floor(Math.random() * (max - min) + min);
    }

};