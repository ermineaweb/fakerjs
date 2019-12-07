module.exports = () => {
    const randomizer = require("../../randomizer");
    const maleFirstname = require("./firstname-male");
    const femaleFirstname = require("./firstname-female");
    // if we have to return a firstname, first choose if male or female, then return the firstname
    switch (randomizer.randNumber(1)) {
        case 0:
            return maleFirstname();
        case 1:
            return femaleFirstname();
    }
};