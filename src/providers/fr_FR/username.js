module.exports = () => {
    const randomizer = require("../../randomizer");
    const firstname = require("./firstname")();
    const lastname = require("./lastname")();
    const MIN_CHAR = 2;
    let username = "";

    switch (randomizer.randNumber(9)) {
        case 0:
            // pau45
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) +
                randomizer.randNumber(100);
            break;
        case 1:
            // pauline.b
            username = firstname + lastname.slice(0, randomizer.randNumber(1));
            break;
        case 2:
            // pau.blu45
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) + "." +
                lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR)) +
                randomizer.randNumber(100);
            break;
        case 3:
            // paublu
            username = firstname.slice(0, 3) + lastname.slice(0, 3);
            break;
        case 4:
            // pau.blu
            username = firstname.slice(0, randomizer.randNumber(firstname.length, MIN_CHAR)) + "." +
                lastname.slice(0, randomizer.randNumber(lastname.length, MIN_CHAR));
            break;
        case 5:
            // pauline.blurin
            username = firstname + "." + lastname;
            break;
        case 6:
            // pauline456
            username = firstname + randomizer.randNumber(100);
            break;
        case 7:
            // paupau456
            username = firstname.slice(0, 3) + firstname.slice(0, 3) + randomizer.randNumber(100);
            break;
        case 8:
            // paupau
            username = firstname.slice(0, 3) + firstname.slice(0, 3);
            break;
    }

    // we have to replace accents and bads characters from the username
    return username.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};