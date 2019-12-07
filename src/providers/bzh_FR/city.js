module.exports = () => {
    const randomizer = require("../../randomizer");
    const lastname = require("./lastname");
    const suffix = ['bourg', '-les-Bains', '-sur-Mer', '-la-Forêt', 'nanec', 'nan', 'badec',
        'nec', 'agonec', 'gonec', 'mic', 'anic', 'opotec', 'atinec', 'bel', 'nit',
        'ivinec', 'ulec', 'ovec', 'ivec'];

    switch (randomizer.randNumber(4)) {
        case 0:
        case 1:
        case 2:
            return lastname() + suffix[randomizer.randNumber(suffix.length)];

        case 3:
            return lastname() + "-sur-" + lastname();
    }
};