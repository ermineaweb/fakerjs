const guesser = require("../guesser");

class Faker {

    constructor(_locale = "fr_FR") {
        this._locale = _locale;

        if (!this._isValidLocale(_locale)) {
            throw new Error(`\nInvalid locale : '${this._locale}' does not exist. Valids locales are :\n${this._getLocales()}\n`);
        }
    }

    /**
     * getFake()
     *
     * Usage :
     * fk = faker.create("fr_FR")
     * fk.getFake(attribute)
     * Return a random value if 'locale' and 'attribute' variables exists.
     *
     * @param attribute
     * @param options
     * @returns {*|string}
     */
    getFake(attribute, ...options) {
        attribute = guesser.guess(attribute);
        if (!this._isValidAttribute(attribute)) {
            throw new Error(`\nInvalid attribute : '${attribute}' is not valid.\n'${this._locale}' valids attributes are : \n${this._getAttributes()}\n`);
        }
        const result = require(__dirname + "/../providers/" + this._locale + "/" + attribute);
        return result();
    }

    /**
     * _getAttributes()
     *
     * Private function to get attributes files in the 'this._locale' folder.
     *
     * @returns {string[]}
     * @private
     */
    _getAttributes() {
        const fs = require('fs');
        return fs.readdirSync(__dirname + "/../providers/" + this._locale).map(f => f.replace(".js", ""));
    }

    /**
     * _isValidAttribute()
     *
     * Private function to check if the 'attribute' variable exist in 'this._locale' folder.
     *
     * @param attribute
     * @returns {boolean}
     * @private
     */
    _isValidAttribute(attribute) {
        return this._getAttributes().includes(attribute);
    }

    /**
     * _getLocales()
     *
     * Private function to get providers folder.
     *
     * @returns {string[]}
     * @private
     */
    _getLocales() {
        const fs = require('fs');
        return fs.readdirSync(__dirname + "/../providers");
    }

    /**
     * _isValidLocale()
     *
     * Private function to check if the 'locale' folder exist.
     *
     * @returns {boolean}
     * @private
     */
    _isValidLocale(locale) {
        return this._getLocales().includes(locale);
    }

}

module.exports = Faker;
