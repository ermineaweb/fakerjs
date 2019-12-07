module.exports = () => {
    const randomizer = require("../../randomizer");
    const username = require("./username")();
    const domains = [
        'voila.fr', 'gmail.com', 'hotmail.fr', 'yahoo.fr', 'laposte.net', 'free.fr',
        'sfr.fr', 'orange.fr', 'bouygtel.fr', 'club-internet.fr', 'dbmail.com',
        'live.com', 'ifrance.com', 'noos.fr', 'tele2.fr', 'tiscali.fr', 'wanadoo.fr',
        'gmail.com', 'yahoo.com', 'hotmail.com', 'gmail.com', 'gmail.com', 'gmail.com',
    ];

    return username + "@" + domains[randomizer.randNumber(domains.length)];
};