module.exports = () => {
    const randomizer = require("../../randomizer");
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return days[randomizer.randNumber(days.length)];
};