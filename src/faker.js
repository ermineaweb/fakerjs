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
            throw new Error(`Invalid locale : '${this._locale}' does not exist.`);
        }
    }

    /**
     * getFake()
     *
     * Usage : faker.get(attribute)
     * Return a random value if 'locale' and 'attribute' variables are valids.
     *
     * @param attribute
     * @returns {*|string}
     */
    getFake(attribute, ...options) {
        let result = "";

        switch (attribute) {
            case "money":
                result = "money work";
                result = this._money(options);
                break;

            default:
                /**
                 * default return : we search in the /src/data/locale 
                 * if we find 'attribute' file, we return a random value of this file
                 * else, an error is throwing
                 */
                if (!this._isValidAttribute(attribute)) {
                    throw new Error(`Invalid attribute : '${attribute}' is not valid.\n'${this._locale}' attributes are : \n${this._getAttributes()}`);
                }

                const attributes = require(__dirname + "/data/" + this._locale + "/" + attribute);
                result = attributes[Faker._randomNb(attributes.length)];

                break;
        }

        return result;
    }

    _money([min, max]) {
        return a + b;
    }

    /**
     * _getAttributes()
     *
     * Private function to get attributes files in the 'locale' folder.
     *
     * @returns {string[]}
     * @private
     */
    _getAttributes() {
        const fs = require('fs');
        return fs.readdirSync(__dirname + "/data/" + this._locale).map(f => f.replace(".js", ""));
    }

    /**
     * _isValidAttribute()
     *
     * Private function to check if the 'attribute' variable exist in 'locale' folder.
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
        return fs.readdirSync(__dirname + "/data");
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

    /**
     * _randomNb(max, min)
     *
     * Static private function to get a random number between 'min' and 'max'.
     * 'min' = 0 if not precised
     *
     * @param min
     * @param max
     * @returns {number}
     * @private
     */
    static _randomNb(max, min = 0) {
        return Math.floor(Math.random() * (max - min) + min);
    }

}
