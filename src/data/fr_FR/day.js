module.exports = () => {
    const randomizer = require("../../randomizer");
    const days = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];
    return days[randomizer.randNimber(days.length)];
}