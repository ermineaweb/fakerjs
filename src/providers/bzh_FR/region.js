module.exports = () => {
    const randomizer = require("../../randomizer");
    const regions = [
        'Bretagne',
    ];
    return regions[randomizer.randNumber(regions.length)];
};