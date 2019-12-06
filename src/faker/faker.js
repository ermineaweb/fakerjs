const guesser = require("../guesser");
const randomizer = require("../randomizer");

/**
 * Faker data generator
 * author : Romain Amichaud
 *
 * @type {Faker}
 */
module.exports = class Faker {

    constructor(_locale = "en_EN") {
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
     * Return a random value if 'locale' and 'attribute' variables are valids.
     *
     * @param attribute
     * @param options
     * @returns {*|string}
     */
    getFake(attribute, ...options) {
        attribute = guesser.guess(attribute);

        let result = "";

        switch (attribute) {
            case "money":
                result = this._money(options);
                break;


            default:
                // we search in the /src/data/[this._locale]
                const fakes = this._getDatas(attribute);
                result = fakes[randomizer.randNumber(fakes.length)];
                break;
        }

        return result;
    }


    // TODO : finir la fonction money
    /**
     * _money([min, max])
     *
     * Private function, return a random amount of money between min and max,
     * formatting with locales defined in /src/data/[this._locale]/locales.js
     *
     * @param {*} param0
     */
    _money([min, max]) {
        let locales;
        try {
            locales = this._getDatas("locales");
        } catch {
            throw new Error(`\nLocales configuration does not exist in /src/data/${this._locale}\n`);
        }
        const rndAmount = randomizer.randNumber(max, min);
        const fmtAmount = new Intl.NumberFormat(locales.locale, {
            style: "currency",
            currency: "EUR"
        }).format(rndAmount);

        return fmtAmount;
    }

    /**
     * _getDatas(attribute)
     *
     * Private function, search the 'attribute' file in /src/data/[this._locale]/
     * if the file not exist, throw an error,
     * else, return file's content
     *
     * @param {string} attribute
     * @returns {string[]}
     * @private
     */
    _getDatas(attribute) {
        if (!this._isValidAttribute(attribute)) {
            throw new Error(`\nInvalid attribute : '${attribute}' is not valid.\n'${this._locale}' valids attributes are : \n${this._getAttributes()}\n`);
        }
        return require(__dirname + "/../data/" + this._locale + "/" + attribute);
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
        return fs.readdirSync(__dirname + "/../data/" + this._locale).map(f => f.replace(".js", ""));
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
     * Private function to get data folder.
     *
     * @returns {string[]}
     * @private
     */
    _getLocales() {
        const fs = require('fs');
        return fs.readdirSync(__dirname + "/../data");
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

};
