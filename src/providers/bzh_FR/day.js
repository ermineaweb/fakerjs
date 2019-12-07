module.exports = () => {
    const randomizer = require("../../randomizer");
    const days = [
        // Sunday
        "Sul",
        // Monday
        "Lun",
        // Tuesday
        "Meurzh",
        // Wednesday
        "Merc'her",
        // Thursday
        "Yaou",
        // Friday
        "Gwener",
        // Saturday
        "Sadorn",
    ];
    return days[randomizer.randNimber(days.length)];
};