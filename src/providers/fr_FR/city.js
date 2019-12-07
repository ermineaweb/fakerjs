module.exports = () => {
    const randomizer = require("../../randomizer");
    const lastname = require("./lastname");
    const suffix = ['ville', 'bourg', '-les-Bains', '-sur-Mer', '-la-Forêt', 'boeuf', 'saint',
        'nec', 'dan', 'gonec', 'mic', 'nic', 'pot', 'tin', 'bel', 'nit', 'selle', 'mule'];

    switch (randomizer.randNumber(4)) {
        case 0:
        case 1:
        case 2:
            return lastname() + suffix[randomizer.randNumber(suffix.length)];

        case 3:
            return lastname() + "-sur-" + lastname();
    }
};