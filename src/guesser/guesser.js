/**
 * Faker providers generator
 * author : Romain Amichaud
 *
 * Class Guesser
 * Guesser is to facilitate development.
 * You can easy add some alliases to personalize the Guesser.
 *
 * Example usage :
 * Guesser.guess("prenom") return "firstname"
 * Guesser.guess("email") return "mail"
 *
 * @type {Guesser}
 */
class Guesser {

    /**
     * guess(name)
     *
     * Static function : guess the 'attribute' name, to facilitate develoment.
     * You can easy add some allias to personalize the Guesser.
     *
     * Example usage :
     * Guesser.guess("prenom") return "firstname"
     * Guesser.guess("email") return "mail"
     *
     * @param name
     * @returns {string|*}
     */
    static guess(name) {
        switch (name) {
            case "color":
            case "couleur":
                return "color";

            case "product":
            case "produit":
                return "product";

            case "firstname":
            case "prenom":
                return "firstname";

            case "lastname":
            case "nom":
                return "lastname";

            case "name":
            case "identite":
            case "identity":
                return "name";

            case "username":
            case "login":
            case "logon":
            case "pseudo":
                return "username";

            case "email":
            case "mail":
            case "mailaddress":
            case "adressemail":
                return "mail";

            case "job":
            case "emploi":
            case "profession":
            case "boulot":
            case "poste":
                return "job";

            case "money":
            case "argent":
            case "monnaie":
                return "money";

            case "zip":
            case "codepostal":
            case "codeP":
            case "postalcode":
            case "zipcode":
            case "codezip":
            case "postcode":
                return "zip";

            case "city":
            case "town":
            case "ville":
                return "city";

            case "phonenumber":
            case "phone":
            case "telephone":
            case "tel":
                return "phonenumber";

            default:
                return name;
        }

    }

}

module.exports = Guesser;