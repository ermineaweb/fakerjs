module.exports = () => {
    const randomizer = require("../../randomizer");
    const months = [
        "Genver",
        "C'hwevrer",
        "Meurzh",
        "Ebrel",
        "Mae",
        "Mezheven",
        "Gouere",
        "Eost",
        "Gwengolo",
        "Here",
        "Du",
        "Kerdu",
    ];
    return months[randomizer.randNumber(months.length)];
};