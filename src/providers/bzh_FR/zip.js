module.exports = () => {
    const Randomizer = require("../../randomizer");

    // brittains zip code begin by 22 29 35 56
    let first = 0;
    switch (Randomizer.randNumber(4)) {
        case 0:
            first = 29;
            break;
        case 1:
            first = 56;
            break;
        case 2:
            first = 22;
            break;
        case 3:
            first = 35;
            break;
    }
    let thirst = Randomizer.randNumber(9);
    let fourth = Randomizer.randNumber(9);
    let fifth = Randomizer.randNumber(9);

    return [first, thirst, fourth, fifth].join("");
};