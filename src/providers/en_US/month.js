module.exports = () => {
    const randomizer = require("../../randomizer");
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Decembrer",
    ];
    return months[randomizer.randNumber(months.length)];
};