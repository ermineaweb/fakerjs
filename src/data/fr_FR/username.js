const randomizer = require("../../randomizer");
const firstnames = require("./firstname");
const lastnames = require("./lastname");

function generateUsernames() {
    const nbFirstnames = firstnames.length;
    const nbLastnames = lastnames.length;
    const MIN_CHAR = 1;
    let username = "";
    let usernames = [];

    for (let i = 0; i < 200; i++) {
        firstname = firstnames[randomizer.randNumber(nbFirstnames)].toLowerCase();
        lastname = lastnames[randomizer.randNumber(nbLastnames)].toLowerCase();
        switch (randomizer.randNumber(5, 1)) {
            case 1:
                // pau45
                username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                    randomizer.randNumber(1000);
                break;
            case 2:
                // paualu45
                username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                    lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR)) +
                    randomizer.randNumber(1000);
                break;
            case 3:
                // pau.alu45
                username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                    "." +
                    lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR)) +
                    randomizer.randNumber(1000);
                break;
            case 4:
                // paualu
                username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                    lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR));
                break;
            case 5:
                // pau.alu
                username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                    "." +
                    lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR));
                break;
        }

        usernames.push(username);
    }

    return usernames;
}

module.exports = generateUsernames();