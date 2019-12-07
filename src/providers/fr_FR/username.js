module.exports = () => {
    const randomizer = require("../../randomizer");
    const firstname = require("./firstname")();
    const lastname = require("./lastname")();
    const MIN_CHAR = 1;
    let username = "";

    switch (randomizer.randNumber(5)) {
        case 0:
            // pau45
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                randomizer.randNumber(1000);
            break;
        case 1:
            // paublu45
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR)) +
                randomizer.randNumber(1000);
            break;
        case 2:
            // pau.blu45
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                "." +
                lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR)) +
                randomizer.randNumber(1000);
            break;
        case 3:
            // paublu
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR));
            break;
        case 4:
            // pau.blu
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                "." +
                lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR));
            break;
    }

    // we have to replace accents and bads characters from the username
    return username.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};