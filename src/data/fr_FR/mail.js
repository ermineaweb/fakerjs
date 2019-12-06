const randomizer = require("../../randomizer");
const domains = [
    'voila.fr', 'gmail.com', 'hotmail.fr', 'yahoo.fr', 'laposte.net', 'free.fr',
    'sfr.fr', 'orange.fr', 'bouygtel.fr', 'club-internet.fr', 'dbmail.com',
    'live.com', 'ifrance.com', 'noos.fr', 'tele2.fr', 'tiscali.fr', 'wanadoo.fr',
    'gmail.com', 'yahoo.com', 'hotmail.com','gmail.com','gmail.com','gmail.com',
];
const usernames = require("./username");

function generateMail() {
    let emails = [];
    for (let i = 0; i < 1000; i++) {
        let email = usernames[randomizer.randNumber(usernames.length)] + "@" + domains[randomizer.randNumber(domains.length)];
        if (!emails.includes(email)) {
            emails.push(email);
        }
    }
    return emails;
}

module.exports = generateMail();