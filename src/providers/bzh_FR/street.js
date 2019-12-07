module.exports = () => {
    const randomizer = require("../../randomizer");
    const lastname = require("./lastname");
    const firstname = require("./firstname");
    const prefix = [
        'rue', 'rue', 'chemin', 'avenue', 'boulevard', 'place', 'impasse',
    ];

    switch (randomizer.randNumber(3)) {
        case 0:
            return randomizer.randNumber(100) + " " + prefix[randomizer.randNumber(prefix.length)] + " " + lastname();
        case 1:
            return randomizer.randNumber(100) + " " + prefix[randomizer.randNumber(prefix.length)] + " " + firstname() + " " + lastname();
        case 2:
            return randomizer.randNumber(100) + " " + prefix[randomizer.randNumber(prefix.length)] + " de " + lastname();
    }
};